"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: fullName } } });
    if (error) { setError(error.message); setLoading(false); return; }
    router.push("/account");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-deep flex items-center justify-center px-6 py-20">
      <div className="fixed left-0 top-0 bottom-0 w-2 bg-coral" />

      <div className="w-full max-w-md">
        <Link href="/" className="block font-display text-4xl text-gold mb-12 text-center tracking-wider">
          GO BE LOVE
        </Link>

        <div className="border border-gold/20 p-10">
          <h1 className="font-display text-4xl text-cream mb-2 tracking-wider">CREATE ACCOUNT</h1>
          <p className="font-body text-sm text-cream/40 mb-8">Join the mission.</p>

          {error && (
            <div className="mb-6 p-3 bg-coral/20 border border-coral/40 text-coral font-body text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: "Full Name", type: "text", value: fullName, set: setFullName, placeholder: "Your name" },
              { label: "Email", type: "email", value: email, set: setEmail, placeholder: "you@example.com" },
              { label: "Password", type: "password", value: password, set: setPassword, placeholder: "8+ characters" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block font-body text-xs font-bold tracking-widest uppercase text-cream/40 mb-2">{f.label}</label>
                <input type={f.type} value={f.value} onChange={(e) => f.set(e.target.value)} required
                  minLength={f.type === "password" ? 8 : undefined}
                  className="w-full px-4 py-3 bg-transparent border border-cream/20 text-cream font-body text-sm outline-none focus:border-gold transition-colors"
                  placeholder={f.placeholder} />
              </div>
            ))}
            <button type="submit" disabled={loading}
              className="w-full py-4 bg-gold text-deep font-body font-bold text-sm tracking-widest uppercase hover:bg-coral hover:text-cream transition-colors disabled:opacity-60">
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-8 text-center font-body text-sm text-cream/40">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-bold text-gold hover:text-coral transition-colors">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
