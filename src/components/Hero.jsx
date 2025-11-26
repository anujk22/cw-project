import { useState, useEffect } from 'react';
import ASCIIText from './ASCIIText';

function Hero() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure layout is calculated
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Animated rainbow glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-500/10 via-orange-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="w-full max-w-6xl px-6 relative z-10">
        {/* ASCII Title Container - Only render when ready */}
        <div className="relative w-full mx-auto" style={{ height: '200px', maxWidth: '1000px', overflow: 'visible' }}>
          {isReady && (
            <ASCIIText
              text="disfigured"
              asciiFontSize={5}
              textFontSize={200}
              textColor="#fdf9f3"
              planeBaseHeight={8}
              enableWaves={false}
            />
          )}
        </div>
        
        <div className="text-center mt-20 space-y-4">
          <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
            A Peer Support Platform
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-orange-500 via-yellow-500 via-green-500 via-cyan-500 to-purple-500 mx-auto rounded-full"></div>
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
