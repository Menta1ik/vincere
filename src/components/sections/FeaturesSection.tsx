import React from 'react';
import { Card } from '../ui/Card';
import { features } from '../../utils/constants';
import { Brain, Video, Trophy, UserPlus, BarChart, Shield } from 'lucide-react';

const iconMap = {
  brain: Brain,
  video: Video,
  trophy: Trophy,
  'user-plus': UserPlus,
  'bar-chart': BarChart,
  shield: Shield,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Earn with your video talent
          </h2>
          <p className="text-xl text-platform-text text-opacity-80 max-w-3xl mx-auto">
            Join creator tournaments across dance, music, sports, gaming and more. Fair AI judging, transparent scoring and real cash prizes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <Card
                key={feature.id}
                title={feature.title}
                description={feature.description}
                className="h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-platform-primary to-platform-secondary rounded-xl flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-20 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              Why creators choose Vincere
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-platform-text mb-3">💰 Cash prizes</h4>
                <p className="text-platform-text text-opacity-80">
                  Compete in verified tournaments and win real money with transparent payouts
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-platform-text mb-3">🤖 Fair AI judging</h4>
                <p className="text-platform-text text-opacity-80">
                  Objective scoring powered by advanced machine learning and anti-bias safeguards
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-platform-text mb-3">📊 Creator analytics</h4>
                <p className="text-platform-text text-opacity-80">
                  Insights into audience engagement, performance and growth across tournaments
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-platform-text mb-3">🔒 Safety & anti‑cheat</h4>
                <p className="text-platform-text text-opacity-80">
                  Content protection, moderation and fraud prevention to keep competitions fair
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
