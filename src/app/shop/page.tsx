import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";

export const metadata: Metadata = { title: "Shop — All Hoodies" };

const ALL_PRODUCTS = [
  { id: "1", name: "Uganda Clay Hoodie",  slug: "uganda-clay-hoodie",  price: 8500, images: ["https://images.unsplash.com/photo-1611955874253-78c6c3959c41?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
  { id: "2", name: "Pearl Forest Hoodie", slug: "pearl-forest-hoodie", price: 8500, images: ["https://images.unsplash.com/photo-1586396847415-2c76ae7e79fc?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
  { id: "3", name: "Deep Ink Hoodie",     slug: "deep-ink-hoodie",     price: 8500, images: ["https://images.unsplash.com/photo-1557130680-0f816eef4743?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
  { id: "4", name: "Sand Cream Hoodie",   slug: "sand-cream-hoodie",   price: 8500, images: ["https://images.unsplash.com/photo-1588117260148-b47818741c74?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
  { id: "5", name: "Golden Hour Hoodie",  slug: "golden-hour-hoodie",  price: 9000, images: ["https://images.unsplash.com/photo-1631902112544-2271267abb73?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
  { id: "6", name: "Earth Tone Hoodie",   slug: "earth-tone-hoodie",   price: 8500, images: ["https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
];

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream">
        {/* Header */}
        <div className="bg-gold pt-32 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-body text-xs font-bold tracking-widest uppercase text-deep/50 mb-4">The Collection</p>
            <h1 className="font-display text-deep leading-none" style={{ fontSize: "clamp(56px, 10vw, 120px)" }}>
              ALL HOODIES
            </h1>
            <p className="font-body text-sm font-medium text-deep/60 mt-4">
              Every piece puts a child in school. Pick yours.
            </p>
          </div>
        </div>

        {/* Colour strip */}
        <div className="flex h-3">
          {["#E84855","#1A936F","#F7C842","#0D2B1F","#E84855","#1A936F","#F7C842","#0D2B1F","#E84855","#1A936F","#F7C842","#0D2B1F"].map((c, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {ALL_PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
