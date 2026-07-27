import { useRef } from "react";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import HowItWorks from "./components/HowItWorks";
import PreparationTable from "./components/PreparationTable";
import PricingCards from "./components/PricingCards";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import SectionFade from "./components/SectionFade";
import { useScrollGate } from "./useScrollGate";

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function App() {
  const videoRef = useRef<HTMLElement>(null);
  const { unlocked, remainingSeconds } = useScrollGate(videoRef);

  return (
    <div className="font-sans">
      <Hero />
      <VideoSection ref={videoRef} />

      {!unlocked && (
        <p className="pointer-events-none fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-jc-dark/80 px-4 py-2 text-xs text-jc-cream/80 backdrop-blur-sm">
          Continue assistindo — libera em {formatTime(remainingSeconds)}
        </p>
      )}

      <SectionFade direction="dark-to-cream" />
      <HowItWorks />
      <PreparationTable />
      <SectionFade direction="cream-to-dark" />
      <PricingCards />
      <SectionFade direction="dark-to-cream" />
      <Faq />
      <FinalCta />
      <SectionFade direction="cream-to-dark" />
      <Footer />
    </div>
  );
}

export default App;
