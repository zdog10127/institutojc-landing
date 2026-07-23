import Hero from "./components/Hero";
import PreparationTable from "./components/PreparationTable";
import HowItWorks from "./components/HowItWorks";
import PricingCards from "./components/PricingCards";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <PreparationTable />
      <HowItWorks />
      <PricingCards />
      <Faq />
      <FinalCta />
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;
