import React from 'react';

interface StickyFooterProps {
  isDarkMode: boolean;
}

const StickyFooter: React.FC<StickyFooterProps> = ({ isDarkMode }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-50 backdrop-blur-xl border-t transition-colors duration-300
        ${isDarkMode
          ? 'bg-[#0d1117]/80 border-gray-800 text-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)]'
          : 'bg-white/80 border-gray-200 text-gray-900 shadow-lg'
        }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm sm:text-base opacity-90">
            Interested in acquiring this IP/Domain?
          </span>
        </div>
        <button className="whitespace-nowrap bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-6 rounded text-sm transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95 border border-emerald-500/20">
          Inquire Now
        </button>
      </div>
    </div>
  );
};

export default StickyFooter;