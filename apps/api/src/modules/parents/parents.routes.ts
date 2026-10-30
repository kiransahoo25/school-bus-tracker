import { Router } from "express";
import { detectRoute, getMyStudents } from "./parents.controller";

const router = Router();

router.post("/detect-route", detectRoute);
router.get("/my-students", getMyStudents);

export default router;
