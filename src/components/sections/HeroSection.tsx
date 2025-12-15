import React from 'react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
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

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main heading with animation */}
        <div className="mb-8 animate-float">
          <h1 className="text-5xl md:text-7xl mb-6 gradient-text font-['CarterOne']">Compete. Create. Earn.</h1>
        </div>

        {/* Subheading */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-platform-text text-opacity-80 mb-8 leading-relaxed">
            A tournament platform for video creators across talents — join competitions and earn real money with your content.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="primary" size="lg" className="group">
            Join a tournament
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-platform-text mb-2">150+</div>
            <div className="text-platform-text text-opacity-70">Active tournaments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-platform-text mb-2">10K+</div>
            <div className="text-platform-text text-opacity-70">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-platform-text mb-2">50K+</div>
            <div className="text-platform-text text-opacity-70">Evaluations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-platform-text mb-2">5K+</div>
            <div className="text-platform-text text-opacity-70">Videos</div>
          </div>
        </div>
      </div>

      {/* Floating elements - adjusted opacity */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-platform-primary rounded-full filter blur-xl opacity-10 animate-float pointer-events-none z-10" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-platform-secondary rounded-full filter blur-xl opacity-10 animate-float pointer-events-none z-10" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};
