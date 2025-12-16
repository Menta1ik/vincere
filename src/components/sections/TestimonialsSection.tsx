import React from 'react';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "I didn't expect results so quickly. On other platforms, it takes forever to see any income. On Vincere, I won three times in one month!",
      author: "Sarah M.",
      role: "Dancer",
      countryCode: "us",
      countryName: "USA",
      highlight: "I earned $5,000 in my first month"
    },
    {
      text: "The AI judging is incredible. I compete based on my actual skill, not my follower count. That's exactly what I needed.",
      author: "Marcus T.",
      role: "Musician",
      countryCode: "gb",
      countryName: "UK",
      highlight: "Finally, a fair platform for real talents"
    },
    {
      text: "$24.99 per competition? That's nothing compared to the prize potential. Already won twice!",
      author: "Alex K.",
      role: "Comedian",
      countryCode: "ca",
      countryName: "Canada",
      highlight: "Best investment in my career"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white font-['CarterOne']">What Creators Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="platform-card rounded-xl p-8 relative mt-6 h-full flex flex-col">
              <div className="absolute -top-6 left-8 bg-platform-secondary w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <Quote size={24} className="text-white fill-current" />
              </div>
              
              <div className="pt-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-4">"{t.highlight}"</h4>
                <p className="text-platform-text text-opacity-80 mb-6 italic flex-grow">
                  "{t.text}"
                </p>
                <div className="border-t border-platform-dark-700 pt-4 mt-auto">
                  <div className="font-bold text-white mb-1 flex items-center gap-2">
                    {t.author}
                    <img 
                      src={`https://flagcdn.com/w40/${t.countryCode}.png`}
                      srcSet={`https://flagcdn.com/w80/${t.countryCode}.png 2x`}
                      alt={t.countryName}
                      title={t.countryName}
                      className="w-5 h-5 rounded-full object-cover border border-white/20"
                    />
                  </div>
                  <div className="text-sm text-platform-primary">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
