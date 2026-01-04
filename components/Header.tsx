
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getNextSaturdayInfo } from '../lib/dateUtils';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for header background/blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSat = getNextSaturdayInfo();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
        ? 'bg-[#0f0720]/80 backdrop-blur-md border-white/5 shadow-lg'
        : 'bg-[#0f0720] border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* LEFT: Branding */}
          <Link to="/" className="flex flex-col group shrink-0" aria-label="SaturdayTracker Home">
            <div className="flex items-baseline gap-1">
              <span className="text-xl md:text-2xl font-black text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                SATURDAY<span className="text-indigo-500">TRACKER</span>
              </span>
            </div>
            <span className="text-[10px] tracking-[0.2em] text-slate-400 group-hover:text-indigo-300 transition-colors">
              a <span className="font-bold text-[#7d3cff]">HOLBANK</span> product
            </span>
          </Link>

          {/* RIGHT: Cross-Promo CTA & Ticker */}
          <div className="flex items-center gap-2 sm:gap-4">

            {/* Cross-Promo CTA */}
            <a
              href="https://bankholidaycalendar.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open BankHolidayCalendar.com"
              className="hidden sm:flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
            >
              <span className="text-[12px] font-semibold text-indigo-300">
                🇮🇳 Bank Holiday Calendar
              </span>
            </a>

            {/* Mobile Icon-only version of CTA (if space is very tight, but 'xs:flex' handles most. 
                For very small screens we might want just an icon, but requested copy 'Bank Holiday Calendar' fits 
                on most mobile headers if we drop the 'Upcoming Saturday' label text or reduce gaps) 
            */}
            <a
              href="https://bankholidaycalendar.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open BankHolidayCalendar.com"
              className="flex sm:hidden items-center justify-center w-[32px] h-[32px] rounded-full bg-[#7d3cff]/20 border border-[#7d3cff]/40"
            >
              <span className="text-sm">🏦</span>
            </a>

            {/* Ticker */}
            <div className="flex flex-col items-end text-right border-l border-white/10 pl-2 sm:pl-4">
              <span className="hidden sm:block text-[10px] text-indigo-400 font-bold uppercase tracking-wider">
                Upcoming Saturday
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-bold text-white tabular-nums">
                  {nextSat.formattedDate}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-medium text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                  {nextSat.ordinal}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;