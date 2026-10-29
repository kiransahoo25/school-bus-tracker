"use client";

import Link from "next/link";
import { Home, Users, Bell, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth(true);
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚌</span>
              <span className="font-bold text-xl text-blue-600">
                BusTracker
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link
                href="/parent/dashboard"
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <Home size={18} /> Dashboard
              </Link>
              <Link
                href="/parent/students"
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <Users size={18} /> My Students
              </Link>
              <Link
                href="/parent/alerts"
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <Bell size={18} /> Alerts
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Settings size={20} />
              </button>
              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-red-600"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
