import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import HowItWorks from "./components/HowItWorks";
import PreparationTable from "./components/PreparationTable";
import PricingCards from "./components/PricingCards";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import SectionFade from "./components/SectionFade";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <VideoSection />
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
