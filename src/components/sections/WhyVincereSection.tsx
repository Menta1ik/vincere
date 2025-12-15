import React from 'react';
import { CheckCircle } from 'lucide-react';

export const WhyVincereSection: React.FC = () => {
  const advantages = [
    {
      title: "Direct Monetization Without Waiting",
      description: "Social media makes you wait for followers. Vincere pays immediately for results. Win a competition — get paid to your account."
    },
    {
      title: "Fair AI Judging",
      description: "No bias, no favoritism. Our AI algorithm analyzes your content anonymously and objectively. The best content always wins."
    },
    {
      title: "True Competition, Not Popularity",
      description: "Your follower count doesn't matter. Only the quality of your content matters. A newcomer can beat a veteran."
    },
    {
      title: "Real Money, Real Timeline",
      description: "Weekly competitions (Mon-Fri registration, Sat-Sun results). Win on Saturday, withdraw on Monday."
    },
    {
      title: "Global Community of Talents",
      description: "Compete with the best from around the world. Find your fans. Build your community directly on the platform."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-platform-primary/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* App Image (Left) */}
          <div className="lg:w-1/2 relative flex justify-center items-center order-2 lg:order-1">
             <div className="relative w-[320px] md:w-[380px] lg:w-[420px]">
                <div className="absolute inset-0 bg-platform-primary/20 blur-[100px] rounded-full"></div>
                <img 
                  src="/images/app-tournaments.png" 
                  alt="Vincere App Tournaments" 
                  className="relative z-10 w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
             </div>
          </div>

          {/* Text Content (Right) */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-['CarterOne']">
              Why Choose Vincere?
            </h2>
            <div className="space-y-8">
              {advantages.map((adv, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="text-platform-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{adv.title}</h3>
                    <p className="text-platform-text text-opacity-80 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
