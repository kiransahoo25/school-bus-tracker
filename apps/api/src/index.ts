import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import http from "http";
import { db } from "./db/pool";
import boardingRoutes from "./modules/boarding/boarding.routes";
import parentsRoutes from "./modules/parents/parents.routes";
import tripsRoutes from "./modules/trips/trips.routes";
import telemetryRoutes from "./modules/telemetry/telemetry.routes"; // Import added
import { setupWebSocket } from "./realtime/ws.server";

dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

setupWebSocket(server);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/v1/boarding", boardingRoutes);
app.use("/api/v1/parents", parentsRoutes);
app.use("/api/v1/trips", tripsRoutes);
app.use("/api/v1/telemetry", telemetryRoutes); // Route added

app.get("/api/health", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");
    res.json({ status: "ok", dbTime: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ status: "error" });
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
