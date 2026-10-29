"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Circle, MapPin, Navigation } from "lucide-react";

const DEMO_TRIP_ID = "00000000-0000-0000-0000-000000000000";

interface Student {
  id: string;
  name: string;
  grade: string;
  section: string;
}

export default function ConductorDashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [boardedStudents, setBoardedStudents] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [fetching, setFetching] = useState(true);
  const [gpsStatus, setGpsStatus] = useState("Locating...");

  // Fetch students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(
          `https://school-bus-api-c3x7.onrender.com/api/v1/trips/${DEMO_TRIP_ID}/students`,
        );
        const data = await response.json();
        if (data.success) {
          setStudents(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch students", error);
      } finally {
        setFetching(false);
      }
    };
    fetchStudents();
  }, []);

  // REAL GPS TRACKING EFFECT
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const startTracking = () => {
      if (!navigator.geolocation) {
        setGpsStatus("GPS not supported");
        return;
      }

      intervalId = setInterval(() => {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setGpsStatus("Live (Sending)");

            try {
              await fetch(
                "https://school-bus-api-c3x7.onrender.com/api/v1/telemetry/update",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    busId: "KA-01-AB-1234",
                    lat: latitude,
                    lng: longitude,
                  }),
                },
              );
            } catch (err) {
              console.error("Failed to send GPS", err);
            }
          },
          (error) => {
            setGpsStatus("GPS Blocked - Allow Location");
            console.error("Error getting location:", error.message);
          },
          { enableHighAccuracy: true },
        );
      }, 5000); // Send every 5 seconds
    };

    startTracking();
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const toggleBoarding = async (studentId: string) => {
    const isCurrentlyBoarded = boardedStudents.includes(studentId);

    if (isCurrentlyBoarded) {
      setBoardedStudents(boardedStudents.filter((id) => id !== studentId));
    } else {
      setBoardedStudents([...boardedStudents, studentId]);
    }

    setIsLoading(studentId);

    try {
      await fetch(
        "https://school-bus-api-c3x7.onrender.com/api/v1/boarding/verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            studentId: studentId,
            tripId: DEMO_TRIP_ID,
            eventType: isCurrentlyBoarded ? "UNVERIFIED" : "BOARDED",
          }),
        },
      );
    } catch (error) {
      console.error("Failed to save to database", error);
    } finally {
      setIsLoading(null);
    }
  };

  if (fetching)
    return (
      <div className="text-center py-20 text-gray-500">Loading roster...</div>
    );

  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Route 7 - Green Park
            </h1>
            <p className="text-gray-500 flex items-center gap-2 mt-1">
              <MapPin size={16} /> Bus KA-01-AB-1234 • Morning Trip
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
              <Navigation size={16} /> On Route
            </div>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
              📡 {gpsStatus}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
          <h2 className="font-bold text-gray-800">Boarding Checklist</h2>
          <span className="text-sm font-medium text-gray-500">
            {boardedStudents.length} / {students.length} Boarded
          </span>
        </div>

        <ul className="divide-y divide-gray-100">
          {students.map((student) => {
            const isBoarded = boardedStudents.includes(student.id);
            return (
              <li
                key={student.id}
                onClick={() => toggleBoarding(student.id)}
                className={`p-4 flex items-center gap-4 cursor-pointer transition-colors ${
                  isBoarded ? "bg-green-50" : "hover:bg-gray-50"
                } ${isLoading === student.id ? "opacity-50 pointer-events-none" : ""}`}
              >
                {isBoarded ? (
                  <CheckCircle2 className="text-green-600" size={28} />
                ) : (
                  <Circle className="text-gray-300" size={28} />
                )}

                <div className="flex-1">
                  <p
                    className={`font-semibold ${isBoarded ? "text-green-900" : "text-gray-900"}`}
                  >
                    {student.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Grade {student.grade}-{student.section}
                  </p>
                </div>

                <button
                  className={`px-4 py-2 rounded-lg text-sm font-bold ${isBoarded ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600"}`}
                >
                  {isBoarded ? "Boarded" : "Mark Boarded"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
