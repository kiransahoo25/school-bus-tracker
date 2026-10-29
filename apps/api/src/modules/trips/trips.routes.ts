import { Router } from "express";
import { getTripStudents } from "./trips.controller";

const router = Router();

router.get("/:tripId/students", getTripStudents);

export default router;
