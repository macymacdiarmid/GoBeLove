import Link from "next/link";
import ProductCard from "@/components/shop/ProductCard";

const PLACEHOLDER_PRODUCTS = [
  {
    id: "1",
    name: "Uganda Clay Hoodie",
    slug: "uganda-clay-hoodie",
    price: 8500,
    images: ["https://images.unsplash.com/photo-1611955874253-78c6c3959c41?w=600&q=80&fit=crop&auto=format"],
    category: "hoodies",
  },
  {
    id: "2",
    name: "Pearl Forest Hoodie",
    slug: "pearl-forest-hoodie",
    price: 8500,
    images: ["https://images.unsplash.com/photo-1586396847415-2c76ae7e79fc?w=600&q=80&fit=crop&auto=format"],
    category: "hoodies",
  },
  {
    id: "3",
    name: "Deep Ink Hoodie",
    slug: "deep-ink-hoodie",
    price: 8500,
    images: ["https://images.unsplash.com/photo-1557130680-0f816eef4743?w=600&q=80&fit=crop&auto=format"],
    category: "hoodies",
  },
  {
    id: "4",
    name: "Sand Cream Hoodie",
    slug: "sand-cream-hoodie",
    price: 8500,
    images: ["https://images.unsplash.com/photo-1588117260148-b47818741c74?w=600&q=80&fit=crop&auto=format"],
    category: "hoodies",
  },
];

export default function FeaturedProducts() {
  return (
    <section style={{ backgroundColor: "#F5EDD8" }} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#C4622D" }}>
              Featured
            </p>
            <h2 className="font-serif font-black" style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#232220" }}>
              The Collection
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline-flex text-xs font-bold tracking-widest uppercase pb-1"
            style={{ color: "#232220", borderBottom: "1px solid #232220" }}
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {PLACEHOLDER_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/shop"
            className="inline-flex text-xs font-bold tracking-widest uppercase pb-1"
            style={{ color: "#232220", borderBottom: "1px solid #232220" }}
          >
            View All Hoodies
          </Link>
        </div>
      </div>
    </section>
  );
}
