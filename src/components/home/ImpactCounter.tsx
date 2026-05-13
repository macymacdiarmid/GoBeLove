import Image from "next/image";

export default function ImpactCounter() {
  const stats = [
    { value: "47", suffix: "", label: "Children Sponsored" },
    { value: "1,200", suffix: "+", label: "Hoodies Sold" },
    { value: "12", suffix: "", label: "Countries Reached" },
    { value: "100", suffix: "%", label: "Profit to Xhope" },
  ];

  return (
    <section className="bg-deep py-24 px-6 relative overflow-hidden">

      {/* Logo repeat pattern — offset brick grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/gbl-logo.png'), url('/gbl-logo.png')",
          backgroundRepeat: "repeat, repeat",
          backgroundSize: "120px 134px, 120px 134px",
          backgroundPosition: "0 0, 60px 67px",
          filter: "invert(1)",
          opacity: 0.07,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="font-display tracking-widest uppercase text-center mb-16"
          style={{ fontSize: "clamp(18px, 3vw, 28px)", color: "#1ABFCC", letterSpacing: "0.25em" }}>
          Our Impact So Far
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display leading-none text-gold mb-3" style={{ fontSize: "clamp(48px, 7vw, 88px)" }}>
                {s.value}<span className="text-coral">{s.suffix}</span>
              </p>
              <p className="font-body text-xs font-semibold tracking-widest uppercase text-cream/40">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Kente-inspired pattern strip */}
        <div className="mt-20 flex overflow-hidden gap-0">
          {["#F07820", "#E83568", "#1ABFCC", "#F07820", "#0A1A2E", "#F07820", "#E83568", "#1ABFCC", "#F07820", "#0A1A2E", "#F07820", "#E83568"].map((c, i) => (
            <div key={i} className="h-3 flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>
    </section>
  );
}
