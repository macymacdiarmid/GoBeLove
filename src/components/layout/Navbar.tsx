"use client";

import Link from "next/link";
import Image from "next/image";
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
    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) => setUser(session?.user ?? null));
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => { listener.subscription.unsubscribe(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const links = [
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "Our Story" },
    { href: "/impact", label: "Impact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ backgroundColor: scrolled ? "#0A1A2E" : "transparent" }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center" style={{ gap: "1em" }} aria-label="Go Be Love">
          <Image
            src="/gbl-logo.png"
            alt="Go Be Love"
            width={34}
            height={38}
            className="transition-all duration-300"
            style={{ filter: scrolled ? "brightness(0) invert(1)" : "brightness(0)" }}
          />
          <span
            className="font-display text-2xl tracking-wider transition-colors duration-300"
            style={{ color: scrolled ? "#FFF5EC" : "#0A1A2E" }}>
            GO BE LOVE
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="font-body text-sm font-semibold tracking-widest uppercase transition-colors duration-300 hover:text-teal"
              style={{ color: scrolled ? "rgba(255,245,236,0.7)" : "#0A1A2E" }}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/shop" aria-label="Cart" className="transition-colors duration-300 hover:text-teal"
            style={{ color: scrolled ? "rgba(255,245,236,0.7)" : "#0A1A2E" }}>
            <ShoppingBag size={20} />
          </Link>
          {user ? (
            <Link href="/account" aria-label="Account" className="transition-colors duration-300 hover:text-teal"
              style={{ color: scrolled ? "rgba(255,245,236,0.7)" : "#0A1A2E" }}>
              <User size={20} />
            </Link>
          ) : (
            <Link href="/auth/login"
              className="hidden md:inline-flex text-xs font-semibold tracking-widest uppercase px-4 py-2 transition-all duration-300"
              style={scrolled
                ? { border: "1px solid rgba(240,120,32,0.6)", color: "#F07820" }
                : { border: "1px solid rgba(10,26,46,0.4)",   color: "#0A1A2E" }}>
              Sign In
            </Link>
          )}
          <button onClick={() => setOpen(!open)} className="md:hidden transition-colors duration-300 hover:text-teal"
            style={{ color: scrolled ? "rgba(255,245,236,0.7)" : "#0A1A2E" }}
            aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-deep border-t border-gold/20 px-6 pb-10 pt-6 flex flex-col gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-display text-4xl tracking-wider text-cream hover:text-gold transition-colors">
              {l.label.toUpperCase()}
            </Link>
          ))}
          {user
            ? <Link href="/account" onClick={() => setOpen(false)} className="font-display text-4xl text-gold">ACCOUNT</Link>
            : <Link href="/auth/login" onClick={() => setOpen(false)} className="font-display text-4xl text-gold">SIGN IN</Link>
          }
        </div>
      )}
    </header>
  );
}
