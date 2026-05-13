import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#232220" }} className="text-cream/60 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-cream/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-black text-cream block mb-4">
              Go Be Love.
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-cream/50">
              Purpose-driven streetwear. Every hoodie funds a child&apos;s education at Xhope
              Children&apos;s School in Uganda.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-cream transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-cream transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-clay mb-5">Shop</p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shop" className="hover:text-cream transition-colors">All Hoodies</Link></li>
              <li><Link href="/shop?category=new" className="hover:text-cream transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop?category=bestsellers" className="hover:text-cream transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-clay mb-5">Company</p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-cream transition-colors">Our Story</Link></li>
              <li><Link href="/impact" className="hover:text-cream transition-colors">Impact</Link></li>
              <li><Link href="/account" className="hover:text-cream transition-colors">My Account</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/30">
          <p>&copy; {year} Go Be Love. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-cream/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
