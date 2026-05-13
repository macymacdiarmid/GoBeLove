export default function ImpactCounter() {
  const stats = [
    { value: "47", label: "Children Sponsored", suffix: "" },
    { value: "1,200", label: "Hoodies Sold", suffix: "+" },
    { value: "12", label: "Countries Reached", suffix: "" },
    { value: "100", label: "Profit to Xhope", suffix: "%" },
  ];

  return (
    <section style={{ backgroundColor: "#2D5E3F" }} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-16 text-center" style={{ color: "rgba(245,237,216,0.5)" }}>
          Our Impact So Far
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-serif font-black leading-none mb-3"
                style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#F5EDD8" }}
              >
                {s.value}
                <span style={{ color: "#D4963A" }}>{s.suffix}</span>
              </p>
              <p className="text-xs font-medium tracking-widest uppercase" style={{ color: "rgba(245,237,216,0.45)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
