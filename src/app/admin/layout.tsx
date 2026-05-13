import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Database } from "@/types/database";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single() as { data: Pick<Profile, "role"> | null };
  if (profile?.role !== "admin") redirect("/account");

  const navItems = [
    { href: "/admin",          label: "DASHBOARD" },
    { href: "/admin/products", label: "PRODUCTS"  },
    { href: "/admin/orders",   label: "ORDERS"    },
    { href: "/admin/users",    label: "USERS"     },
  ];

  return (
    <div className="flex min-h-screen bg-deep">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 flex flex-col border-r border-gold/10">
        <div className="p-6 border-b border-gold/10">
          <Link href="/" className="font-display text-xl text-gold tracking-wider">GO BE LOVE</Link>
          <p className="font-body text-xs text-coral font-bold tracking-widest uppercase mt-1">Admin</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}
              className="flex items-center px-3 py-3 font-display text-lg text-cream/50 hover:text-gold transition-colors tracking-wider">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gold/10">
          <Link href="/account" className="font-body text-xs text-cream/30 hover:text-cream transition-colors">
            ← Back to Account
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
