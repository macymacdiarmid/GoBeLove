import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Our Story" };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5EDD8" }}>
        {/* Hero */}
        <div style={{ backgroundColor: "#232220", paddingTop: "7rem" }} className="pb-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#C4622D" }}>
                Our Story
              </p>
              <h1 className="font-serif font-black leading-none mb-6" style={{ fontSize: "clamp(48px, 8vw, 100px)", color: "#F5EDD8" }}>
                Why<br />We<br />Exist.
              </h1>
            </div>
            <p className="font-serif italic text-xl leading-relaxed" style={{ color: "rgba(245,237,216,0.55)" }}>
              Go Be Love is more than apparel. It&apos;s a bridge between a generation that wants
              their choices to matter and children in Uganda who deserve a shot at tomorrow.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#C4622D" }}>
                The Beginning
              </p>
              <h2 className="font-serif font-black text-3xl mb-6" style={{ color: "#232220" }}>
                A Hoodie That Changes a Life
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#7a7060" }}>
                Go Be Love started with a simple question: what if the clothes you wore could fund a
                child&apos;s education? We partnered with Xhope Children&apos;s School in Uganda to make
                that question a reality. A percentage of every hoodie sold goes directly to supporting
                the children there — no middlemen, no vague promises.
              </p>
            </div>
            <div style={{ backgroundColor: "#2a2820", aspectRatio: "4/3" }} className="relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571417800906-5a5058dbd45d?w=600&q=80&fit=crop&auto=format"
                alt="Children at Xhope"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div style={{ backgroundColor: "#2D5E3F", aspectRatio: "4/3" }} className="relative overflow-hidden md:order-first">
              <Image
                src="https://images.unsplash.com/photo-1696963601946-606189e0851c?w=600&q=80&fit=crop&auto=format"
                alt="Uganda landscape"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#2D5E3F" }}>
                The Place
              </p>
              <h2 className="font-serif font-black text-3xl mb-6" style={{ color: "#232220" }}>
                Uganda — Where Every Purchase Lands
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#7a7060" }}>
                Uganda&apos;s lush green hills, warm red earth, and vibrant communities are the heart of
                our brand identity. Xhope Children&apos;s School is where the impact is real and
                measurable. You buy a hoodie; a kid gets a school term.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div style={{ backgroundColor: "#C4622D" }} className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-12 text-center" style={{ color: "rgba(245,237,216,0.6)" }}>
              What We Stand For
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Radical Transparency", body: "We publish exactly where the money goes. No PR fluff. Every sale is tied to a real outcome at Xhope." },
                { title: "Gender-Neutral Design", body: "Our hoodies are for everyone. Oversized, clean, and built to be worn by any body, any way." },
                { title: "Commerce with Conscience", body: "We believe business and compassion can coexist. Go Be Love is proof that they must." },
              ].map((v) => (
                <div key={v.title} className="border-t pt-6" style={{ borderColor: "rgba(245,237,216,0.25)" }}>
                  <h3 className="font-serif font-bold text-xl mb-3" style={{ color: "#F5EDD8" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,237,216,0.7)" }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
