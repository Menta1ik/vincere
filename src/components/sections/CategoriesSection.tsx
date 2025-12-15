import React from 'react';
import { Music, Activity, Smile, Dumbbell, Palette, Video } from 'lucide-react';
import { Card } from '../ui/Card';

export const CategoriesSection: React.FC = () => {
  const categories = [
    {
      icon: <Music size={40} className="text-pink-500" />,
      title: "Vocals & Music",
      description: "Best singer, best rapper, best instrumentalist — if you create music, prove you're the best."
    },
    {
      icon: <Activity size={40} className="text-purple-500" />,
      title: "Dance & Movement",
      description: "Hip-hop, afrobeat, ballet, freestyle — showcase your movement skills and win."
    },
    {
      icon: <Smile size={40} className="text-yellow-500" />,
      title: "Comedy & Entertainment",
      description: "Are you funny? Standup, sketches, parodies — make people laugh and earn from your humor."
    },
    {
      icon: <Dumbbell size={40} className="text-blue-500" />,
      title: "Sports & Fitness",
      description: "Tricks, workouts, jumps, acrobatics — turn your physical power into money."
    },
    {
      icon: <Palette size={40} className="text-green-500" />,
      title: "Art & Craft",
      description: "Drawing, crafts, design — show your creativity and get rewarded."
    },
    {
      icon: <Video size={40} className="text-red-500" />,
      title: "Content & Influence",
      description: "Original ideas, creative concepts, viral moments — your unique style deserves to be valued."
    }
  ];

  return (
    <section className="py-20 bg-platform-dark-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white font-['CarterOne']">Compete in Your Category</h2>
          <p className="text-xl text-platform-text text-opacity-80 max-w-2xl mx-auto">
            There's a place for every talent on Vincere. From classical arts to modern trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="p-8 hover:bg-platform-dark-700/50 transition-colors border-l-4 border-l-transparent hover:border-l-platform-primary group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
              <p className="text-platform-text text-opacity-70">
                {category.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
