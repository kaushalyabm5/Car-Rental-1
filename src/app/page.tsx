import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FleetSection from "@/components/FleetSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import HowToRentSection from "@/components/HowToRentSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CarBrandsSection from "@/components/CarBrandsSection";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import CtaSection from "@/components/CtaSection";
import ConciergeSection from "@/components/ConciergeSection";



export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <HeroSection />
      
      <FleetSection />
    
      <AboutSection />
      <CarBrandsSection />
      <Gallery />
        <WhyChooseUsSection />
      <ReviewsSection />
      <HowToRentSection />
        <ConciergeSection />
      
      <CtaSection />
      <Footer />
    
    </main>
  );
}