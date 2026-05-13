import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminDashboard() {
  const supabase = await createClient();
  const [{ count: productCount }, { count: orderCount }, { count: userCount }] = await Promise.all([
    supabase.from("products").select("*", { count: "exact", head: true }),
    supabase.from("orders").select("*", { count: "exact", head: true }),
    supabase.from("profiles").select("*", { count: "exact", head: true }),
  ]);

  const stats = [
    { label: "Products", value: productCount ?? 0, href: "/admin/products", bg: "#F07820", color: "#0A1A2E" },
    { label: "Orders",   value: orderCount   ?? 0, href: "/admin/orders",   bg: "#E83568", color: "#fff"    },
    { label: "Users",    value: userCount    ?? 0, href: "/admin/users",    bg: "#1ABFCC", color: "#0A1A2E" },
  ];

  return (
    <div>
      <div className="mb-10">
        <h1 className="font-display text-4xl text-gold tracking-wider mb-1">DASHBOARD</h1>
        <p className="font-body text-sm text-cream/40">Welcome back. Here&apos;s what&apos;s happening.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-10">
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className="block p-8 transition-opacity hover:opacity-90" style={{ backgroundColor: s.bg }}>
            <p className="font-body text-xs font-bold tracking-widest uppercase mb-3" style={{ color: s.color, opacity: 0.6 }}>{s.label}</p>
            <p className="font-display text-6xl" style={{ color: s.color }}>{s.value}</p>
          </Link>
        ))}
      </div>

      <div className="border border-gold/20 p-6">
        <p className="font-body text-xs font-bold tracking-widest uppercase text-cream/40 mb-4">Quick Actions</p>
        <div className="flex gap-4">
          <Link href="/admin/products" className="px-5 py-3 bg-gold text-deep font-body font-bold text-xs tracking-widest uppercase hover:bg-coral hover:text-cream transition-colors">
            + Add Product
          </Link>
          <Link href="/admin/orders" className="px-5 py-3 border border-cream/20 text-cream/60 font-body font-bold text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-colors">
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
