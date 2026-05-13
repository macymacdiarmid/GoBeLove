export default function ShopifyPlaceholder() {
  return (
    <section style={{ backgroundColor: "#232220" }} className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#D4963A" }}>
          Shopify Integration
        </p>
        <h2 className="font-serif font-black mb-4" style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#F5EDD8" }}>
          Full Checkout Coming Soon
        </h2>
        <p className="text-sm leading-relaxed mb-10 max-w-md mx-auto" style={{ color: "rgba(245,237,216,0.45)" }}>
          We&apos;re connecting our Shopify store. In the meantime, reach out to order directly.
        </p>
        <div
          className="inline-flex items-center gap-3 border px-6 py-3 rounded-sm text-xs font-semibold tracking-widest uppercase"
          style={{ borderColor: "rgba(245,237,216,0.15)", color: "rgba(245,237,216,0.35)" }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#D4963A" }}
          />
          Shopify Storefront API Ready
        </div>
      </div>
    </section>
  );
}
