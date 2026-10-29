"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { User, Bus, Shield } from "lucide-react";

// ⚠️ PUT YOUR REAL TEST CREDENTIALS HERE
const DEMO_USERS = {
  parent: { email: "test@parent.com", password: "password123" },
  conductor: { email: "conductor@test.com", password: "password123" },
  admin: { email: "admin@test.com", password: "password123" },
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await performLogin(email, password);
  };

  const performLogin = async (loginEmail: string, loginPassword: string) => {
    setIsLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
    } else {
      const role = data.user?.user_metadata?.role;

      if (role === "admin") {
        router.push("/admin/dashboard");
      } else if (role === "conductor") {
        router.push("/conductor/dashboard");
      } else {
        router.push("/parent/dashboard");
      }
    }
  };

  // Quick login function for demo buttons
  const handleDemoLogin = (role: "parent" | "conductor" | "admin") => {
    const user = DEMO_USERS[role];
    setEmail(user.email);
    setPassword(user.password);
    performLogin(user.email, user.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500">Log in to access your portal.</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="parent@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* DEMO BUTTONS */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-center text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">
            Quick Demo Login
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleDemoLogin("parent")}
              disabled={isLoading}
              className="flex flex-col items-center justify-center p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition"
            >
              <User size={20} className="mb-1" />
              <span className="text-xs font-bold">Parent</span>
            </button>
            <button
              onClick={() => handleDemoLogin("conductor")}
              disabled={isLoading}
              className="flex flex-col items-center justify-center p-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition"
            >
              <Bus size={20} className="mb-1" />
              <span className="text-xs font-bold">Conductor</span>
            </button>
            <button
              onClick={() => handleDemoLogin("admin")}
              disabled={isLoading}
              className="flex flex-col items-center justify-center p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition"
            >
              <Shield size={20} className="mb-1" />
              <span className="text-xs font-bold">Admin</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
