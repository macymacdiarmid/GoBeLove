import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    images: string[];
    category: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const image = product.images[0] ?? "";

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      {/* Image */}
      <div
        className="relative overflow-hidden mb-4"
        style={{ backgroundColor: "#2a2820", aspectRatio: "3/4" }}
      >
        {image && (
          <Image
            src={image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        )}

        {/* Quick-shop overlay */}
        <div
          className="absolute inset-x-0 bottom-0 py-4 text-center text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: "#232220", color: "#F5EDD8" }}
        >
          Quick View
        </div>
      </div>

      {/* Info */}
      <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#C4622D" }}>
        {product.category}
      </p>
      <p className="font-serif font-bold text-base leading-tight mb-2" style={{ color: "#232220" }}>
        {product.name}
      </p>
      <p className="text-sm font-medium" style={{ color: "#232220" }}>
        {formatPrice(product.price)}
      </p>
    </Link>
  );
}
