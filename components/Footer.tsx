import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 px-6 bg-white dark:bg-[#0a0514] border-t border-slate-100 dark:border-white/5 relative z-10 transition-colors duration-300">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
        
        {/* Info Section */}
        <div className="mb-8 space-y-4 max-w-2xl text-xs sm:text-sm text-slate-500 dark:text-gray-500 leading-relaxed">
          <p>
            <span className="font-semibold text-slate-700 dark:text-gray-400">About:</span> SaturdayTracker provides instant, algorithmic date verification for banking holidays, specifically tracking 2nd and 4th Saturdays. Calculations are based on the standard Gregorian calendar.
          </p>
          <p>
            <span className="font-semibold text-slate-700 dark:text-gray-400">Disclaimer:</span> While we strive for 100% algorithmic accuracy, please verify crucial dates with your local service providers or specific organizations.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 w-full border-t border-slate-100 dark:border-white/5 text-slate-400 dark:text-gray-600 text-xs tracking-wide">
          <p>© 2025 saturdaytracker.com. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;