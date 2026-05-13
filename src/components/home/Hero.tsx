"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-end overflow-hidden bg-deep" style={{ minHeight: "68vh" }}>

      {/* Photo — cropped to focus on people, sky pushed off top */}
      <div className="absolute inset-0">
        <Image
          src="/hero-xhope.jpg"
          alt="The children and team at Xhope Children's School, Uganda"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 75%" }}
          sizes="100vw"
        />
      </div>

      {/* Gradient — clear at top, deep at bottom so photo reads and text pops */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(10,26,46,0.05) 0%, rgba(10,26,46,0.15) 40%, rgba(10,26,46,0.75) 72%, rgba(10,26,46,0.95) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content — anchored to bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-gold text-deep px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-coral rounded-full" />
          <span className="font-body text-xs font-bold tracking-widest uppercase">Purpose-Driven Streetwear</span>
        </div>

        {/* Headline */}
        <h1
          className="font-display leading-none mb-6"
          style={{ fontSize: "clamp(72px, 16vw, 180px)", letterSpacing: "-0.01em" }}
        >
          <span className="text-cream">GO BE<br /></span>
          <span style={{ color: "#E83568" }}>LOVE.</span>
        </h1>

        {/* Sub */}
        <p className="font-body text-base md:text-lg font-medium text-cream/80 mb-8 max-w-md">
          Every hoodie puts a child in class at Xhope Children&apos;s School, Uganda.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link href="/shop"
            className="inline-flex items-center gap-3 bg-coral text-cream px-8 py-4 font-body font-bold text-sm tracking-widest uppercase hover:bg-gold hover:text-deep transition-colors">
            Shop Now
          </Link>
          <Link href="/impact"
            className="inline-flex items-center gap-3 border-2 border-cream/50 text-cream px-8 py-4 font-body font-bold text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors">
            See the Impact
          </Link>
        </div>

        {/* Stat bar */}
        <div className="mt-16 pt-8 border-t border-cream/20 flex flex-wrap gap-10">
          {[
            { value: "100%",   label: "Profit to Purpose" },
            { value: "Xhope",  label: "School, Uganda" },
            { value: "1,200+", label: "Hoodies Sold" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl text-gold" style={{ letterSpacing: "0.02em" }}>{s.value}</p>
              <p className="font-body text-xs font-semibold tracking-widest uppercase text-cream/40 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
