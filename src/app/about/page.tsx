import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Our Story" };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="bg-gold pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-end">
            <div>
              <p className="font-body text-xs font-bold tracking-widest uppercase text-deep/50 mb-4">Our Story</p>
              <h1 className="font-display leading-none text-deep" style={{ fontSize: "clamp(64px, 12vw, 140px)" }}>
                WHY<br />WE<br />EXIST.
              </h1>
            </div>
            <p className="font-body text-xl font-medium leading-relaxed text-deep/70">
              Go Be Love is more than apparel. It&apos;s a bridge between a generation that wants
              their choices to matter and children in Uganda who deserve a shot at tomorrow.
            </p>
          </div>
        </div>

        {/* Colour strip */}
        <div className="flex h-3">
          {["#E83568","#1ABFCC","#0A1A2E","#E83568","#1ABFCC","#0A1A2E","#E83568","#1ABFCC","#0A1A2E","#E83568","#1ABFCC","#0A1A2E"].map((c, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>

        {/* Story */}
        <div className="bg-cream py-24 px-6">
          <div className="max-w-4xl mx-auto space-y-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-body text-xs font-bold tracking-widest uppercase text-coral mb-4">The Beginning</p>
                <h2 className="font-display leading-none text-deep mb-6" style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
                  A HOODIE THAT CHANGES A LIFE
                </h2>
                <p className="font-body text-base leading-relaxed text-deep/60">
                  Go Be Love started with a simple question: what if the clothes you wore could fund a
                  child&apos;s education? We partnered with Xhope Children&apos;s School in Uganda to make
                  that question a reality. Every sale ties directly to a real outcome — no middlemen, no vague promises.
                </p>
              </div>
              <div className="relative overflow-hidden bg-deep" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="https://images.unsplash.com/photo-1571417800906-5a5058dbd45d?w=600&q=80&fit=crop&auto=format"
                  alt="Children at Xhope" fill className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden bg-teal md:order-first" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="https://images.unsplash.com/photo-1696963601946-606189e0851c?w=600&q=80&fit=crop&auto=format"
                  alt="Uganda landscape" fill className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="font-body text-xs font-bold tracking-widest uppercase text-teal mb-4">The Place</p>
                <h2 className="font-display leading-none text-deep mb-6" style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
                  UGANDA — WHERE IT LANDS
                </h2>
                <p className="font-body text-base leading-relaxed text-deep/60">
                  Uganda&apos;s lush green hills, warm red earth, and vibrant communities are woven into our
                  brand&apos;s DNA. Xhope Children&apos;s School is where every purchase becomes real and measurable.
                  You buy a hoodie; a kid gets a school term.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-coral py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-body text-xs font-bold tracking-widest uppercase text-cream/60 mb-4">What We Stand For</p>
            <h2 className="font-display leading-none text-cream mb-16" style={{ fontSize: "clamp(40px, 7vw, 88px)" }}>
              OUR VALUES
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "RADICAL TRANSPARENCY", body: "We publish exactly where the money goes. Every sale is tied to a real outcome at Xhope. No PR fluff." },
                { title: "GENDER-NEUTRAL DESIGN", body: "Our hoodies are for everyone. Oversized, clean, and built to be worn by any body, any way." },
                { title: "COMMERCE WITH CONSCIENCE", body: "We believe business and compassion can coexist. Go Be Love is proof that they must." },
              ].map((v) => (
                <div key={v.title} className="border-t-4 border-gold pt-6">
                  <h3 className="font-display text-2xl text-cream mb-3" style={{ letterSpacing: "0.04em" }}>{v.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-cream/70">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-deep py-24 px-6 text-center">
          <h2 className="font-display text-gold leading-none mb-6" style={{ fontSize: "clamp(40px, 7vw, 96px)" }}>
            WEAR THIS.<br />SEND THEM.
          </h2>
          <Link href="/shop"
            className="inline-flex items-center gap-3 bg-coral text-cream px-10 py-5 font-body font-bold text-sm tracking-widest uppercase hover:bg-gold hover:text-deep transition-colors">
            Shop the Collection
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
