import Link from "next/link";

export default function MissionBanner() {
  return (
    <section className="bg-coral py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-body text-xs font-bold tracking-widest uppercase text-cream/60 mb-4">
            Our Mission
          </p>
          <h2 className="font-display leading-none text-cream mb-6" style={{ fontSize: "clamp(48px, 8vw, 96px)" }}>
            ONE HOODIE.<br />ONE CHILD.<br />ONE YEAR.
          </h2>
          <p className="font-body text-base leading-relaxed text-cream/80 mb-8 max-w-md">
            Go Be Love bridges commerce and compassion. Every purchase directly funds a school term
            for a child at Xhope Children&apos;s School in Uganda — no middlemen, no vague promises.
          </p>
          <Link href="/about"
            className="inline-flex items-center gap-2 font-body font-bold text-sm tracking-widest uppercase text-cream border-b-2 border-cream/50 pb-1 hover:border-cream transition-colors">
            Learn More →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { word: "Joyful", bg: "#EF7B45", color: "#5C3A00" },
            { word: "Bold", bg: "#042A2B", color: "#EF7B45" },
            { word: "Hopeful", bg: "#5EB1BF", color: "#fff" },
            { word: "Grounded", bg: "#FFF5EC", color: "#042A2B" },
            { word: "Warm", bg: "#042A2B", color: "#D84727" },
            { word: "Unstoppable", bg: "#EF7B45", color: "#042A2B" },
          ].map(({ word, bg, color }) => (
            <div key={word} className="flex items-center justify-center py-5 px-4 text-center"
              style={{ backgroundColor: bg }}>
              <span className="font-display text-2xl" style={{ color, letterSpacing: "0.04em" }}>
                {word.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
