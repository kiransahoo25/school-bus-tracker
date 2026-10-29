import { Router } from "express";
import { updateLocation } from "./telemetry.controller";

const router = Router();

router.post("/update", updateLocation);

export default router;
