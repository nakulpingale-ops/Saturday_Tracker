import React, { useMemo } from 'react';
import {
  checkIsSecondSaturday,
  checkIsFourthSaturday
} from '../utils/dateUtils';
import ContextCards from './ContextCards';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {

  // new Date() automatically uses the system's local date and time
  const today = new Date();

  const isSecondSaturday = useMemo(() => checkIsSecondSaturday(today), [today]);
  const isFourthSaturday = useMemo(() => checkIsFourthSaturday(today), [today]);

  // Format: 13 Dec 2025
  const displayDate = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(today);

  // --- NEW LOGIC: Calculate the immediate next Saturday (1st, 2nd, 3rd, 4th, or 5th) ---
  const getNextSaturday = () => {
    let d = new Date(today);
    d.setDate(d.getDate() + 1); // Start checking from tomorrow

    // Look ahead 7 days to find the next Saturday
    for (let i = 0; i < 7; i++) {
      if (d.getDay() === 6) { // Found a Saturday
        const currentDate = d.getDate();
        const currentWeek = Math.ceil(currentDate / 7);
        let type = '';
        switch (currentWeek) {
          case 1: type = 'First'; break;
          case 2: type = 'Second'; break;
          case 3: type = 'Third'; break;
          case 4: type = 'Fourth'; break;
          default: type = 'Fifth'; break;
        }
        return {
          date: new Date(d),
          type
        };
      }
      d.setDate(d.getDate() + 1);
    }
    return null;
  };

  const nextSatObj = getNextSaturday();

  // Format Next Date: "03 Jan 2026"
  const upcomingDateString = nextSatObj
    ? new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(nextSatObj.date)
    : "";

  // ------------------------------------------------------------------

  // Logic Variables for Styling
  let statusColorClass = '';
  let statusBorderClass = '';
  let indicatorColorClass = '';
  let shadowClass = '';
  let message = '';

  if (isSecondSaturday) {
    // 1. Today is Second Saturday - GREEN
    statusColorClass = 'bg-gradient-to-r from-emerald-50 to-white dark:from-[#0f291e] dark:to-[#0f291e] text-emerald-900 dark:text-white';
    statusBorderClass = 'border-emerald-200 dark:border-emerald-400';
    indicatorColorClass = 'bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]';
    shadowClass = 'shadow-glow-green dark:shadow-none';
    message = `YES. TODAY, ${displayDate} IS A SECOND SATURDAY`;

  } else if (isFourthSaturday) {
    // 2. Today is Fourth Saturday - GREEN
    statusColorClass = 'bg-gradient-to-r from-emerald-50 to-white dark:from-[#0f291e] dark:to-[#0f291e] text-emerald-900 dark:text-white';
    statusBorderClass = 'border-emerald-200 dark:border-emerald-400';
    indicatorColorClass = 'bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]';
    shadowClass = 'shadow-glow-green dark:shadow-none';
    message = `YES. TODAY, ${displayDate} IS A FOURTH SATURDAY`;

  } else {
    // 3. Other days (Not 2nd, Not 4th) - RED
    statusColorClass = 'bg-gradient-to-r from-red-50 to-white dark:from-[#2a1215] dark:to-[#2a1215] text-red-900 dark:text-white';
    statusBorderClass = 'border-red-200 dark:border-red-900';
    indicatorColorClass = 'bg-red-500';
    shadowClass = 'shadow-glow-red dark:shadow-none';

    // Check if it is a Saturday
    if (today.getDay() === 6) {
      // It IS a Saturday, but not 2nd or 4th. 
      const day = today.getDate();
      const weekNumber = Math.ceil(day / 7);
      const ordinal = weekNumber === 1 ? "1ST" : weekNumber === 3 ? "3RD" : "5TH";

      message = `NO. TODAY, ${displayDate} IS THE ${ordinal} SATURDAY`;
    } else {
      // Not a Saturday (Sun-Fri)
      const currentWeekday = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(today).toUpperCase();
      message = `NO. TODAY, ${displayDate} IS A ${currentWeekday}`;
    }
  }

  return (
    <section className="flex flex-col items-center justify-start pt-0 sm:pt-2 px-4 w-full max-w-[1000px] mx-auto text-center relative z-10">

      {/* Single Line Header
      */}
      <h1 className="w-full max-w-[970px] mx-auto text-center font-black tracking-tight uppercase leading-[0.9] mb-1
                     text-[7.6vw] lg:text-[76px]
                     bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 dark:from-[#b49bff] dark:to-white
                     transition-all duration-300 drop-shadow-sm">
        <span className="block">Is today a Second</span>
        <span className="block">or Fourth Saturday?</span>
      </h1>

      {/* Status Bar */}
      <div className={`
        w-full max-w-[1000px] py-5 px-6 rounded
        flex flex-row items-center justify-start md:justify-center gap-4
        border transition-all duration-300 mb-[14px] backdrop-blur-sm
        ${statusColorClass} ${statusBorderClass} ${shadowClass}
      `}>
        <div className={`w-3 h-3 rounded-full ${indicatorColorClass} animate-pulse shrink-0`}></div>
        <span className="text-sm sm:text-lg font-bold tracking-wide text-left md:text-center leading-tight">
          {(() => {
            if (isSecondSaturday) {
              return (
                <>
                  Yes. Today, {displayDate} is a <span className="block md:inline">Second Saturday</span>
                </>
              );
            } else if (isFourthSaturday) {
              return (
                <>
                  Yes. Today, {displayDate} is a <span className="block md:inline">Fourth Saturday</span>
                </>
              );
            } else {
              if (today.getDay() === 6) {
                const day = today.getDate();
                const weekNumber = Math.ceil(day / 7);
                const ordinal = weekNumber === 1 ? "1st" : weekNumber === 3 ? "3rd" : "5th";
                return (
                  <>
                    No. Today, {displayDate} is the <span className="block md:inline">{ordinal} Saturday</span>
                  </>
                );
              } else {
                const currentWeekday = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(today);
                return (
                  <>
                    No. Today, {displayDate} is a <span className="block md:inline">{currentWeekday}</span>
                  </>
                );
              }
            }
          })()}
        </span>
      </div>

      {/* Context Cards - Real world implications */}
      <ContextCards
        date={today}
        isSecondSaturday={isSecondSaturday}
        isFourthSaturday={isFourthSaturday}
      />

      {/* Upcoming Feature - Note removed, Logic updated */}
      <div className="flex flex-col items-center justify-center mb-8 mt-4 animate-fade-in font-sans gap-[3px] text-center">
        <div className="text-slate-500 dark:text-gray-400 text-sm font-normal">
          The upcoming Saturday, <span className="text-slate-900 dark:text-white font-medium">{upcomingDateString}</span>, <span className="block sm:inline">is a <span className="text-slate-900 dark:text-white font-medium">{nextSatObj?.type} Saturday</span>.</span>
        </div>
      </div>

      {/* Ad Placeholder - Desktop */}
      <div className="hidden lg:flex w-[970px] h-[250px] bg-white dark:bg-[#130d21] border border-slate-100 dark:border-white/5 rounded-lg flex-col items-center justify-center text-slate-400 dark:text-gray-600 mb-[60px] transition-colors duration-300 shadow-sm dark:shadow-none backdrop-blur-sm">
        <span className="text-sm tracking-widest font-medium uppercase">Advertisement</span>
      </div>

      {/* Ad Placeholder - Mobile/Tablet */}
      <div className="flex lg:hidden w-[300px] h-[250px] bg-white dark:bg-[#130d21] border border-slate-100 dark:border-white/5 rounded-lg flex-col items-center justify-center text-slate-400 dark:text-gray-600 mb-[60px] transition-colors duration-300 shadow-sm dark:shadow-none backdrop-blur-sm">
        <span className="text-sm tracking-widest font-medium uppercase">Advertisement</span>
      </div>

    </section>
  );
};

export default Hero;