import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Impact" };

const STATS = [
  { value: "47", label: "Children Sponsored", suffix: "", color: "#D4963A" },
  { value: "1,200", label: "Hoodies Sold", suffix: "+", color: "#C4622D" },
  { value: "12", label: "Countries Reached", suffix: "", color: "#2D5E3F" },
  { value: "100", label: "% Profit to Xhope", suffix: "%", color: "#D4963A" },
];

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div style={{ backgroundColor: "#2D5E3F", paddingTop: "7rem" }} className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(245,237,216,0.5)" }}>
              Real Impact
            </p>
            <h1 className="font-serif font-black leading-none mb-8" style={{ fontSize: "clamp(48px, 8vw, 100px)", color: "#F5EDD8" }}>
              Where<br />Your<br />Money<br />Goes.
            </h1>
            <p className="text-base leading-relaxed max-w-md" style={{ color: "rgba(245,237,216,0.6)" }}>
              Every hoodie purchase is directly tied to a child&apos;s school term at Xhope Children&apos;s
              School in Uganda. This page tracks it all.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div style={{ backgroundColor: "#232220" }} className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif font-black leading-none mb-3" style={{ fontSize: "clamp(48px, 7vw, 80px)", color: s.color }}>
                  {s.value}{s.suffix}
                </p>
                <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(245,237,216,0.4)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Xhope Section */}
        <div style={{ backgroundColor: "#F5EDD8" }} className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#C4622D" }}>
                  Xhope Children&apos;s School
                </p>
                <h2 className="font-serif font-black text-4xl mb-6" style={{ color: "#232220" }}>
                  The School Behind the Brand
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#7a7060" }}>
                  Xhope Children&apos;s School in Uganda provides education, meals, and community support
                  to children who would otherwise have no access. Go Be Love is a committed partner —
                  not a charity campaign, but a sustainable funding model.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#7a7060" }}>
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
                  <div key={i} style={{ backgroundColor: "#2a2820", aspectRatio: "1" }} className="relative overflow-hidden">
                    <Image src={src} alt="Xhope children" fill className="object-cover" sizes="25vw" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Uganda landscape strip */}
        <div className="grid grid-cols-3 h-64 md:h-80">
          {[
            "https://images.unsplash.com/photo-1696963601946-606189e0851c?w=600&q=80&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1594068337983-b24ff1207b1b?w=600&q=80&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1704183683740-1400a49816b7?w=600&q=80&fit=crop&auto=format",
          ].map((src, i) => (
            <div key={i} style={{ backgroundColor: "#2a2820" }} className="relative overflow-hidden">
              <Image src={src} alt="Uganda" fill className="object-cover opacity-80" sizes="33vw" />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
