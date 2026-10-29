import { Router } from "express";
import { getAllStudents, createStudent } from "./students.controller";

const router = Router();

router.get("/", getAllStudents);
router.post("/", createStudent);

export default router;
