import { Router } from "express";
import { detectRoute } from "./parents.controller";

const router = Router();

// Route: POST /api/v1/parents/detect-route
router.post("/detect-route", detectRoute);

export default router;
