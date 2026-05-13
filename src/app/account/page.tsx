import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Database } from "@/types/database";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];
type Order = Database["public"]["Tables"]["orders"]["Row"];

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single() as { data: Profile | null };

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(5) as { data: Order[] | null };

  const isAdmin = profile?.role === "admin";

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5EDD8", minHeight: "100svh", paddingTop: "5rem" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#C4622D" }}>
              Account
            </p>
            <h1 className="font-serif font-black" style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#232220" }}>
              {profile?.full_name ?? user.email}
            </h1>
            {isAdmin && (
              <span className="inline-block mt-3 px-3 py-1 text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#D4963A", color: "#232220" }}>
                Admin
              </span>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="space-y-2">
              <Link href="/account" className="block w-full text-left px-4 py-3 text-sm font-semibold" style={{ backgroundColor: "#232220", color: "#F5EDD8" }}>
                Overview
              </Link>
              <Link href="/account/orders" className="block w-full text-left px-4 py-3 text-sm font-medium border" style={{ borderColor: "#D9CEB5", color: "#232220" }}>
                Order History
              </Link>
              {isAdmin && (
                <Link href="/admin" className="block w-full text-left px-4 py-3 text-sm font-medium border" style={{ borderColor: "#D4963A", color: "#D4963A" }}>
                  Admin Panel &rarr;
                </Link>
              )}
            </div>

            {/* Main */}
            <div className="md:col-span-2 space-y-6">
              {/* Profile card */}
              <div className="border p-6" style={{ borderColor: "#D9CEB5" }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#7a7060" }}>
                  Profile
                </p>
                <p className="text-sm mb-1" style={{ color: "#232220" }}><strong>Email:</strong> {user.email}</p>
                <p className="text-sm" style={{ color: "#232220" }}><strong>Name:</strong> {profile?.full_name ?? "—"}</p>
              </div>

              {/* Recent orders */}
              <div className="border p-6" style={{ borderColor: "#D9CEB5" }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#7a7060" }}>
                  Recent Orders
                </p>
                {orders && orders.length > 0 ? (
                  <ul className="space-y-3">
                    {orders.map((order) => (
                      <li key={order.id} className="flex justify-between items-center text-sm py-3 border-b" style={{ borderColor: "#D9CEB5" }}>
                        <span style={{ color: "#232220" }}>Order #{order.id.slice(0, 8).toUpperCase()}</span>
                        <span className="capitalize px-2 py-1 text-xs font-bold" style={{ backgroundColor: "#2D5E3F", color: "#F5EDD8" }}>
                          {order.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm" style={{ color: "#7a7060" }}>No orders yet. <Link href="/shop" className="underline">Shop now</Link></p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
