import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import MissionBanner from "@/components/home/MissionBanner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ImpactCounter from "@/components/home/ImpactCounter";
import ShopifyPlaceholder from "@/components/home/ShopifyPlaceholder";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MissionBanner />
        <FeaturedProducts />
        <ImpactCounter />
        <ShopifyPlaceholder />
      </main>
      <Footer />
    </>
  );
}
