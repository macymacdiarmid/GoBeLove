import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { formatPrice } from "@/lib/utils";

const PRODUCTS: Record<string, { id: string; name: string; slug: string; price: number; images: string[]; description: string; sizes: string[] }> = {
  "uganda-clay-hoodie": {
    id: "1",
    name: "Uganda Clay Hoodie",
    slug: "uganda-clay-hoodie",
    price: 8500,
    images: ["https://images.unsplash.com/photo-1611955874253-78c6c3959c41?w=800&q=80&fit=crop&auto=format"],
    description: "A heavyweight, oversized hoodie in our signature Uganda Clay colorway. Inspired by the warm red earth of East Africa. Each purchase funds a term of school for a child at Xhope Children's School.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  "pearl-forest-hoodie": {
    id: "2",
    name: "Pearl Forest Hoodie",
    slug: "pearl-forest-hoodie",
    price: 8500,
    images: ["https://images.unsplash.com/photo-1586396847415-2c76ae7e79fc?w=800&q=80&fit=crop&auto=format"],
    description: "Deep forest green, inspired by the lush hills of Uganda. Premium heavyweight cotton in an oversized, gender-neutral cut.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS[slug];
  return { title: product?.name ?? "Product Not Found" };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS[slug];

  if (!product) {
    return (
      <>
        <Navbar />
        <main style={{ backgroundColor: "#F5EDD8", minHeight: "100svh", paddingTop: "8rem" }} className="px-6 text-center">
          <h1 className="font-serif text-4xl font-black mb-4">Product not found</h1>
          <Link href="/shop" className="text-sm tracking-widest uppercase underline">Back to Shop</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5EDD8", paddingTop: "5rem", minHeight: "100svh" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <div style={{ backgroundColor: "#2a2820", aspectRatio: "3/4" }} className="relative overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#C4622D" }}>
                Hoodies
              </p>
              <h1 className="font-serif font-black mb-4" style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#232220", lineHeight: 1.1 }}>
                {product.name}
              </h1>
              <p className="font-serif font-bold text-2xl mb-6" style={{ color: "#232220" }}>
                {formatPrice(product.price)}
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#7a7060" }}>
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="mb-8">
                <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#232220" }}>
                  Select Size
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="w-12 h-12 border text-sm font-semibold transition-all hover:border-ink"
                      style={{ borderColor: "#D9CEB5", color: "#232220" }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to cart — will link to Shopify */}
              <button
                className="w-full py-5 font-semibold text-sm tracking-widest uppercase transition-all mb-4"
                style={{ backgroundColor: "#C4622D", color: "#F5EDD8" }}
              >
                Add to Cart
              </button>

              {/* Impact note */}
              <div
                className="p-4 border-l-2 text-sm leading-relaxed"
                style={{ borderColor: "#2D5E3F", backgroundColor: "rgba(45,94,63,0.06)", color: "#2D5E3F" }}
              >
                A portion of this purchase directly funds a child&apos;s education at Xhope Children&apos;s School in Uganda.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
