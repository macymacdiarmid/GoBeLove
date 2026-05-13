import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Metadata } from "next";
import type { Database } from "@/types/database";

type Order = Database["public"]["Tables"]["orders"]["Row"];

export const metadata: Metadata = { title: "Order History" };

export default async function OrdersPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false }) as { data: Order[] | null };

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5EDD8", minHeight: "100svh", paddingTop: "5rem" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-12">
            <Link href="/account" className="text-xs tracking-widest uppercase" style={{ color: "#7a7060" }}>
              &larr; Account
            </Link>
          </div>
          <h1 className="font-serif font-black text-4xl mb-10" style={{ color: "#232220" }}>
            Order History
          </h1>

          {orders && orders.length > 0 ? (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="border p-6 flex justify-between items-center" style={{ borderColor: "#D9CEB5" }}>
                  <div>
                    <p className="font-mono text-sm font-bold mb-1" style={{ color: "#232220" }}>
                      #{order.id.slice(0, 8).toUpperCase()}
                    </p>
                    <p className="text-xs" style={{ color: "#7a7060" }}>
                      {new Date(order.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold mb-1" style={{ color: "#232220" }}>{formatPrice(order.total_amount)}</p>
                    <span className="px-2 py-1 text-xs font-bold capitalize" style={{ backgroundColor: "#2D5E3F", color: "#F5EDD8" }}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="border p-16 text-center" style={{ borderColor: "#D9CEB5" }}>
              <p className="font-serif text-xl mb-4" style={{ color: "#232220" }}>No orders yet</p>
              <p className="text-sm mb-8" style={{ color: "#7a7060" }}>Your order history will appear here.</p>
              <Link href="/shop" className="inline-flex px-8 py-4 text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#C4622D", color: "#F5EDD8" }}>
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
