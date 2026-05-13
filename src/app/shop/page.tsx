import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";

export const metadata: Metadata = { title: "Shop — All Hoodies" };

const ALL_PRODUCTS = [
  { id: "1", name: "Uganda Clay Hoodie", slug: "uganda-clay-hoodie", price: 8500, images: ["https://images.unsplash.com/photo-1611955874253-78c6c3959c41?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
  { id: "2", name: "Pearl Forest Hoodie", slug: "pearl-forest-hoodie", price: 8500, images: ["https://images.unsplash.com/photo-1586396847415-2c76ae7e79fc?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
  { id: "3", name: "Deep Ink Hoodie", slug: "deep-ink-hoodie", price: 8500, images: ["https://images.unsplash.com/photo-1557130680-0f816eef4743?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
  { id: "4", name: "Sand Cream Hoodie", slug: "sand-cream-hoodie", price: 8500, images: ["https://images.unsplash.com/photo-1588117260148-b47818741c74?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
  { id: "5", name: "Golden Hour Hoodie", slug: "golden-hour-hoodie", price: 9000, images: ["https://images.unsplash.com/photo-1631902112544-2271267abb73?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
  { id: "6", name: "Earth Tone Hoodie", slug: "earth-tone-hoodie", price: 8500, images: ["https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
];

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5EDD8", minHeight: "100svh" }}>
        {/* Header */}
        <div style={{ backgroundColor: "#232220", paddingTop: "7rem" }} className="pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#C4622D" }}>
              The Collection
            </p>
            <h1 className="font-serif font-black" style={{ fontSize: "clamp(40px, 7vw, 80px)", color: "#F5EDD8", lineHeight: 1 }}>
              All Hoodies
            </h1>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {ALL_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
