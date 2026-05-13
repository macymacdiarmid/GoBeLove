"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{ backgroundColor: "#232220", minHeight: "100svh" }}
      className="relative flex flex-col justify-end overflow-hidden"
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1578854955076-970394ef2512?w=1600&q=80&fit=crop&auto=format")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(35,34,32,0.2) 0%, rgba(35,34,32,0.85) 70%, #232220 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="text-xs font-bold tracking-widest uppercase mb-6"
            style={{ color: "#C4622D" }}
          >
            Purpose-Driven Streetwear
          </p>

          {/* Headline */}
          <h1
            className="font-serif font-black leading-none mb-8"
            style={{
              fontSize: "clamp(64px, 12vw, 140px)",
              color: "#F5EDD8",
              letterSpacing: "-0.03em",
            }}
          >
            Go<br />
            Be<br />
            <span style={{ color: "#C4622D" }}>Love.</span>
          </h1>

          {/* Sub */}
          <p
            className="font-serif italic text-xl md:text-2xl mb-10 max-w-lg"
            style={{ color: "rgba(245,237,216,0.6)", lineHeight: 1.5 }}
          >
            Every hoodie funds a child&apos;s education in Uganda.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all"
              style={{
                backgroundColor: "#C4622D",
                color: "#F5EDD8",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#E8836A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#C4622D";
              }}
            >
              Shop Now
            </Link>
            <Link
              href="/impact"
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-sm tracking-widest uppercase border transition-all"
              style={{
                borderColor: "rgba(245,237,216,0.3)",
                color: "rgba(245,237,216,0.7)",
              }}
            >
              See the Impact
            </Link>
          </div>
        </div>

        {/* Bottom stat bar */}
        <div
          className="mt-20 pt-8 border-t flex flex-wrap gap-10"
          style={{ borderColor: "rgba(245,237,216,0.12)" }}
        >
          {[
            { value: "100%", label: "Profit to Purpose" },
            { value: "Xhope", label: "Children's School, Uganda" },
            { value: "∞", label: "Lives Changed" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif font-black text-2xl" style={{ color: "#D4963A" }}>
                {stat.value}
              </p>
              <p className="text-xs tracking-wider uppercase mt-1" style={{ color: "rgba(245,237,216,0.4)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
