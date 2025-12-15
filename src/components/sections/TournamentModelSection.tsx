import React from 'react';
import { Users, Video, Trophy, DollarSign, PieChart, Medal } from 'lucide-react';

export const TournamentModelSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            How it Works
          </h2>
          <p className="text-xl text-platform-text text-opacity-80 max-w-3xl mx-auto">
            A fair ecosystem for creators and viewers
          </p>
        </div>

        {/* Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Viewers Card */}
          <div className="glass-effect rounded-2xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-platform-dark-700 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-platform-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Viewers</h3>
              <p className="text-platform-text text-opacity-80 mb-6">
                Discover amazing talent, watch exclusive content, and support your favorite creators. Enjoy the show without any limits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-platform-text text-opacity-70">
                  <span className="w-2 h-2 bg-platform-secondary rounded-full mr-2"></span>
                  Watch for free
                </li>
                <li className="flex items-center text-sm text-platform-text text-opacity-70">
                  <span className="w-2 h-2 bg-platform-secondary rounded-full mr-2"></span>
                  Discover new trends
                </li>
              </ul>
            </div>
          </div>

          {/* Creators Card */}
          <div className="glass-effect rounded-2xl p-8 relative overflow-hidden border border-platform-primary border-opacity-30 group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Video size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-platform-primary to-platform-secondary rounded-xl flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Creators</h3>
              <p className="text-platform-text text-opacity-80 mb-6">
                Showcase your talent to the world. Only creators can participate in tournaments and compete for the cash prize pool.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-platform-text text-opacity-70">
                  <span className="w-2 h-2 bg-platform-primary rounded-full mr-2"></span>
                  Exclusive tournament access
                </li>
                <li className="flex items-center text-sm text-platform-text text-opacity-70">
                  <span className="w-2 h-2 bg-platform-primary rounded-full mr-2"></span>
                  Win real money
                </li>
              </ul>
            </div>
          </div>
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
