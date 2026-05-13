import Image from "next/image";

export default function ImpactCounter() {
  const stats = [
    { value: "47", suffix: "", label: "Children Sponsored" },
    { value: "1,200", suffix: "+", label: "Hoodies Sold" },
    { value: "12", suffix: "", label: "Countries Reached" },
    { value: "100", suffix: "%", label: "Profit to Xhope" },
  ];

  return (
    <section className="bg-deep py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <Image
            src="/gbl-logo.png"
            alt="Go Be Love"
            width={60}
            height={67}
            style={{ filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(148deg) brightness(0.9)" }}
          />
        </div>
        <p className="font-body text-xs font-bold tracking-widest uppercase text-gold/50 mb-16 text-center">
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
