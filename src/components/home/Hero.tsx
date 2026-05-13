"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-gold">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1571417800906-5a5058dbd45d?w=1600&q=80&fit=crop&auto=format")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          mixBlendMode: "multiply",
        }}
        aria-hidden="true"
      />

      {/* Diagonal color block */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-teal opacity-30"
        style={{ clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-deep text-gold px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-coral rounded-full" />
          <span className="font-body text-xs font-bold tracking-widest uppercase">Purpose-Driven Streetwear</span>
        </div>

        {/* Headline */}
        <h1
          className="font-display leading-none text-deep mb-4"
          style={{ fontSize: "clamp(80px, 18vw, 200px)", letterSpacing: "-0.01em" }}
        >
          WEAR<br />
          THIS.<br />
          <span className="text-coral">SEND</span><br />
          THEM.
        </h1>

        {/* Sub */}
        <p className="font-body text-lg md:text-xl font-medium text-deep/70 mb-10 max-w-md">
          Every hoodie puts a child in class at Xhope Children&apos;s School, Uganda.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link href="/shop"
            className="inline-flex items-center gap-3 bg-coral text-cream px-8 py-4 font-body font-bold text-sm tracking-widest uppercase hover:bg-deep transition-colors">
            Shop Now
          </Link>
          <Link href="/impact"
            className="inline-flex items-center gap-3 border-2 border-deep text-deep px-8 py-4 font-body font-bold text-sm tracking-widest uppercase hover:bg-deep hover:text-gold transition-colors">
            See the Impact
          </Link>
        </div>

        {/* Stat bar */}
        <div className="mt-20 pt-8 border-t-2 border-deep/20 flex flex-wrap gap-12">
          {[
            { value: "100%", label: "Profit to Purpose" },
            { value: "Xhope", label: "School, Uganda" },
            { value: "1,200+", label: "Hoodies Sold" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl text-deep" style={{ letterSpacing: "0.02em" }}>{s.value}</p>
              <p className="font-body text-xs font-semibold tracking-widest uppercase text-deep/50 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
