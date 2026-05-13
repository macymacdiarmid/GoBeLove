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
        <Link href="/" className="font-display text-2xl tracking-wider text-cream">
          GO BE LOVE
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="font-body text-sm font-semibold tracking-widest uppercase text-cream/70 hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/shop" aria-label="Cart" className="text-cream/70 hover:text-gold transition-colors">
            <ShoppingBag size={20} />
          </Link>
          {user ? (
            <Link href="/account" aria-label="Account" className="text-cream/70 hover:text-gold transition-colors">
              <User size={20} />
            </Link>
          ) : (
            <Link href="/auth/login"
              className="hidden md:inline-flex text-xs font-semibold tracking-widest uppercase border border-gold/60 text-gold hover:bg-gold hover:text-deep px-4 py-2 transition-all">
              Sign In
            </Link>
          )}
          <button onClick={() => setOpen(!open)} className="md:hidden text-cream/70 hover:text-gold" aria-label="Toggle menu">
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
