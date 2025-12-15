import React from 'react';
import { Button } from '../ui/Button';
import { Users, MessageCircle, Eye, TrendingUp, Trophy } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const features = [
    { icon: <Trophy size={20} />, text: "Place wagers on competition results" },
    { icon: <MessageCircle size={20} />, text: "Send direct messages to creators" },
    { icon: <Eye size={20} />, text: "Watch content highlights" },
    { icon: <TrendingUp size={20} />, text: "Track rankings and stats" },
    { icon: <Users size={20} />, text: "Win together with your favorites" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-platform-dark-900 to-platform-dark-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-white font-['CarterOne']">
              Be Part of the Community
            </h2>
            <p className="text-xl text-platform-text text-opacity-80 mb-12 leading-relaxed">
              On Vincere, it's not just creators who earn. Fans can place wagers on their favorite talents and win extra money. Follow creators, watch exclusive content, and engage with the community in real-time.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-platform-dark-700/50 p-4 rounded-xl border border-platform-dark-600 hover:border-platform-primary/50 transition-colors flex items-center gap-4">
                  <div className="bg-platform-dark-800 w-10 h-10 rounded-lg flex items-center justify-center text-platform-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-white text-base">{feature.text}</h3>
                </div>
              ))}
            </div>

            <Button variant="outline" className="border-platform-secondary text-platform-secondary hover:bg-platform-secondary hover:text-white px-8 py-3 text-lg">
              Join as a Fan
            </Button>
          </div>

          {/* App Image */}
          <div className="lg:w-1/2 flex justify-center items-center relative">
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-platform-secondary/20 to-transparent blur-[100px] rounded-full pointer-events-none"></div>
             <div className="relative w-[300px] md:w-[360px] lg:w-[400px] transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/app-feed.png" 
                  alt="Vincere App Feed" 
                  className="w-full h-auto drop-shadow-2xl"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
