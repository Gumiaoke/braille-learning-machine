import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { PaymentModalWrapper } from "@/components/shop/PaymentModalWrapper";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { CoreFeatures } from "@/components/sections/CoreFeatures";
import { IPStory } from "@/components/sections/IPStory";
import { UseScenarios } from "@/components/sections/UseScenarios";
import { Testimonials } from "@/components/sections/Testimonials";
import { CharityProgram } from "@/components/sections/CharityProgram";
import { ShopModule } from "@/components/sections/ShopModule";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroBanner />
        <VideoShowcase />
        <ProductShowcase />
        <CoreFeatures />
        <IPStory />
        <UseScenarios />
        <Testimonials />
        <CharityProgram />
        <ShopModule />
      </main>
      <Footer />
      <CartDrawer />
      <PaymentModalWrapper />
    </>
  );
}
