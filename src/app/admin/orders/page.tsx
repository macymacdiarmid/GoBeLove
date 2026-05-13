import { createClient } from "@/lib/supabase/server";
import { formatPrice } from "@/lib/utils";
import type { Database } from "@/types/database";

type Order = Database["public"]["Tables"]["orders"]["Row"];
type OrderWithProfile = Order & { profiles: { full_name: string | null; email: string } | null };

export const metadata = { title: "Admin — Orders" };

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  pending: { bg: "rgba(212,150,58,0.2)", text: "#D4963A" },
  confirmed: { bg: "rgba(45,94,63,0.2)", text: "#2D5E3F" },
  shipped: { bg: "rgba(45,94,63,0.3)", text: "#2D5E3F" },
  delivered: { bg: "rgba(45,94,63,0.4)", text: "#2D5E3F" },
  cancelled: { bg: "rgba(196,98,45,0.2)", text: "#C4622D" },
};

export default async function AdminOrdersPage() {
  const supabase = await createClient();
  const { data: orders } = await supabase
    .from("orders")
    .select("*, profiles(email, full_name)")
    .order("created_at", { ascending: false }) as { data: OrderWithProfile[] | null };

  return (
    <div>
      <h1 className="font-serif font-black text-3xl mb-10" style={{ color: "#F5EDD8" }}>
        Orders
      </h1>

      {orders && orders.length > 0 ? (
        <div className="border" style={{ borderColor: "rgba(245,237,216,0.1)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(245,237,216,0.1)" }}>
                {["Order ID", "Customer", "Total", "Status", "Date"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(245,237,216,0.4)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const colors = STATUS_COLORS[order.status] ?? { bg: "rgba(245,237,216,0.1)", text: "#F5EDD8" };
                return (
                  <tr key={order.id} style={{ borderBottom: "1px solid rgba(245,237,216,0.06)" }}>
                    <td className="px-4 py-3 font-mono text-xs" style={{ color: "#F5EDD8" }}>
                      #{order.id.slice(0, 8).toUpperCase()}
                    </td>
                    <td className="px-4 py-3" style={{ color: "rgba(245,237,216,0.7)" }}>
                      {order.profiles?.full_name ?? order.profiles?.email ?? "—"}
                    </td>
                    <td className="px-4 py-3" style={{ color: "#F5EDD8" }}>
                      {formatPrice(order.total_amount)}
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs font-bold capitalize" style={{ backgroundColor: colors.bg, color: colors.text }}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "rgba(245,237,216,0.4)" }}>
                      {new Date(order.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="border p-16 text-center" style={{ borderColor: "rgba(245,237,216,0.1)" }}>
          <p className="text-sm" style={{ color: "rgba(245,237,216,0.4)" }}>No orders yet.</p>
        </div>
      )}
    </div>
  );
}
