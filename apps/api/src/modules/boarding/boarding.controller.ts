import { Request, Response } from "express";
import { db } from "../../db/pool";

export const verifyBoarding = async (req: Request, res: Response) => {
  try {
    const { studentId, tripId, eventType } = req.body;

    if (!studentId || !tripId || !eventType) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Insert the boarding event into Supabase
    // Note: ON CONFLICT prevents errors if they double-tap the button
    const result = await db.query(
      `INSERT INTO boarding_events (trip_id, student_id, event_type, method)
       VALUES ($1, $2, $3, 'MANUAL')
       ON CONFLICT (trip_id, student_id, event_type) 
       DO UPDATE SET recorded_at = NOW()
       RETURNING *`,
      [tripId, studentId, eventType],
    );

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
