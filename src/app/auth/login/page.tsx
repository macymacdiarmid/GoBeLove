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
    if (error) { setError(error.message); setLoading(false); return; }
    router.push("/account");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-deep flex items-center justify-center px-6 py-20">
      {/* Gold side bar */}
      <div className="fixed left-0 top-0 bottom-0 w-2 bg-gold" />

      <div className="w-full max-w-md">
        <Link href="/" className="block font-display text-4xl text-gold mb-12 text-center tracking-wider">
          GO BE LOVE
        </Link>

        <div className="border border-gold/20 p-10 bg-deep">
          <h1 className="font-display text-4xl text-cream mb-2 tracking-wider">SIGN IN</h1>
          <p className="font-body text-sm text-cream/40 mb-8">Welcome back.</p>

          {error && (
            <div className="mb-6 p-3 bg-coral/20 border border-coral/40 text-coral font-body text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-body text-xs font-bold tracking-widest uppercase text-cream/40 mb-2">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                className="w-full px-4 py-3 bg-transparent border border-cream/20 text-cream font-body text-sm outline-none focus:border-gold transition-colors"
                placeholder="you@example.com" />
            </div>
            <div>
              <label className="block font-body text-xs font-bold tracking-widest uppercase text-cream/40 mb-2">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                className="w-full px-4 py-3 bg-transparent border border-cream/20 text-cream font-body text-sm outline-none focus:border-gold transition-colors"
                placeholder="••••••••" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-4 bg-gold text-deep font-body font-bold text-sm tracking-widest uppercase hover:bg-coral hover:text-cream transition-colors disabled:opacity-60">
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-8 text-center font-body text-sm text-cream/40">
            No account?{" "}
            <Link href="/auth/signup" className="font-bold text-gold hover:text-coral transition-colors">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
