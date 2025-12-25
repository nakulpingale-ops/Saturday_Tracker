import React from 'react';
import { IconSearch } from './Icons';

const FourthSaturdayCTA: React.FC = () => {
  return (
    <section className="w-full max-w-[1000px] mx-auto px-4 mb-24 relative z-10">
      <div className="flex flex-col gap-3">
        <span className="text-gray-900 dark:text-white text-sm font-medium pl-1 opacity-90">Also Available</span>
        <a
          href="#"
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 sm:py-4 px-6 rounded flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20 group"
        >
          <IconSearch />
          <span className="font-medium text-sm sm:text-base">Check Upcoming Fourth Saturdays</span>
        </a>
      </div>
    </section>
  );
};

export default FourthSaturdayCTA;