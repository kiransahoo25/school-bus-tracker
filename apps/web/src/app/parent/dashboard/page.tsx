"use client";

import { useEffect, useState } from "react";
import StudentStatusCard from "@/components/parent/StudentStatusCard";
import LiveBusMap from "@/components/maps/LiveBusMap";

interface Student {
  id: string;
  name: string;
  grade: string;
  section: string;
  route_name: string;
  stop_name: string;
}

export default function ParentDashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  // State to track boarding status: { "student_id": "BOARDED" | "PENDING" }
  const [statuses, setStatuses] = useState<Record<string, string>>({});

  // 1. Fetch real students from backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(
          "https://school-bus-api-c3x7.onrender.com/api/v1/parents/my-students",
        );
        const data = await res.json();
        if (data.success) {
          setStudents(data.data);

          // Set default status for all students
          const initialStatus: Record<string, string> = {};
          data.data.forEach((s: Student) => {
            initialStatus[s.id] = "PENDING";
          });
          setStatuses(initialStatus);
        }
      } catch (error) {
        console.error("Failed to fetch students", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  // 2. Listen for WebSocket updates (When Conductor marks a student)
  useEffect(() => {
    // In a real app, this would be a dedicated channel for boarding events
    // For now, we will poll the boarding_events table or listen to a generic socket
    const ws = new WebSocket("wss://school-bus-api-c3x7.onrender.com/ws");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // If the backend sends a BOARDING_EVENT, update the specific student's status
      if (data.type === "BOARDING_EVENT") {
        setStatuses((prev) => ({
          ...prev,
          [data.studentId]: data.eventType,
        }));
      }
    };

    return () => ws.close();
  }, []);

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500">
        Loading dashboard...
      </div>
    );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Good Morning!</h1>
        <p className="text-gray-500 mt-1">
          Here is the live status of your children.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Map */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Live Bus Map</h2>
          <LiveBusMap />
        </div>

        {/* Right Column: Real Student Cards */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Student Status
          </h2>
          <div className="space-y-4">
            {students.map((student) => (
              <StudentStatusCard
                key={student.id}
                studentName={student.name}
                grade={student.grade}
                section={student.section}
                routeName={student.route_name}
                stopName={student.stop_name}
                status={(statuses[student.id] as any) || "PENDING"}
                etaMinutes={12}
              />
            ))}
            {students.length === 0 && (
              <p className="text-gray-500 text-sm">
                No students found linked to this account.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
