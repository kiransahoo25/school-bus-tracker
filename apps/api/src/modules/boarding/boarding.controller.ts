import { Request, Response } from "express";
import { db } from "../../db/pool";
import { WebSocketServer, WebSocket } from "ws";

// We need to access the global WebSocket server to send messages
// We will export a setter from ws.server.ts soon
let wssInstance: WebSocketServer | null = null;
export const setWssInstance = (wss: WebSocketServer) => {
  wssInstance = wss;
};

export const verifyBoarding = async (req: Request, res: Response) => {
  try {
    const { studentId, tripId, eventType } = req.body;

    if (!studentId || !tripId || !eventType) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 1. Save to database
    const result = await db.query(
      `INSERT INTO boarding_events (trip_id, student_id, event_type, method)
       VALUES ($1, $2, $3, 'MANUAL')
       ON CONFLICT (trip_id, student_id, event_type) 
       DO UPDATE SET recorded_at = NOW()
       RETURNING *`,
      [tripId, studentId, eventType],
    );

    // 2. Broadcast to all connected Parents!
    if (wssInstance) {
      wssInstance.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({
              type: "BOARDING_EVENT",
              studentId: studentId,
              eventType: eventType,
            }),
          );
        }
      });
    }

    res.status(200).json({
      success: true,
      message: `Student marked as ${eventType}`,
      data: result.rows[0],
    });
  } catch (error: any) {
    console.error("Boarding error:", error);
    res.status(500).json({ error: "Failed to record boarding event" });
  }
};
