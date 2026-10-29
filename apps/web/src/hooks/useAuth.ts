"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";

export function useAuth(requireAuth = true) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 1. Check current session
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session && requireAuth) {
        router.push("/login");
      } else if (session && !requireAuth) {
        // If logged in, don't show login page, go to dashboard
        router.push("/parent/dashboard");
      } else {
        setUser(session?.user || null);
        setLoading(false);
      }
    };

    checkUser();

    // 2. Listen for login/logout changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(session.user);
          if (!requireAuth) router.push("/parent/dashboard");
        } else {
          setUser(null);
          if (requireAuth) router.push("/login");
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router, requireAuth]);

  return { user, loading };
}
