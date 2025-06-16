import { useState, useEffect, useRef } from 'react';
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
// import Porfolio from './components/Potfolio';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollInterval = useRef(null);
  const isScrolling = useRef(false);
  const scrollSpeed = useRef(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Add keyboard event handling for smooth scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault(); // Prevent default scrolling behavior
        
        if (!isScrolling.current) {
          isScrolling.current = true;
          scrollSpeed.current = 0;
        }

        // Clear any existing interval
        if (scrollInterval.current) {
          clearInterval(scrollInterval.current);
        }

        // Start continuous scrolling with acceleration
        scrollInterval.current = setInterval(() => {
          const currentPosition = window.scrollY;
          // Gradually increase scroll speed up to a maximum
          scrollSpeed.current = Math.min(scrollSpeed.current + 2, 20);
          
          const scrollAmount = scrollSpeed.current;
          const targetPosition = e.key === 'ArrowUp' 
            ? Math.max(0, currentPosition - scrollAmount) // Scroll up, but not above 0
            : currentPosition + scrollAmount; // Scroll down
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }, 16); // 60fps for smooth animation
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        // Clear the interval when key is released
        if (scrollInterval.current) {
          clearInterval(scrollInterval.current);
          scrollInterval.current = null;
        }
        isScrolling.current = false;
        scrollSpeed.current = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
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
        {/* <Porfolio /> */}
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
