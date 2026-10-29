"use client";

import Link from "next/link";
import { Bus, LogOut, PhoneCall, AlertTriangle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function ConductorLayout({
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-green-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 text-white">
              <Bus size={24} />
              <span className="font-bold text-xl">Conductor Portal</span>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-green-100 hover:text-white flex items-center gap-2 text-sm font-medium">
                <PhoneCall size={18} /> Call Admin
              </button>
              <button className="text-green-100 hover:text-white flex items-center gap-2 text-sm font-medium">
                <AlertTriangle size={18} /> SOS
              </button>
              <button
                onClick={handleLogout}
                className="text-green-100 hover:text-white"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
