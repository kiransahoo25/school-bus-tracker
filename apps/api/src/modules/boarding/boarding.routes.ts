import { Router } from "express";
import { verifyBoarding } from "./boarding.controller";

const router = Router();

// Route: POST /api/v1/boarding/verify
router.post("/verify", verifyBoarding);

export default router;
