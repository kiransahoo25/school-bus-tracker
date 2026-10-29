"use client";

import { MapPin, Navigation, AlertCircle, CheckCircle2 } from "lucide-react";
import LiveBusMap from "@/components/maps/LiveBusMap";

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Fleet Overview</h1>
        <p className="text-gray-400 mt-1">
          Live monitoring of all school buses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Column */}
        <div className="lg:col-span-2 bg-gray-800 rounded-xl border border-gray-700 overflow-hidden relative min-h-[400px]">
          {/* We reuse our Live Map component here! */}
          <LiveBusMap />
        </div>

        {/* Sidebar: Active Buses List */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-5">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Navigation size={18} className="text-blue-500" /> Active Buses
          </h2>

          <div className="space-y-4">
            {/* Bus 1 */}
            <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-white">Bus KA-01-AB-1234</h3>
                  <p className="text-xs text-gray-400">Route 7 - Green Park</p>
                </div>
                <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded flex items-center gap-1">
                  <CheckCircle2 size={12} /> Moving
                </span>
              </div>
              <div className="text-sm text-gray-300">
                <p>
                  Status:{" "}
                  <span className="font-semibold text-white">On Route</span>
                </p>
                <p>
                  Last ping:{" "}
                  <span className="font-semibold text-white">Just now</span>
                </p>
              </div>
            </div>

            {/* Bus 2 */}
            <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-white">Bus KA-01-XY-9876</h3>
                  <p className="text-xs text-gray-400">Route 3 - North City</p>
                </div>
                <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded flex items-center gap-1">
                  <AlertCircle size={12} /> Delayed
                </span>
              </div>
              <div className="text-sm text-gray-300">
                <p>
                  Status: <span className="font-semibold text-white">Idle</span>
                </p>
                <p>
                  Last ping:{" "}
                  <span className="font-semibold text-white">5 min ago</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
