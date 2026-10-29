"use client";

import { useEffect, useState } from "react";
import { Plus, Search } from "lucide-react";

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(
          "https://school-bus-api-c3x7.onrender.com/api/v1/students",
        );
        const data = await res.json();
        if (data.success) {
          setStudents(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch students", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Student Directory</h1>
          <p className="text-gray-400 mt-1">
            Manage all students enrolled in bus transport.
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
          <Plus size={18} /> Add Student
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-800/50">
          <div className="relative w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full bg-gray-900 border border-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {loading ? (
          <div className="p-8 text-center text-gray-400">
            Loading students...
          </div>
        ) : (
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-gray-900/50 text-xs uppercase text-gray-400">
              <tr>
                <th className="px-6 py-4">Student Name</th>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Grade</th>
                <th className="px-6 py-4">Assigned Route</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-white">
                    {student.name}
                  </td>
                  <td className="px-6 py-4">{student.student_code || "N/A"}</td>
                  <td className="px-6 py-4">
                    {student.grade} - {student.section}
                  </td>
                  {/* The database will now return "Route 7 - Bhubaneswar" based on the SQL we ran */}
                  <td className="px-6 py-4">
                    {student.route_name || "No Route"}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
