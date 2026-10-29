"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Bus,
  Map,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function AdminLayout({
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
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col text-gray-100">
      <header className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏫</span>
              <span className="font-bold text-xl text-white">School Admin</span>
            </div>

            <nav className="hidden md:flex space-x-6">
              <Link
                href="/admin/dashboard"
                className="text-gray-300 hover:text-white flex items-center gap-2 text-sm font-medium"
              >
                <LayoutDashboard size={18} /> Dashboard
              </Link>
              <Link
                href="/admin/routes"
                className="text-gray-300 hover:text-white flex items-center gap-2 text-sm font-medium"
              >
                <Map size={18} /> Routes
              </Link>
              <Link
                href="/admin/buses"
                className="text-gray-300 hover:text-white flex items-center gap-2 text-sm font-medium"
              >
                <Bus size={18} /> Buses
              </Link>
              <Link
                href="/admin/students"
                className="text-gray-300 hover:text-white flex items-center gap-2 text-sm font-medium"
              >
                <Users size={18} /> Students
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white">
                <Settings size={20} />
              </button>
              <button
                onClick={handleLogout}
                className="text-gray-400 hover:text-red-400"
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
