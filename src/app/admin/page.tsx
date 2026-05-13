import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [
    { count: productCount },
    { count: orderCount },
    { count: userCount },
  ] = await Promise.all([
    supabase.from("products").select("*", { count: "exact", head: true }),
    supabase.from("orders").select("*", { count: "exact", head: true }),
    supabase.from("profiles").select("*", { count: "exact", head: true }),
  ]);

  const stats = [
    { label: "Products", value: productCount ?? 0, href: "/admin/products", color: "#C4622D" },
    { label: "Orders", value: orderCount ?? 0, href: "/admin/orders", color: "#D4963A" },
    { label: "Users", value: userCount ?? 0, href: "/admin/users", color: "#2D5E3F" },
  ];

  return (
    <div>
      <div className="mb-10">
        <h1 className="font-serif font-black text-3xl mb-2" style={{ color: "#F5EDD8" }}>
          Dashboard
        </h1>
        <p className="text-sm" style={{ color: "rgba(245,237,216,0.4)" }}>
          Welcome back. Here&apos;s what&apos;s happening.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-10">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="block border p-6 transition-colors hover:border-opacity-60"
            style={{ borderColor: "rgba(245,237,216,0.1)", backgroundColor: "rgba(245,237,216,0.03)" }}
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: s.color }}>
              {s.label}
            </p>
            <p className="font-serif font-black text-5xl" style={{ color: "#F5EDD8" }}>
              {s.value}
            </p>
          </Link>
        ))}
      </div>

      <div className="border p-6" style={{ borderColor: "rgba(245,237,216,0.1)" }}>
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(245,237,216,0.4)" }}>
          Quick Actions
        </p>
        <div className="flex gap-4">
          <Link
            href="/admin/products"
            className="px-5 py-3 text-xs font-bold tracking-widest uppercase transition-all"
            style={{ backgroundColor: "#C4622D", color: "#F5EDD8" }}
          >
            + Add Product
          </Link>
          <Link
            href="/admin/orders"
            className="px-5 py-3 text-xs font-bold tracking-widest uppercase border transition-all"
            style={{ borderColor: "rgba(245,237,216,0.2)", color: "rgba(245,237,216,0.7)" }}
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
