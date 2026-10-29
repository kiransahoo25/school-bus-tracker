import { Request, Response } from "express";
import { db } from "../../db/pool";

export const getTripStudents = async (req: Request, res: Response) => {
  try {
    const { tripId } = req.params;

    // In a real app, we would use tripId to find the route and students.
    // For this MVP, since we only have one active route, we will just fetch all students assigned to Route 7
    const result = await db.query(`
      SELECT s.id, s.name, s.grade, s.section 
      FROM students s
      JOIN student_route_assignments sra ON s.id = sra.student_id
      JOIN routes r ON sra.route_id = r.id
      WHERE r.name = 'Route 7 - Green Park'
    `);

    res.status(200).json({ success: true, data: result.rows });
  } catch (error: any) {
    console.error("Fetch trip students error:", error);
    res.status(500).json({ error: "Failed to fetch students for this trip" });
  }
};
