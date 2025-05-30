import { useState, useEffect } from 'react';
import CursorParticle from "./components/CorsorParticles";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import GoToTopButton from "./components/GoToTopButtom";
import CtaSection from "./components/CtaSection";
import ContactBtn from "./components/ContactBtn";
import OurClients from "./components/OurClients";
import Loading from './components/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <div className="relative">
      <CursorParticle />
    </div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <OurClients />
        <Workflow />
        <Testimonials />
        <CtaSection />
        <Footer />
        <ContactBtn />
        <div>
          <div style={{ height: '2px' }}> { }</div>
          <GoToTopButton />
        </div>

      </div>
    </>
  );
};

export default App;
