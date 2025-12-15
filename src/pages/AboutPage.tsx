import React from 'react';
import { Layout } from '../components/layout/Layout';

export const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20 container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center text-white font-['CarterOne']">About Vincere</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-platform-dark-800/50 p-8 rounded-2xl border border-platform-dark-700">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-platform-text text-opacity-80 leading-relaxed mb-6">
              Vincere was founded with a simple belief: <span className="text-white font-bold">talent deserves to be rewarded immediately and fairly.</span>
            </p>
            <p className="text-lg text-platform-text text-opacity-80 leading-relaxed">
              We watched creators struggle on traditional social media platforms — spending hours creating content, waiting for algorithm changes, chasing followers. Meanwhile, talented people were never discovered or properly compensated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-platform-dark-800/50 p-8 rounded-2xl border border-platform-dark-700">
              <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
              <ul className="space-y-4 text-platform-text text-opacity-80">
                <li className="flex items-start">
                  <span className="text-platform-primary mr-2">•</span>
                  Your content is judged fairly by advanced AI
                </li>
                <li className="flex items-start">
                  <span className="text-platform-primary mr-2">•</span>
                  You're paid instantly for winning
                </li>
                <li className="flex items-start">
                  <span className="text-platform-primary mr-2">•</span>
                  You compete on a level playing field
                </li>
                <li className="flex items-start">
                  <span className="text-platform-primary mr-2">•</span>
                  Your talent is your only advantage
                </li>
              </ul>
            </div>

            <div className="bg-platform-dark-800/50 p-8 rounded-2xl border border-platform-dark-700">
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <ul className="space-y-4 text-platform-text text-opacity-80">
                <li className="flex items-start">
                  <span className="text-platform-secondary mr-2">•</span>
                  <span className="font-bold text-white mr-2">Fairness:</span> Everyone has an equal chance
                </li>
                <li className="flex items-start">
                  <span className="text-platform-secondary mr-2">•</span>
                  <span className="font-bold text-white mr-2">Transparency:</span> No hidden rules or fees
                </li>
                <li className="flex items-start">
                  <span className="text-platform-secondary mr-2">•</span>
                  <span className="font-bold text-white mr-2">Speed:</span> Quick payouts, quick results
                </li>
                <li className="flex items-start">
                  <span className="text-platform-secondary mr-2">•</span>
                  <span className="font-bold text-white mr-2">Innovation:</span> Always improving the platform
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
