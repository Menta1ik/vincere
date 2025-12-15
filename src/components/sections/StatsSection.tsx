import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    { value: "$5M+", label: "Paid to creators" },
    { value: "10K+", label: "Competitions held" },
    { value: "50+", label: "Countries represented" },
    { value: "4.9", label: "Average rating" }
  ];

  return (
    <section className="py-16 bg-platform-dark-900 border-y border-platform-dark-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2 font-['BigShouldersInline'] tracking-wide">
                {stat.value}
              </div>
              <div className="text-platform-text text-opacity-70 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
