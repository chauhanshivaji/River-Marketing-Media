import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorParticle = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      if (!isMobile) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      <motion.div
        className="absolute w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(255,165,0,1)]"
        animate={{ x: position.x - 8, y: position.y - 8, scale: [1, 1.5, 1] }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </div>
  );
};

export default CursorParticle;
