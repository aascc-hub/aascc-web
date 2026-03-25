import React, { useState, useEffect } from 'react';

interface Stat {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface StatsSectionProps {
  stats: Stat[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const animateNumbers = () => {
      stats.forEach((stat, index) => {
        const target = parseInt(stat.number.replace(/[^\d]/g, ''));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 50);
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current);
            return newStats;
          });
        }, 50);
      });
    };
    animateNumbers();
  }, [stats]);

  return (
    <section className="py-8 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center text-white">
                <Icon className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                <div className="text-3xl font-bold mb-2">{animatedStats[index]}{stat.number.includes('+') ? '+' : stat.number.includes('%') ? '%' : ''}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
