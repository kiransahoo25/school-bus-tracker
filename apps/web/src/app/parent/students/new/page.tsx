"use client";

import { useState } from "react";
import { MapPin, Navigation, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function DetectRoutePage() {
  const [isDetecting, setIsDetecting] = useState(false);
  const [matches, setMatches] = useState<any[]>([]);
  const [error, setError] = useState("");

  const handleDetect = async () => {
    setIsDetecting(true);
    setError("");

    // 1. Simulating a parent's home address near Master Canteen, Bhubaneswar
    const homeLat = 20.29;
    const homeLng = 85.82;

    try {
      // 2. Connecting to the LIVE backend
      const response = await fetch(
        "https://school-bus-api-c3x7.onrender.com/api/v1/parents/detect-route",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lat: homeLat, lng: homeLng }),
        },
      );

      const data = await response.json();

      if (data.success) {
        setMatches(data.matches);
      } else {
        setError("Could not find a route for this address.");
      }
    } catch (err) {
      setError("Failed to connect to server.");
    } finally {
      setIsDetecting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link
          href="/parent/dashboard"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          ← Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Student</h1>
        <p className="text-gray-500">
          Find the bus route for your home address.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Home Address
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value="Master Canteen, Bhubaneswar (Demo)"
              disabled
              className="flex-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
            />
            <button
              onClick={handleDetect}
              disabled={isDetecting}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center gap-2"
            >
              {isDetecting ? "Searching..." : "Detect Route"}
            </button>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {matches.length > 0 && (
          <div className="mt-8 border-t pt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Suggested Routes
            </h2>
            <div className="space-y-4">
              {matches.map((match, index) => (
                <div
                  key={match.stop_id}
                  className={`p-4 rounded-xl border-2 transition ${index === 0 ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-gray-300"}`}
                >
                  {index === 0 && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-green-700 bg-green-200 px-2 py-1 rounded-full mb-2">
                      <CheckCircle2 size={12} /> Best Match
                    </span>
                  )}
                  <h3 className="font-bold text-gray-900">
                    {match.route_name}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    <MapPin size={14} /> Pickup Stop:{" "}
                    <span className="font-medium text-gray-900">
                      {match.stop_name}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <Navigation size={14} /> Distance: {match.distance_meters}{" "}
                    meters from your home
                  </p>
                  <button className="mt-4 w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg text-sm font-medium">
                    Select this Route
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
