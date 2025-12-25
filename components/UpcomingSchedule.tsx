import React, { useMemo, useState } from 'react';
import { getUpcomingMonthsData } from '../utils/dateUtils';
import { CalendarPlus, Share2, Check, ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';

interface UpcomingScheduleProps {
  isDarkMode: boolean;
}

const UpcomingSchedule: React.FC<UpcomingScheduleProps> = ({ isDarkMode }) => {
  const [offset, setOffset] = useState(0);
  const [copiedMap, setCopiedMap] = useState<Record<string, boolean>>({});

  // Fetch data for 2 months (1 row)
  const monthsData = useMemo(() => getUpcomingMonthsData(2, offset), [offset]);

  // Current date for comparison (midnight to midnight)
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const handleAddToCalendar = (year: number, monthIndex: number, day: number) => {
    const dateStr = `${year}${String(monthIndex + 1).padStart(2, '0')}${String(day).padStart(2, '0')}`;
    const title = encodeURIComponent("Bank Holiday (SaturdayTracker)");
    const details = encodeURIComponent("Verified 2nd/4th Saturday Bank Holiday. Check details at https://saturdaytracker.com");
    const dates = `${dateStr}/${dateStr}`;

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}`;
    window.open(url, '_blank');
  };

  const handleShare = async (monthName: string, year: number, secondSat: number, fourthSat: number) => {
    const shareText = `Planning a long weekend? ${monthName} ${year} has Bank Holidays on the ${secondSat}${getOrdinal(secondSat)} and ${fourthSat}${getOrdinal(fourthSat)}! Check details at SaturdayTracker.com`;
    const shareData = {
      title: 'SaturdayTracker Bank Holidays',
      text: shareText,
      url: 'https://saturdaytracker.com',
    };

    const key = `${monthName}-${year}`;

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or error, ignore
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText} https://saturdaytracker.com`);
        setCopiedMap(prev => ({ ...prev, [key]: true }));
        setTimeout(() => {
          setCopiedMap(prev => ({ ...prev, [key]: false }));
        }, 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    }
  };

  const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  return (
    <section className="w-full max-w-[1000px] mx-auto px-4 mb-[76px] relative z-10">
      {/* Header Section */}
      {/* CHANGED: mb-6 (24px) -> mb-1 (4px) to reduce padding by 20px */}
      {/* Header Section */}
      <div className="mb-3 px-8">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 transition-colors duration-300 flex items-center">
          <span className="bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 p-2 rounded mr-3">
            <CalendarDays className="w-5 h-5" />
          </span>
          Upcoming Second & Fourth Saturdays
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-0">
        {monthsData.map((month, idx) => {
          const secondSatDate = month.saturdays[1];
          const fourthSatDate = month.saturdays[3];
          const cardKey = `${month.monthName}-${month.year}`;

          return (
            <div
              key={cardKey}
              className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded p-6 sm:p-8 transition-all duration-300 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-lg relative"
            >
              <div className="mb-4 flex justify-between items-center">
                <span className="text-xl font-bold text-slate-800 dark:text-gray-200 tracking-wide">
                  {month.monthName} <span className="text-slate-400 dark:text-gray-500 ml-1">{month.year}</span>
                </span>
              </div>

              {/* Calendar Strip */}
              <div className="flex justify-start gap-3 sm:gap-5 items-start">
                {month.saturdays.map((date, satIdx) => {
                  const isSecondSaturday = satIdx === 1;
                  const isFourthSaturday = satIdx === 3;
                  const ordinal = ['1ST', '2ND', '3RD', '4TH', '5TH'][satIdx];

                  const saturdayDate = new Date(month.year, month.monthIndex, date);
                  saturdayDate.setHours(0, 0, 0, 0);
                  const isPast = saturdayDate < today;

                  let highlightClass = 'bg-transparent text-slate-600 dark:text-gray-600 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-gray-200';
                  let shadowClass = '';

                  if (isSecondSaturday || isFourthSaturday) {
                    highlightClass = 'bg-emerald-500 dark:bg-emerald-600 text-white hover:bg-emerald-400 dark:hover:bg-emerald-500';
                    shadowClass = 'shadow-lg shadow-emerald-500/30 dark:shadow-emerald-900/50 hover:shadow-emerald-500/50 dark:hover:shadow-emerald-900/70';
                  }

                  const isActive = isSecondSaturday || isFourthSaturday;
                  const opacityClass = isPast ? 'opacity-25' : '';

                  return (
                    <div key={satIdx} className={`flex flex-col items-center gap-2 group cursor-default ${opacityClass}`}>
                      <div className={`
                        w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded text-sm font-bold 
                        transition-all duration-300 ease-out transform ${!isPast && 'group-hover:scale-110'}
                        ${highlightClass} ${shadowClass}
                      `}>
                        {date}
                      </div>

                      <span className={`text-[10px] sm:text-xs font-bold tracking-wider transition-colors duration-300 ${isActive ? 'text-slate-900 dark:text-gray-300' : 'text-slate-400 dark:text-gray-700 group-hover:text-slate-600 dark:group-hover:text-gray-500'}`}>
                        {ordinal}
                      </span>
                    </div>
                  );
                })}

                {/* Utility Icons */}
                <div className="flex flex-col items-center gap-2 ml-auto">
                  <div className="w-10 h-10 sm:w-12 sm:h-12"></div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAddToCalendar(month.year, month.monthIndex, secondSatDate)}
                      className="text-slate-400 hover:text-emerald-500 transition-colors duration-200"
                      aria-label="Add 2nd Saturday to Google Calendar"
                      title="Add 2nd Saturday Bank Holiday to Calendar"
                    >
                      <CalendarPlus className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleShare(month.monthName, month.year, secondSatDate, fourthSatDate)}
                      className="text-slate-400 hover:text-emerald-500 transition-colors duration-200"
                      aria-label="Share these holidays"
                      title="Share these dates"
                    >
                      {copiedMap[cardKey] ? (
                        <Check className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <Share2 className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-end gap-4 pr-2 mt-2">
        <button
          onClick={() => setOffset(prev => prev - 2)}
          className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors py-2 px-3 rounded hover:bg-slate-100 dark:hover:bg-white/5"
          aria-label="Previous 2 months"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </button>
        <button
          onClick={() => setOffset(prev => prev + 2)}
          className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors py-2 px-3 rounded hover:bg-slate-100 dark:hover:bg-white/5"
          aria-label="Next 2 months"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </section>
  );
};

export default UpcomingSchedule;