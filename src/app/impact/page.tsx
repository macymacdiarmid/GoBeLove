import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Impact" };

const STATS = [
  { value: "47",   suffix: "",  label: "Children Sponsored", bg: "#F07820", color: "#0A1A2E" },
  { value: "1,200",suffix: "+", label: "Hoodies Sold",       bg: "#E83568", color: "#fff"    },
  { value: "12",   suffix: "",  label: "Countries Reached",  bg: "#1ABFCC", color: "#fff"    },
  { value: "100",  suffix: "%", label: "Profit to Xhope",    bg: "#0A1A2E", color: "#F07820" },
];

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="bg-teal pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-body text-xs font-bold tracking-widest uppercase text-cream/50 mb-4">Real Impact</p>
            <h1 className="font-display leading-none text-cream mb-8" style={{ fontSize: "clamp(56px, 12vw, 140px)" }}>
              WHERE<br />YOUR<br />MONEY<br />GOES.
            </h1>
            <p className="font-body text-base font-medium leading-relaxed text-cream/70 max-w-md">
              Every hoodie purchase is directly tied to a child&apos;s school term at Xhope Children&apos;s
              School in Uganda. This page tracks it all.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="py-16 px-8 text-center" style={{ backgroundColor: s.bg }}>
              <p className="font-display leading-none mb-3" style={{ fontSize: "clamp(48px, 6vw, 80px)", color: s.color }}>
                {s.value}{s.suffix}
              </p>
              <p className="font-body text-xs font-bold tracking-widest uppercase" style={{ color: s.color, opacity: 0.6 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Xhope section */}
        <div className="bg-cream py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <p className="font-body text-xs font-bold tracking-widest uppercase text-coral mb-4">
                  Xhope Children&apos;s School
                </p>
                <h2 className="font-display leading-none text-deep mb-6" style={{ fontSize: "clamp(32px, 5vw, 64px)" }}>
                  THE SCHOOL BEHIND THE BRAND
                </h2>
                <p className="font-body text-base leading-relaxed text-deep/60 mb-4">
                  Xhope Children&apos;s School in Uganda provides education, meals, and community support
                  to children who would otherwise have no access. Go Be Love is a committed partner —
                  not a charity campaign, but a sustainable funding model.
                </p>
                <p className="font-body text-base leading-relaxed text-deep/60">
                  For every hoodie sold, a meaningful portion goes directly to fund school fees,
                  supplies, and programs. The impact is real, trackable, and grows with every purchase.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "https://images.unsplash.com/photo-1571417800906-5a5058dbd45d?w=400&q=80&fit=crop&auto=format",
                  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80&fit=crop&auto=format",
                  "https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?w=400&q=80&fit=crop&auto=format",
                  "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?w=400&q=80&fit=crop&auto=format",
                ].map((src, i) => (
                  <div key={i} className="relative overflow-hidden bg-deep" style={{ aspectRatio: "1" }}>
                    <Image src={src} alt="Xhope children" fill className="object-cover" sizes="25vw" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Landscape strip */}
        <div className="grid grid-cols-3 h-64 md:h-96">
          {[
            "https://images.unsplash.com/photo-1696963601946-606189e0851c?w=600&q=80&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1594068337983-b24ff1207b1b?w=600&q=80&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1704183683740-1400a49816b7?w=600&q=80&fit=crop&auto=format",
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden bg-deep">
              <Image src={src} alt="Uganda" fill className="object-cover opacity-80" sizes="33vw" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gold py-24 px-6 text-center">
          <h2 className="font-display leading-none text-deep mb-6" style={{ fontSize: "clamp(40px, 7vw, 96px)" }}>
            BE PART<br />OF THIS.
          </h2>
          <Link href="/shop"
            className="inline-flex items-center gap-3 bg-deep text-gold px-10 py-5 font-body font-bold text-sm tracking-widest uppercase hover:bg-coral hover:text-cream transition-colors">
            Shop Now
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
