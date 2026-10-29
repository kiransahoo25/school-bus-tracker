"use client";

import Link from "next/link";
import StudentStatusCard from "@/components/parent/StudentStatusCard";
import { Plus } from "lucide-react";

export default function ParentStudentsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Students</h1>
          <p className="text-gray-500 mt-1">
            Manage your children's bus routes and details.
          </p>
        </div>
        <Link
          href="/parent/students/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition"
        >
          <Plus size={18} /> Add Student
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Demo Data - We will connect this to the real DB next */}
        <StudentStatusCard
          studentName="Aarav Sharma"
          grade="5-A"
          routeName="Route 7 - Green Park"
          stopName="Green Park Main Gate"
          status="BOARDED"
          etaMinutes={12}
        />
        <StudentStatusCard
          studentName="Diya Sharma"
          grade="3-B"
          routeName="Route 7 - Green Park"
          stopName="Green Park Main Gate"
          status="PENDING"
        />
      </div>
    </div>
  );
}
