import React from 'react';
import { Layout } from '../components/layout/Layout';

export const RulesPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20 container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center text-white font-['CarterOne']">The Rules of the Game</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-platform-dark-800/50 p-8 rounded-2xl border border-platform-dark-700">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-platform-dark-600 pb-4">Video Requirements</h2>
            <ul className="space-y-3 text-lg text-platform-text text-opacity-80">
              <li className="flex items-center"><span className="w-2 h-2 bg-platform-primary rounded-full mr-3"></span>Maximum 3 minutes</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-platform-primary rounded-full mr-3"></span>Original content (not stolen or borrowed)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-platform-primary rounded-full mr-3"></span>No watermarks from other platforms</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-platform-primary rounded-full mr-3"></span>High quality (1080p minimum recommended)</li>
            </ul>
          </div>

          <div className="bg-platform-dark-800/50 p-8 rounded-2xl border border-platform-dark-700">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-platform-dark-600 pb-4">Competition Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-platform-dark-900 p-4 rounded-lg">
                <span className="block text-platform-secondary font-bold mb-1">Monday-Friday</span>
                <span className="text-white">Open registration in categories</span>
              </div>
              <div className="bg-platform-dark-900 p-4 rounded-lg">
                <span className="block text-platform-secondary font-bold mb-1">Saturday</span>
                <span className="text-white">AI judging and winner determination</span>
              </div>
              <div className="bg-platform-dark-900 p-4 rounded-lg">
                <span className="block text-platform-secondary font-bold mb-1">Sunday</span>
                <span className="text-white">Results published</span>
              </div>
              <div className="bg-platform-dark-900 p-4 rounded-lg">
                <span className="block text-platform-secondary font-bold mb-1">Monday</span>
                <span className="text-white">Prize payouts (40%, 25%, 15%)</span>
              </div>
            </div>
          </div>

          <div className="bg-platform-dark-800/50 p-8 rounded-2xl border border-platform-dark-700">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-platform-dark-600 pb-4">Financial Terms</h2>
            <ul className="space-y-3 text-lg text-platform-text text-opacity-80">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Entry fee: $24.99 USD per competition</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Platform takes 20% of each entry fee</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Fan wagers (if enabled): Up to 90% RTP to players</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Payouts via Stripe, PayPal, or local payment methods</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
