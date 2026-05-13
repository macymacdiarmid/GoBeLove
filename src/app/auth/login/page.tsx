"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/account");
    router.refresh();
  }

  return (
    <div style={{ backgroundColor: "#232220", minHeight: "100svh" }} className="flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="block font-serif text-3xl font-black text-cream mb-12 text-center" style={{ color: "#F5EDD8" }}>
          Go Be Love.
        </Link>

        <div className="border p-10" style={{ borderColor: "rgba(245,237,216,0.1)", backgroundColor: "rgba(245,237,216,0.03)" }}>
          <h1 className="font-serif font-black text-2xl mb-8" style={{ color: "#F5EDD8" }}>
            Sign In
          </h1>

          {error && (
            <div className="mb-6 p-3 text-sm" style={{ backgroundColor: "rgba(196,98,45,0.15)", color: "#E8836A", border: "1px solid rgba(196,98,45,0.3)" }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(245,237,216,0.5)" }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-transparent border text-sm outline-none focus:border-clay transition-colors"
                style={{ borderColor: "rgba(245,237,216,0.2)", color: "#F5EDD8" }}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(245,237,216,0.5)" }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-transparent border text-sm outline-none transition-colors"
                style={{ borderColor: "rgba(245,237,216,0.2)", color: "#F5EDD8" }}
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 font-semibold text-sm tracking-widest uppercase transition-all disabled:opacity-60"
              style={{ backgroundColor: "#C4622D", color: "#F5EDD8" }}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm" style={{ color: "rgba(245,237,216,0.4)" }}>
            No account?{" "}
            <Link href="/auth/signup" className="font-semibold" style={{ color: "#D4963A" }}>
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
