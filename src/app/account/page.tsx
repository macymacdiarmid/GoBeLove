import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Database } from "@/types/database";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];
type Order   = Database["public"]["Tables"]["orders"]["Row"];

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single() as { data: Profile | null };
  const { data: orders }  = await supabase.from("orders").select("*").eq("user_id", user.id).order("created_at", { ascending: false }).limit(5) as { data: Order[] | null };

  const isAdmin = profile?.role === "admin";

  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen pt-20">
        {/* Header */}
        <div className="bg-gold py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-body text-xs font-bold tracking-widest uppercase text-deep/50 mb-3">Account</p>
            <h1 className="font-display leading-none text-deep" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>
              {profile?.full_name?.toUpperCase() ?? user.email?.toUpperCase()}
            </h1>
            {isAdmin && (
              <span className="inline-block mt-3 px-3 py-1 bg-coral text-cream font-body text-xs font-bold tracking-widest uppercase">
                Admin
              </span>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="space-y-2">
              <Link href="/account" className="block w-full px-4 py-3 bg-deep text-gold font-body text-sm font-bold tracking-widest uppercase">
                Overview
              </Link>
              <Link href="/account/orders" className="block w-full px-4 py-3 border-2 border-deep/20 text-deep font-body text-sm font-semibold hover:border-coral hover:text-coral transition-colors">
                Order History
              </Link>
              {isAdmin && (
                <Link href="/admin" className="block w-full px-4 py-3 border-2 border-gold text-deep font-body text-sm font-bold hover:bg-gold transition-colors">
                  Admin Panel →
                </Link>
              )}
            </div>

            {/* Main */}
            <div className="md:col-span-2 space-y-6">
              <div className="border-2 border-deep/10 p-6">
                <p className="font-body text-xs font-bold tracking-widest uppercase text-deep/40 mb-4">Profile</p>
                <p className="font-body text-sm text-deep mb-1"><strong>Email:</strong> {user.email}</p>
                <p className="font-body text-sm text-deep"><strong>Name:</strong> {profile?.full_name ?? "—"}</p>
              </div>

              <div className="border-2 border-deep/10 p-6">
                <p className="font-body text-xs font-bold tracking-widest uppercase text-deep/40 mb-4">Recent Orders</p>
                {orders && orders.length > 0 ? (
                  <ul className="space-y-3">
                    {orders.map((order) => (
                      <li key={order.id} className="flex justify-between items-center py-3 border-b border-deep/10">
                        <span className="font-body text-sm text-deep font-mono">#{order.id.slice(0, 8).toUpperCase()}</span>
                        <span className="px-2 py-1 bg-teal text-cream font-body text-xs font-bold uppercase capitalize">
                          {order.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-body text-sm text-deep/50">
                    No orders yet.{" "}
                    <Link href="/shop" className="text-coral font-bold underline">Shop now</Link>
                  </p>
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
