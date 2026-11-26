import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FleetSection from "@/components/FleetSection";
import PackagesSection from "@/components/PackagesSection";
import ConciergeSection from "@/components/ConciergeSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <HeroSection />
      <FleetSection />
      <PackagesSection />
      <ConciergeSection />
    </main>
  );
}