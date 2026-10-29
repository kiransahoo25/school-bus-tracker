import { Request, Response } from "express";
import { db } from "../../db/pool";

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await db.query(`
      SELECT s.id, s.name, s.grade, s.section, s.student_code, r.name as route_name 
      FROM students s
      LEFT JOIN student_route_assignments sra ON s.id = sra.student_id
      LEFT JOIN routes r ON sra.route_id = r.id
      ORDER BY s.grade, s.name
    `);

    res.status(200).json({ success: true, data: result.rows });
  } catch (error: any) {
    console.error("Fetch students error:", error);
    res.status(500).json({ error: "Failed to fetch students" });
  }
};

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { name, grade, section, schoolId } = req.body;

    const result = await db.query(
      `INSERT INTO students (name, grade, section, school_id) 
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, grade, section, schoolId],
    );

    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error: any) {
    console.error("Create student error:", error);
    res.status(500).json({ error: "Failed to create student" });
  }
};
