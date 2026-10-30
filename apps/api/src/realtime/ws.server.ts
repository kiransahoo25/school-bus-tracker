import { WebSocketServer, WebSocket } from "ws";
import { Server } from "http";

// Starting location: Master Canteen, Bhubaneswar
let currentBusLocation = {
  lat: 20.2961,
  lng: 85.8245,
};

let alertSent = false;
let wss: WebSocketServer;

export const setupWebSocket = (server: Server) => {
  wss = new WebSocketServer({ server, path: "/ws" });

  wss.on("connection", (ws: WebSocket) => {
    console.log("📱 New client connected to WebSocket");

    ws.send(
      JSON.stringify({
        type: "BUS_LOCATION",
        busId: "OD-02-AB-1234",
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
  // Target Stop: Master Canteen, Bhubaneswar (20.2961, 85.8245)
  const targetLat = 20.2961;
  const targetLng = 85.8245;

  const R = 6371e3;
  const φ1 = (lat * Math.PI) / 180;
  const φ2 = (targetLat * Math.PI) / 180;
  const Δφ = ((targetLat - lat) * Math.PI) / 180;
  const Δλ = ((targetLng - lng) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  if (distance < 500 && !alertSent) {
    alertSent = true;
    console.log("🚨 Bus is approaching the stop! Sending alert...");

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({
            type: "ALERT",
            message:
              "🚌 Your child's bus is approaching Master Canteen! ETA: 2 minutes.",
          }),
        );
      }
    });
  }

  if (distance > 1000) {
    alertSent = false;
  }
};
// Export the WSS instance so the boarding controller can use it
export const getWss = () => wss;
