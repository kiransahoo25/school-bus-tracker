import { Request, Response } from "express";
import { broadcastBusLocation } from "../../realtime/ws.server";

export const updateLocation = async (req: Request, res: Response) => {
  try {
    const { busId, lat, lng } = req.body;

    if (!busId || !lat || !lng) {
      return res.status(400).json({ error: "Missing coordinates" });
    }

    // This sends the real GPS data to the WebSocket immediately
    broadcastBusLocation(busId, lat, lng);

    res.status(200).json({ success: true, message: "Location updated" });
  } catch (error: any) {
    console.error("Telemetry error:", error);
    res.status(500).json({ error: "Failed to update location" });
  }
};
