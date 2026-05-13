import Link from "next/link";

export default function MissionBanner() {
  return (
    <section style={{ backgroundColor: "#C4622D" }} className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(245,237,216,0.6)" }}>
            Our Mission
          </p>
          <h2 className="font-serif font-black leading-tight mb-6" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#F5EDD8" }}>
            Streetwear<br />with Soul.
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(245,237,216,0.8)", maxWidth: 440 }}>
            Go Be Love bridges commerce and compassion. A percentage of every hoodie sold funds
            the children at Xhope Children&apos;s School in Uganda — giving them access to the
            education that changes everything.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase pb-1"
            style={{ color: "#F5EDD8", borderBottom: "1px solid rgba(245,237,216,0.5)" }}
          >
            Learn More &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            "Purposeful",
            "Warm",
            "Bold",
            "Connected",
            "Human",
            "Giving",
          ].map((word) => (
            <div
              key={word}
              className="border rounded-sm py-3 px-4 text-center"
              style={{ borderColor: "rgba(245,237,216,0.25)", color: "#F5EDD8" }}
            >
              <span className="font-serif font-bold text-sm">{word}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
