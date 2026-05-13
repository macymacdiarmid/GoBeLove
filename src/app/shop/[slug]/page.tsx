import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { formatPrice } from "@/lib/utils";

const PRODUCTS: Record<string, { id: string; name: string; slug: string; price: number; images: string[]; description: string; sizes: string[] }> = {
  "uganda-clay-hoodie": {
    id: "1", name: "Uganda Clay Hoodie", slug: "uganda-clay-hoodie", price: 8500,
    images: ["https://images.unsplash.com/photo-1611955874253-78c6c3959c41?w=800&q=80&fit=crop&auto=format"],
    description: "A heavyweight, oversized hoodie in our signature Uganda Clay colorway. Inspired by the warm red earth of East Africa. Each purchase funds a term of school for a child at Xhope Children's School.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  "pearl-forest-hoodie": {
    id: "2", name: "Pearl Forest Hoodie", slug: "pearl-forest-hoodie", price: 8500,
    images: ["https://images.unsplash.com/photo-1586396847415-2c76ae7e79fc?w=800&q=80&fit=crop&auto=format"],
    description: "Deep forest green, inspired by the lush hills of Uganda. Premium heavyweight cotton in an oversized, gender-neutral cut.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: PRODUCTS[slug]?.name ?? "Product Not Found" };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS[slug];

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="bg-cream min-h-screen pt-32 px-6 text-center">
          <h1 className="font-display text-5xl text-deep mb-4">PRODUCT NOT FOUND</h1>
          <Link href="/shop" className="font-body text-sm font-bold tracking-widest uppercase text-teal underline">Back to Shop</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen pt-20">
        {/* Gold bar */}
        <div className="h-2 flex">
          {["#F7C842","#E84855","#1A936F","#0D2B1F","#F7C842","#E84855","#1A936F","#0D2B1F","#F7C842","#E84855","#1A936F","#0D2B1F"].map((c, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <div className="relative overflow-hidden bg-deep" style={{ aspectRatio: "3/4" }}>
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <p className="font-body text-xs font-bold tracking-widest uppercase text-teal mb-4">Hoodies</p>
              <h1 className="font-display leading-none text-deep mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
                {product.name.toUpperCase()}
              </h1>
              <p className="font-display text-4xl text-coral mb-6">{formatPrice(product.price)}</p>
              <p className="font-body text-sm leading-relaxed text-deep/60 mb-8">{product.description}</p>

              {/* Size Selector */}
              <div className="mb-8">
                <p className="font-body text-xs font-bold tracking-widest uppercase text-deep mb-4">Select Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button key={size}
                      className="w-12 h-12 border-2 border-deep/20 font-body text-sm font-bold text-deep hover:border-coral hover:text-coral transition-all">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to cart */}
              <button className="w-full py-5 bg-coral text-cream font-body font-bold text-sm tracking-widest uppercase hover:bg-deep transition-colors mb-4">
                Add to Cart
              </button>

              {/* Impact note */}
              <div className="p-4 bg-gold/30 border-l-4 border-gold">
                <p className="font-body text-sm font-medium text-deep">
                  This purchase directly funds a child&apos;s school term at Xhope Children&apos;s School in Uganda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
