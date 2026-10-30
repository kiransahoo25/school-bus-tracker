import { Request, Response } from "express";
import { findNearestStops } from "./routeMatcher.service";
import { db } from "../../db/pool";

export const detectRoute = async (req: Request, res: Response) => {
  try {
    const { lat, lng } = req.body;
    if (!lat || !lng)
      return res
        .status(400)
        .json({ error: "Latitude and Longitude are required" });

    const matches = await findNearestStops(Number(lat), Number(lng));
    res
      .status(200)
      .json({ success: true, message: "Route matches found", matches });
  } catch (error: any) {
    console.error("Route Match Error:", error);
    res.status(500).json({ error: "Failed to detect route" });
  }
};

export const getMyStudents = async (req: Request, res: Response) => {
  try {
    // For this demo, since we only have one parent in the DB, we will fetch all students
    // In a real app, we would use req.user.id (from JWT) to filter by parent_id
    const result = await db.query(`
      SELECT s.id, s.name, s.grade, s.section, r.name as route_name, st.name as stop_name
      FROM students s
      LEFT JOIN student_route_assignments sra ON s.id = sra.student_id
      LEFT JOIN routes r ON sra.route_id = r.id
      LEFT JOIN stops st ON sra.stop_id = st.id
      LIMIT 5
    `);

    res.status(200).json({ success: true, data: result.rows });
  } catch (error: any) {
    console.error("Fetch my students error:", error);
    res.status(500).json({ error: "Failed to fetch students" });
  }
};
