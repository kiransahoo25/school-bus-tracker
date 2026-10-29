"use client";

import StudentStatusCard from "@/components/parent/StudentStatusCard";
import LiveBusMap from "@/components/maps/LiveBusMap";

export default function ParentDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Good Morning!</h1>
        <p className="text-gray-500 mt-1">
          Here is the status of your children's transport today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Map */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Live Bus Map</h2>
          <LiveBusMap />
        </div>

        {/* Right Column: Student Cards */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Student Status
          </h2>
          <div className="space-y-4">
            <StudentStatusCard
              studentName="Aarav Sharma"
              grade="5-A"
              routeName="Route 7 - Bhubaneswar"
              stopName="Master Canteen"
              status="BOARDED"
              etaMinutes={12}
            />
            <StudentStatusCard
              studentName="Diya Sharma"
              grade="3-B"
              routeName="Route 7 - Bhubaneswar"
              stopName="Master Canteen"
              status="PENDING"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
