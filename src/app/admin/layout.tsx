import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Database } from "@/types/database";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single() as { data: Pick<Profile, "role"> | null };

  if (profile?.role !== "admin") redirect("/account");

  const navItems = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/products", label: "Products" },
    { href: "/admin/orders", label: "Orders" },
    { href: "/admin/users", label: "Users" },
  ];

  return (
    <div style={{ backgroundColor: "#232220", minHeight: "100svh" }} className="flex">
      {/* Sidebar */}
      <aside style={{ backgroundColor: "#1a1917", borderRight: "1px solid rgba(245,237,216,0.08)" }} className="w-64 flex-shrink-0 flex flex-col min-h-screen">
        <div className="p-6 border-b" style={{ borderColor: "rgba(245,237,216,0.08)" }}>
          <Link href="/" className="font-serif font-black text-lg" style={{ color: "#F5EDD8" }}>
            Go Be Love.
          </Link>
          <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "#C4622D" }}>Admin</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-3 py-2.5 text-sm font-medium rounded transition-colors"
              style={{ color: "rgba(245,237,216,0.6)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t" style={{ borderColor: "rgba(245,237,216,0.08)" }}>
          <Link href="/account" className="text-xs" style={{ color: "rgba(245,237,216,0.3)" }}>
            &larr; Back to Account
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
