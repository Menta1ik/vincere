import React from 'react';
import { Upload, DollarSign, Bot, Zap, PieChart, Medal } from 'lucide-react';
import { Card } from '../ui/Card';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Upload size={32} className="text-platform-primary" />,
      title: "Upload your video",
      description: "Choose your category (music, dance, comedy, sports, etc.) and upload your best content."
    },
    {
      icon: <DollarSign size={32} className="text-platform-secondary" />,
      title: "Pay the entry fee",
      description: "Invest just $24.99 to enter the prize pool and compete for real money."
    },
    {
      icon: <Bot size={32} className="text-blue-400" />,
      title: "AI judges your content",
      description: "Our AI analyzes your content anonymously and objectively based on skill and creativity."
    },
    {
      icon: <Zap size={32} className="text-yellow-400" />,
      title: "Get paid instantly",
      description: "Win and get paid immediately: 40% for 1st place, 25% for 2nd, 15% for 3rd."
    }
  ];

  return (
    <section className="py-20 relative bg-platform-dark-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white font-['CarterOne']">How It Works</h2>
          <p className="text-xl text-platform-text text-opacity-80 max-w-3xl mx-auto">
            Vincere is a revolutionary video competition platform where creators and talents compete directly to prove their level and earn real money. We believe your talent shouldn't wait for fan recognition or the whims of social media algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="text-center p-8 hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-platform-dark-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg border border-platform-dark-700">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-platform-text text-opacity-70 leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Prize Pool Logic */}
        <div className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-platform-primary rounded-full filter blur-[120px] opacity-20"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-platform-primary bg-opacity-20 border border-platform-primary border-opacity-30 mb-6">
                <DollarSign size={16} className="text-platform-primary mr-2" />
                <span className="text-sm font-semibold text-platform-primary">Real Cash Prizes</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                The Prize Pool
              </h3>
              <p className="text-lg text-platform-text text-opacity-80 mb-8">
                The prize pool is dynamic and grows with every participant. 
                <br className="hidden md:block" />
                Your skill directly translates to your earnings.
              </p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">$24.99</div>
                  <div className="text-xs text-platform-text text-opacity-60 uppercase tracking-wider">Entry Fee</div>
                </div>
                <div className="h-10 w-px bg-platform-dark-500"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-platform-primary mb-1">Dynamic</div>
                  <div className="text-xs text-platform-text text-opacity-60 uppercase tracking-wider">Total Pool</div>
                </div>
              </div>

              <div className="bg-platform-dark-800 bg-opacity-50 rounded-xl p-6 border border-platform-dark-600">
                <p className="text-sm text-platform-text text-opacity-70 italic">
                  "The entry fee forms the prize pool. We believe in fair rewards for top talent."
                </p>
              </div>
            </div>

            {/* Distribution Visual */}
            <div className="relative">
              <div className="bg-platform-dark-900 bg-opacity-80 rounded-2xl p-8 border border-platform-dark-700 shadow-2xl">
                <h4 className="text-xl font-bold text-white mb-8 flex items-center">
                  <PieChart className="mr-3 text-platform-secondary" size={24} />
                  Prize Distribution
                </h4>
                
                <div className="flex items-end justify-center space-x-2 md:space-x-4 h-64 mb-6">
                  {/* 2nd Place */}
                  <div className="flex-1 flex flex-col items-center justify-end group">
                    <Medal size={32} className="text-gray-300 mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-white mb-1">25%</div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">2nd Place</div>
                    <div className="w-full bg-gradient-to-t from-gray-900 to-gray-800 h-24 rounded-t-lg border-t-4 border-gray-400 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* 1st Place */}
                  <div className="flex-1 flex flex-col items-center justify-end group">
                    <div className="relative">
                      <Medal size={48} className="text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">40%</div>
                    <div className="text-xs font-semibold text-yellow-400 uppercase tracking-wider mb-2">1st Place</div>
                    <div className="w-full bg-gradient-to-t from-yellow-900 to-yellow-800 h-40 rounded-t-lg border-t-4 border-yellow-400 opacity-80 group-hover:opacity-100 transition-opacity shadow-[0_0_30px_rgba(250,204,21,0.2)]"></div>
                  </div>

                  {/* 3rd Place */}
                  <div className="flex-1 flex flex-col items-center justify-end group">
                    <Medal size={28} className="text-orange-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-xl font-bold text-white mb-1">15%</div>
                    <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">3rd Place</div>
                    <div className="w-full bg-gradient-to-t from-orange-900 to-orange-800 h-16 rounded-t-lg border-t-4 border-orange-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-platform-dark-700 text-center">
                  <p className="text-sm text-platform-text text-opacity-60">
                    Remaining pool supports platform development and future events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
