import React, { useMemo } from 'react';
import { Info } from 'lucide-react';

interface ContextCardsProps {
    date: Date;
    isSecondSaturday: boolean;
    isFourthSaturday: boolean;
}

const ContextCards: React.FC<ContextCardsProps> = ({ date }) => {
    // 1. Determine Target Date (Today if Sat, else Next Sat)
    const isTodaySaturday = date.getDay() === 6;

    const targetDate = useMemo(() => {
        if (isTodaySaturday) return date;

        const d = new Date(date);
        d.setDate(d.getDate() + 1); // Start from tomorrow

        // Find next Saturday
        while (d.getDay() !== 6) {
            d.setDate(d.getDate() + 1);
        }
        return d;
    }, [date, isTodaySaturday]);

    // 2. Format Target Date for display
    const targetDateString = new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short'
    }).format(targetDate);

    // 3. Calculate Status for Target Date
    const day = targetDate.getDate();
    const weekNumber = Math.ceil(day / 7);

    // US Logic
    const isCustodial = weekNumber === 2 || weekNumber === 4; // 2nd & 4th
    const usStatusText = isCustodial ? 'Custodial Parent' : 'Non-Custodial Parent';

    // India Logic
    const isSecondSat = weekNumber === 2;
    const isFourthSat = weekNumber === 4;
    const isIndiaHoliday = isSecondSat || isFourthSat;

    return (
        <div className="flex flex-col md:flex-row justify-center gap-4 w-full mt-0 px-1">
            {/* US Custody Card - ALWAYS VISIBLE */}
            <div className="flex items-start gap-2 p-2 bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/30 rounded-[2px] animate-fade-in shadow-sm w-full md:w-[48%]">
                <span className="text-xl shrink-0 leading-none select-none mt-0.5" role="img" aria-label="US Flag">🇺🇸</span>
                <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-indigo-900 dark:text-indigo-100 text-[10px] uppercase tracking-wide">US Co-Parenting</h4>
                        <Info className="w-3 h-3 text-indigo-400 dark:text-indigo-300" />
                    </div>
                    <p className="text-xs text-indigo-900 dark:text-indigo-200 leading-tight font-medium">
                        {isTodaySaturday ? (
                            <>Standard Possession: Typically a <span className="font-bold">{usStatusText} weekend.</span></>
                        ) : (
                            <>Upcoming Sat ({targetDateString}): Standard Possession: <span className="font-bold">{usStatusText}.</span></>
                        )}
                    </p>
                </div>
            </div>

            {/* India Banking Card - ALWAYS VISIBLE (Dynamic Content) */}
            {/* Logic: 
                - If Today is Saturday: Show ONLY if Holiday (Closed). Hide otherwise.
                - If Today is Weekday: Show ALWAYS. (Closed or Open).
            */}
            {(isTodaySaturday ? isIndiaHoliday : true) && (
                <div className={`flex items-start gap-2 p-2 border rounded-[2px] animate-fade-in shadow-sm w-full md:w-[48%] ${isIndiaHoliday
                    ? 'bg-rose-500/5 dark:bg-rose-500/10 border-rose-500/30'
                    : 'bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/30'
                    }`}>
                    <span className="text-xl shrink-0 leading-none select-none mt-0.5" role="img" aria-label="India Flag">🇮🇳</span>
                    <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-1">
                            <h4 className={`font-bold text-[10px] uppercase tracking-wide ${isIndiaHoliday ? 'text-rose-900 dark:text-rose-100' : 'text-emerald-900 dark:text-emerald-100'
                                }`}>India Specific</h4>
                            <Info className={`w-3 h-3 ${isIndiaHoliday ? 'text-rose-400 dark:text-rose-500' : 'text-emerald-400 dark:text-emerald-500'
                                }`} />
                        </div>

                        <p className={`text-xs leading-tight font-medium ${isIndiaHoliday ? 'text-rose-900 dark:text-rose-200' : 'text-emerald-900 dark:text-emerald-200'
                            }`}>
                            {isTodaySaturday ? (
                                <>Banks are <span className="font-bold underline decoration-rose-400/50 underline-offset-2">CLOSED</span> today on account of the {isSecondSat ? 'Second' : 'Fourth'} Saturday.</>
                            ) : (
                                <>
                                    Banks will be <span className={`font-bold ${isIndiaHoliday ? 'underline decoration-rose-400/50 underline-offset-2' : ''}`}>
                                        {isIndiaHoliday ? 'CLOSED' : 'OPEN'}
                                    </span> on the upcoming Saturday ({targetDateString}).
                                </>
                            )}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContextCards;
