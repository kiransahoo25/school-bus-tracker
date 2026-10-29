import { Request, Response } from "express";
import { findNearestStops } from "./routeMatcher.service";

export const detectRoute = async (req: Request, res: Response) => {
  try {
    const { lat, lng } = req.body;

    if (!lat || !lng) {
      return res
        .status(400)
        .json({ error: "Latitude and Longitude are required" });
    }

    const matches = await findNearestStops(Number(lat), Number(lng));

    res.status(200).json({
      success: true,
      message: "Route matches found",
      matches,
    });
  } catch (error: any) {
    console.error("Route Match Error:", error);
    res.status(500).json({ error: "Failed to detect route" });
  }
};
