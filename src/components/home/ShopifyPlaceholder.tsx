export default function ShopifyPlaceholder() {
  return (
    <section className="bg-gold py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-body text-xs font-bold tracking-widest uppercase text-deep/50 mb-4">
          Shopify Integration
        </p>
        <h2 className="font-display leading-none text-deep mb-4" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>
          FULL CHECKOUT<br />COMING SOON
        </h2>
        <p className="font-body text-sm font-medium text-deep/60 mb-10 max-w-sm mx-auto">
          We&apos;re connecting our Shopify store. Reach out to order directly in the meantime.
        </p>
        <div className="inline-flex items-center gap-3 border-2 border-deep/20 text-deep/40 px-6 py-3 font-body font-bold text-xs tracking-widest uppercase">
          <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
          Shopify Storefront API Ready
        </div>
      </div>
    </section>
  );
}
