"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Bell } from "lucide-react";

// Fix Leaflet's default icon path issues
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function LiveBusMap() {
  // 1. Initial starting location: Master Canteen, Bhubaneswar
  const [busLocation, setBusLocation] = useState<{ lat: number; lng: number }>({
    lat: 20.2961,
    lng: 85.8245,
  });
  const [alert, setAlert] = useState<string | null>(null);

  useEffect(() => {
    // 2. Connect to the live backend WebSocket
    const ws = new WebSocket("wss://school-bus-api-c3x7.onrender.com/ws");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "BUS_LOCATION") {
        setBusLocation({ lat: data.lat, lng: data.lng });
      }

      if (data.type === "ALERT") {
        setAlert(data.message);
        setTimeout(() => setAlert(null), 6000);
      }
    };

    return () => ws.close();
  }, []);

  return (
    <div className="relative">
      {/* Alert Popup */}
      {alert && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] w-11/12 max-w-md bg-blue-600 text-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
          <Bell size={24} className="flex-shrink-0" />
          <p className="font-medium text-sm">{alert}</p>
        </div>
      )}

      <div className="h-[400px] w-full rounded-xl overflow-hidden border border-gray-200">
        <MapContainer
          center={[busLocation.lat, busLocation.lng]}
          zoom={14}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={[busLocation.lat, busLocation.lng]}>
            {/* 3. Updated Popup Text */}
            <Popup>Bus OD-02-AB-1234 is here!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
