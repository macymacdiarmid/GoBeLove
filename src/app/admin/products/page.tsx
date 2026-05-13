import { createClient } from "@/lib/supabase/server";
import { formatPrice } from "@/lib/utils";
import type { Database } from "@/types/database";

type Product = Database["public"]["Tables"]["products"]["Row"];

export const metadata = { title: "Admin — Products" };

export default async function AdminProductsPage() {
  const supabase = await createClient();
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false }) as { data: Product[] | null };

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-serif font-black text-3xl" style={{ color: "#F5EDD8" }}>
          Products
        </h1>
        <button
          className="px-5 py-3 text-xs font-bold tracking-widest uppercase"
          style={{ backgroundColor: "#C4622D", color: "#F5EDD8" }}
        >
          + Add Product
        </button>
      </div>

      {products && products.length > 0 ? (
        <div className="border" style={{ borderColor: "rgba(245,237,216,0.1)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(245,237,216,0.1)" }}>
                {["Name", "Price", "Category", "Status", "Shopify ID"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(245,237,216,0.4)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} style={{ borderBottom: "1px solid rgba(245,237,216,0.06)" }}>
                  <td className="px-4 py-3 font-medium" style={{ color: "#F5EDD8" }}>{product.name}</td>
                  <td className="px-4 py-3" style={{ color: "rgba(245,237,216,0.6)" }}>{formatPrice(product.price)}</td>
                  <td className="px-4 py-3" style={{ color: "rgba(245,237,216,0.6)" }}>{product.category}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-bold" style={{ backgroundColor: product.is_active ? "rgba(45,94,63,0.3)" : "rgba(196,98,45,0.2)", color: product.is_active ? "#2D5E3F" : "#C4622D" }}>
                      {product.is_active ? "Active" : "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs" style={{ color: "rgba(245,237,216,0.3)" }}>
                    {product.shopify_product_id ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="border p-16 text-center" style={{ borderColor: "rgba(245,237,216,0.1)" }}>
          <p className="text-sm mb-4" style={{ color: "rgba(245,237,216,0.4)" }}>No products yet.</p>
          <button className="px-5 py-3 text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#C4622D", color: "#F5EDD8" }}>
            Add Your First Product
          </button>
        </div>
      )}
    </div>
  );
}
