import Link from "next/link";
import ProductCard from "@/components/shop/ProductCard";

const PLACEHOLDER_PRODUCTS = [
  { id: "1", name: "Uganda Clay Hoodie", slug: "uganda-clay-hoodie", price: 8500, images: ["https://images.unsplash.com/photo-1611955874253-78c6c3959c41?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
  { id: "2", name: "Pearl Forest Hoodie", slug: "pearl-forest-hoodie", price: 8500, images: ["https://images.unsplash.com/photo-1586396847415-2c76ae7e79fc?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
  { id: "3", name: "Deep Ink Hoodie", slug: "deep-ink-hoodie", price: 8500, images: ["https://images.unsplash.com/photo-1557130680-0f816eef4743?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
  { id: "4", name: "Sand Cream Hoodie", slug: "sand-cream-hoodie", price: 8500, images: ["https://images.unsplash.com/photo-1588117260148-b47818741c74?w=600&q=80&fit=crop&auto=format"], category: "hoodies" },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-body text-xs font-bold tracking-widest uppercase text-teal mb-3">Featured</p>
            <h2 className="font-display leading-none text-deep" style={{ fontSize: "clamp(40px, 6vw, 80px)" }}>
              THE COLLECTION
            </h2>
          </div>
          <Link href="/shop" className="hidden md:inline-flex font-body text-xs font-bold tracking-widest uppercase text-deep border-b-2 border-deep pb-1 hover:text-coral hover:border-coral transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {PLACEHOLDER_PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/shop" className="font-body text-xs font-bold tracking-widest uppercase text-deep border-b-2 border-deep pb-1">
            View All Hoodies
          </Link>
        </div>
      </div>
    </section>
  );
}
