import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import HowItWorks from "./components/HowItWorks";
import PreparationTable from "./components/PreparationTable";
import PricingCards from "./components/PricingCards";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <VideoSection />
      <HowItWorks />
      <PreparationTable />
      <PricingCards />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

export default App;
