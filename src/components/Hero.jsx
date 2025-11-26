import { useState, useEffect, useRef } from 'react';
import ASCIIText from './ASCIIText';

function Hero() {
  const [key, setKey] = useState(0);
  const [sizes, setSizes] = useState({
    asciiFontSize: 6,
    textFontSize: 320,
    planeBaseHeight: 13,
    containerHeight: 200
  });
  const containerRef = useRef(null);

  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;
      
      if (width < 640) {
        // Mobile
        setSizes({
          asciiFontSize: 3,
          textFontSize: 120,
          planeBaseHeight: 6,
          containerHeight: 100
        });
      } else if (width < 1024) {
        // Tablet
        setSizes({
          asciiFontSize: 4,
          textFontSize: 200,
          planeBaseHeight: 9,
          containerHeight: 150
        });
      } else {
        // Desktop
        setSizes({
          asciiFontSize: 6,
          textFontSize: 320,
          planeBaseHeight: 13,
          containerHeight: 200
        });
      }
    };

    // Initial size calculation
    updateSizes();

    // Force re-render after initial mount
    const timer = setTimeout(() => {
      setKey(1);
    }, 100);

    // Add resize listener
    window.addEventListener('resize', updateSizes);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateSizes);
    };
  }, []);

  // Re-mount ASCIIText when sizes change
  useEffect(() => {
    if (key > 0) {
      setKey(prev => prev + 1);
    }
  }, [sizes]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Animated rainbow glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-500/10 via-orange-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="w-full max-w-6xl px-4 md:px-6 relative z-10">
        {/* ASCII Title Container - Responsive */}
        <div 
          ref={containerRef}
          className="relative w-full mx-auto" 
          style={{ 
            height: `${sizes.containerHeight}px`, 
            maxWidth: '1000px', 
            overflow: 'visible' 
          }}
        >
          <ASCIIText
            key={key}
            text="disfigured"
            asciiFontSize={sizes.asciiFontSize}
            textFontSize={sizes.textFontSize}
            textColor="#fdf9f3"
            planeBaseHeight={sizes.planeBaseHeight}
            enableWaves={false}
          />
        </div>
        
        <div className="text-center mt-12 md:mt-20 space-y-4 px-4">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light tracking-wide">
            A Peer Support Platform
          </p>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-pink-500 via-orange-500 via-yellow-500 via-green-500 via-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </div>
      
      {/* Scroll indicator with rainbow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
