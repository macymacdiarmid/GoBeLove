"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => {
      listener.subscription.unsubscribe();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "Our Story" },
    { href: "/impact", label: "Impact" },
  ];

  return (
    <header
      style={{
        backgroundColor: scrolled ? "rgba(35,34,32,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl font-black tracking-tight text-cream"
        >
          Go Be Love.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-widest uppercase text-cream/70 hover:text-cream transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/shop" aria-label="Cart" className="text-cream/70 hover:text-cream transition-colors">
            <ShoppingBag size={20} />
          </Link>
          {user ? (
            <Link href="/account" aria-label="Account" className="text-cream/70 hover:text-cream transition-colors">
              <User size={20} />
            </Link>
          ) : (
            <Link
              href="/auth/login"
              className="hidden md:inline-flex text-xs font-semibold tracking-widest uppercase border border-cream/30 text-cream/70 hover:border-cream hover:text-cream px-4 py-2 transition-all"
            >
              Sign In
            </Link>
          )}

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-cream/70 hover:text-cream transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-ink border-t border-cream/10 px-6 pb-8 pt-4 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-2xl font-bold text-cream"
            >
              {l.label}
            </Link>
          ))}
          {user ? (
            <Link href="/account" onClick={() => setOpen(false)} className="font-serif text-2xl font-bold text-clay">
              Account
            </Link>
          ) : (
            <Link href="/auth/login" onClick={() => setOpen(false)} className="font-serif text-2xl font-bold text-clay">
              Sign In
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
