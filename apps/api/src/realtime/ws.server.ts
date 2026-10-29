import { WebSocketServer, WebSocket } from "ws";
import { Server } from "http";

let currentBusLocation = {
  lat: 12.9352,
  lng: 77.6245,
};

// We need to track if we already sent the alert so we don't spam the parent
let alertSent = false;

let wss: WebSocketServer;

export const setupWebSocket = (server: Server) => {
  wss = new WebSocketServer({ server, path: "/ws" });

  wss.on("connection", (ws: WebSocket) => {
    console.log("📱 New client connected to WebSocket");

    // Send current location immediately
    ws.send(
      JSON.stringify({
        type: "BUS_LOCATION",
        busId: "KA-01-AB-1234",
        lat: currentBusLocation.lat,
        lng: currentBusLocation.lng,
        timestamp: new Date().toISOString(),
      }),
    );

    ws.on("close", () => {
      console.log("📱 Client disconnected");
    });
  });

  return wss;
};

export const broadcastBusLocation = (
  busId: string,
  lat: number,
  lng: number,
) => {
  currentBusLocation = { lat, lng };

  if (!wss) return;

  // Broadcast Location
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          type: "BUS_LOCATION",
          busId,
          lat,
          lng,
          timestamp: new Date().toISOString(),
        }),
      );
    }
  });

  // --- GEOFENCING LOGIC ---
  // Target Stop: Green Park Main Gate (12.9352, 77.6245)
  const targetLat = 12.9352;
  const targetLng = 77.6245;

  // Calculate distance in meters using Haversine formula
  const R = 6371e3; // Earth radius in meters
  const φ1 = (lat * Math.PI) / 180;
  const φ2 = (targetLat * Math.PI) / 180;
  const Δφ = ((targetLat - lat) * Math.PI) / 180;
  const Δλ = ((targetLng - lng) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in meters

  // If bus is within 500 meters of the stop, send an alert!
  if (distance < 500 && !alertSent) {
    alertSent = true;
    console.log("🚨 Bus is approaching the stop! Sending alert...");

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({
            type: "ALERT",
            message:
              "🚌 Your child's bus is approaching the stop! ETA: 2 minutes.",
          }),
        );
      }
    });
  }

  // Reset the alert if the bus drives far away (so we can test it again)
  if (distance > 1000) {
    alertSent = false;
  }
};
