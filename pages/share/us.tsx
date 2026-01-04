import React, { useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Copy, Check } from 'lucide-react';

// Helper to get Saturday info for a specific date
const getSaturdayInfo = (dateStr: string) => {
    const d = new Date(dateStr + 'T12:00:00');
    const dayOfMonth = d.getDate();
    const weekNumber = Math.ceil(dayOfMonth / 7);
    const ordinal = weekNumber === 1 ? '1ST' : weekNumber === 2 ? '2ND' : weekNumber === 3 ? '3RD' : weekNumber === 4 ? '4TH' : '5TH';
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(d).toUpperCase();

    return {
        date: d,
        weekNumber,
        ordinal,
        monthName,
        formattedDate: new Intl.DateTimeFormat('en-GB', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(d)
    };
};

const getScheduleLabel = (schedule: string) => {
    switch (schedule) {
        case 'second-fourth': return 'Second and Fourth weekends';
        case 'first-third-fifth': return 'First, Third and Fifth weekends';
        case 'alternating': return 'Alternating weekends (every other weekend)';
        case 'custom': return 'Custom schedule';
        case '2nd-4th': return 'Second and Fourth weekends'; // legacy fallback
        case '1st-3rd-5th': return 'First, Third and Fifth weekends'; // legacy fallback
        default: return schedule;
    }
};

// Determine if it's "MY" weekend
const isMyWeekend = (weekNumber: number, schedule: string, thisWeekendMine: boolean) => {
    let myWeeks: number[] = [];
    switch (schedule) {
        case 'second-fourth':
        case '2nd-4th':
            myWeeks = [2, 4];
            break;
        case 'first-third-fifth':
        case '1st-3rd-5th':
            myWeeks = [1, 3, 5];
            break;
        case 'alternating':
            // For alternating on the share page, we use the passed anchor state
            // If the user says "This (coming) weekend is mine", then the shared date (which IS the coming weekend)
            // should be interpreted as mine if the params match.
            // Actually, the share link is generated for a specific DATE.
            // If the user said "This weekend is mine" in the UI, we pass &thisWeekendMine=true.
            // So if `thisWeekendMine` is true, then YES, it is mine.
            // Logic on Share Page: The shared date IS the date being checked.
            // So we just return the boolean value passed in the URL.
            return thisWeekendMine;
        case 'custom':
            return true; // Assume yes for custom sharing context if shared as "Mine"
        default:
            return false;
    }
    return myWeeks.includes(weekNumber);
};

const ShareUS: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [copied, setCopied] = React.useState(false);

    const dateStr = searchParams.get('date') || new Date().toISOString().split('T')[0];
    const schedule = searchParams.get('schedule') || 'second-fourth';
    const weekendStart = searchParams.get('weekendStart') || 'friday';
    // For alternating, we might receive thisWeekendMine=true/false
    const thisWeekendMineParam = searchParams.get('thisWeekendMine');
    const thisWeekendMine = thisWeekendMineParam === 'true';

    const satInfo = useMemo(() => getSaturdayInfo(dateStr), [dateStr]);
    const isMine = useMemo(() => isMyWeekend(satInfo.weekNumber, schedule, thisWeekendMine), [satInfo.weekNumber, schedule, thisWeekendMine]);
    const scheduleLabel = getScheduleLabel(schedule);

    // Set document title and meta
    useEffect(() => {
        const status = isMine ? 'This weekend is MINE' : 'This weekend is NOT MINE';
        document.title = `${status} | ${satInfo.formattedDate} | SaturdayTracker`;

        // Update OG tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogTitle) ogTitle.setAttribute('content', status);
        if (ogDesc) ogDesc.setAttribute('content', `${satInfo.formattedDate} - My parenting schedule: ${scheduleLabel}`);
    }, [satInfo, isMine, scheduleLabel]);

    const handleCopy = async () => {
        const shareUrl = window.location.href;
        let shareText = '';
        if (isMine) {
            shareText = `saturdaytracker.com (a HOLBANK product): ${satInfo.formattedDate} — This weekend is MINE (my parenting schedule: ${scheduleLabel}). Details: ${shareUrl}`;
        } else {
            shareText = `saturdaytracker.com (a HOLBANK product): ${satInfo.formattedDate} — This weekend is NOT mine (my parenting schedule: ${scheduleLabel}). Details: ${shareUrl}`;
        }

        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0a0514] flex flex-col items-center justify-center p-4">
            {/* Canonical */}
            <link rel="canonical" href={`https://saturdaytracker.com/share/us?date=${dateStr}&schedule=${schedule}&weekendStart=${weekendStart}${thisWeekendMineParam ? `&thisWeekendMine=${thisWeekendMineParam}` : ''}`} />

            <div className="w-full max-w-md">
                {/* Back Link */}
                <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline mb-6 text-sm">
                    <ArrowLeft className="w-4 h-4" />
                    Back to SaturdayTracker
                </Link>

                {/* Card */}
                <div className="bg-white dark:bg-white/5 rounded-[4px] border border-indigo-500/30 overflow-hidden shadow-xl">
                    {/* Header */}
                    <div className="bg-indigo-600 px-6 py-4">
                        <h1 className="text-lg font-bold text-white flex items-center gap-2">
                            🇺🇸 Parenting Weekend Check
                        </h1>
                        <p className="text-sm text-indigo-100">SaturdayTracker (a HOLBANK product)</p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {/* Date */}
                        <div className="text-center mb-6">
                            <p className="text-sm text-slate-500 dark:text-gray-400 uppercase tracking-wider">{satInfo.ordinal} Saturday of {satInfo.monthName}</p>
                            <p className="text-xl font-bold text-slate-800 dark:text-white">{satInfo.formattedDate}</p>
                        </div>

                        {/* Result */}
                        <div className={`rounded-[4px] p-6 mb-6 text-center ${isMine
                            ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/30'
                            : 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-500/30'
                            }`}>
                            <h2 className={`text-2xl font-bold mb-2 ${isMine ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                                This weekend: {isMine ? 'MINE' : 'NOT MINE'}
                            </h2>
                            <p className="text-sm text-slate-600 dark:text-gray-400">
                                My schedule: {scheduleLabel}
                            </p>
                            <p className="text-xs text-slate-400 dark:text-gray-500 mt-2">
                                Weekend starts {weekendStart === 'friday' ? 'Friday' : 'Saturday'}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                            <button
                                onClick={handleCopy}
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-white font-semibold py-3 px-4 rounded-[4px] transition-all text-sm border border-slate-200 dark:border-white/10"
                            >
                                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                                {copied ? 'Copied!' : 'Copy Link'}
                            </button>
                            <Link
                                to="/"
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-[4px] transition-all text-sm"
                            >
                                <Calendar className="w-4 h-4" />
                                Open Calculator
                            </Link>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-xs text-slate-500 dark:text-gray-500 mt-4 text-center">
                            ⚠️ Informational only; custody depends on your court order.
                        </p>
                    </div>
                </div>

                {/* Branding */}
                <p className="text-center text-xs text-slate-400 dark:text-gray-600 mt-6">
                    Powered by saturdaytracker.com — a HOLBANK product
                </p>
            </div>
        </div>
    );
};

export default ShareUS;
