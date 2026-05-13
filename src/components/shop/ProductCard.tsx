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
      <div className="relative overflow-hidden mb-4 bg-deep" style={{ aspectRatio: "3/4" }}>
        {image && (
          <Image
            src={image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        )}
        <div className="absolute inset-x-0 bottom-0 py-3 text-center font-body text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity bg-gold text-deep">
          Quick View
        </div>
      </div>
      <p className="font-body text-xs font-bold tracking-widest uppercase text-teal mb-1">{product.category}</p>
      <p className="font-display text-xl text-deep mb-1" style={{ letterSpacing: "0.04em" }}>{product.name.toUpperCase()}</p>
      <p className="font-body text-sm font-semibold text-deep/70">{formatPrice(product.price)}</p>
    </Link>
  );
}
