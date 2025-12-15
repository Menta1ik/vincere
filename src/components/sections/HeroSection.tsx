import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const headlines = [
    { line1: "Your talent is worth money.", line2: "Prove it." },
    { line1: "Compete. Win.", line2: "Earn instantly." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % headlines.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-platform-dark-900/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left pt-20 lg:pt-0">
            {/* Main heading with animation */}
            <div className="mb-8 min-h-[160px] flex items-center justify-center lg:justify-start">
              <h1 
                className={`text-5xl md:text-7xl mb-6 gradient-text font-['CarterOne'] transition-opacity duration-500 ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <span className="block">{headlines[currentHeadline].line1}</span>
                <span className="block mt-2">{headlines[currentHeadline].line2}</span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="max-w-2xl mx-auto lg:mx-0 mb-12">
              <p className="text-xl md:text-2xl text-platform-text text-opacity-80 mb-8 leading-relaxed">
                Vincere is a video competition platform for creators and talents ready to monetize their skills. No waiting for followers, viewers, or advertisers. Just pure competition and real prizes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16 lg:mb-0">
              <Button variant="primary" size="lg" className="group">
                Start Competing
              </Button>
            </div>
          </div>

          {/* Phone Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
             <div className="relative w-[280px] md:w-[340px] lg:w-[380px] transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out z-20">
                <div className="absolute inset-0 bg-platform-primary/30 blur-[80px] rounded-full animate-pulse"></div>
                <img 
                  src="/images/app-splash.png" 
                  alt="Vincere App Splash Screen" 
                  className="relative w-full h-auto drop-shadow-2xl"
                />
             </div>
             
             {/* Decorative elements behind phone */}
             <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-platform-secondary/20 rounded-full blur-[60px] pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Floating elements - adjusted opacity */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-platform-primary rounded-full filter blur-xl opacity-10 animate-float pointer-events-none z-10" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-platform-secondary rounded-full filter blur-xl opacity-10 animate-float pointer-events-none z-10" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};
