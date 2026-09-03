import CactusRail from "@/components/CactusRail";
import HeroScene from "@/components/HeroScene";
import MlhBadge from "@/components/MlhBadge";
import Nav from "@/components/Nav";
import PaintedBackground from "@/components/PaintedBackground";
import ParallaxField from "@/components/ParallaxField";
import ScrollTravelers from "@/components/ScrollTravelers";
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import GetInvolved from "@/components/sections/GetInvolved";
import Sponsors from "@/components/sections/Sponsors";
import Tracks from "@/components/sections/Tracks";

export default function Home() {
  return (
    <ParallaxField>
      <PaintedBackground />
      <ScrollTravelers />
      <CactusRail />
      <Nav />
      <MlhBadge />
      {/* Each section pads away from whichever side the cactus lands on */}
      <main className="relative z-10 overflow-x-clip">
        <HeroScene />
        <About />
        <Tracks />
        <Sponsors />
        <GetInvolved />
        <Faq />
      </main>
    </ParallaxField>
  );
}
