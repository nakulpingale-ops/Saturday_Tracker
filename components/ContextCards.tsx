import React from 'react';
import { Info } from 'lucide-react';

interface ContextCardsProps {
    date: Date;
    isSecondSaturday: boolean;
    isFourthSaturday: boolean;
}

const ContextCards: React.FC<ContextCardsProps> = ({ date, isSecondSaturday, isFourthSaturday }) => {
    const isSaturday = date.getDay() === 6;

    // Logic for India Banking Card
    const showIndiaCard = isSecondSaturday || isFourthSaturday;

    // Logic for US Custody Card
    const day = date.getDate();
    const weekNumber = Math.ceil(day / 7);
    const isCustodial = weekNumber === 2 || weekNumber === 4;

    if (!isSaturday) {
        return null;
    }

    return (
        <div className="flex flex-col md:flex-row justify-center gap-4 w-full mt-0 px-1">
            {/* US Custody Card - ALWAYS VISIBLE (Indigo Theme) */}
            <div className="flex items-start gap-2 p-2 bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/30 rounded-[2px] animate-fade-in shadow-sm w-full md:w-[48%]">
                <span className="text-xl shrink-0 leading-none select-none mt-0.5" role="img" aria-label="US Flag">🇺🇸</span>
                <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-indigo-900 dark:text-indigo-100 text-[10px] uppercase tracking-wide">US Co-Parenting</h4>
                        <Info className="w-3 h-3 text-indigo-400 dark:text-indigo-300" />
                    </div>
                    <p className="text-xs text-indigo-900 dark:text-indigo-200 leading-tight font-medium">
                        Standard Possession: Typically a <span className="font-bold">{isCustodial ? 'Custodial Parent' : 'Non-Custodial Parent'} weekend.</span>
                    </p>
                </div>
            </div>

            {/* India Banking Card - CONDITIONAL (Rose Theme) */}
            {showIndiaCard && (
                <div className="flex items-start gap-2 p-2 bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/30 rounded-[2px] animate-fade-in shadow-sm w-full md:w-[48%]">
                    <span className="text-xl shrink-0 leading-none select-none mt-0.5" role="img" aria-label="India Flag">🇮🇳</span>
                    <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-rose-900 dark:text-rose-100 text-[10px] uppercase tracking-wide">India Specific</h4>
                            <Info className="w-3 h-3 text-rose-400 dark:text-rose-500" />
                        </div>
                        <p className="text-xs text-rose-900 dark:text-rose-200 leading-tight font-medium">
                            Banks are <span className="font-bold underline decoration-rose-400/50 underline-offset-2">CLOSED</span> today on account of the {isSecondSaturday ? 'Second' : 'Fourth'} Saturday.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContextCards;
