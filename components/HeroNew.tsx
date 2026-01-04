import React, { useState, useMemo } from 'react';
import { Download, Share2, Calendar, Copy, Check, ExternalLink, ChevronDown } from 'lucide-react';
import { getNextSaturdayInfo } from '../lib/dateUtils';

interface HeroNewProps {
    isDarkMode: boolean;
}



// Generate next N weekend date ranges for a schedule type
const generateWeekendRanges = (scheduleType: string, weekendStart: 'friday' | 'saturday', count: number = 6) => {
    const ranges: { startDate: Date; endDate: Date; isYours: boolean; weekNumber: number; rangeText: string }[] = [];
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    // Define which week numbers are "your weekend" based on schedule
    let yourWeeks: number[] = [];
    switch (scheduleType) {
        case '2nd-4th':
            yourWeeks = [2, 4];
            break;
        case '1st-3rd-5th':
            yourWeeks = [1, 3, 5];
            break;
        case '2nd-4th-5th':
            yourWeeks = [2, 4, 5];
            break;
        case 'alternating':
            break;
        case '2-2-3':
            break;
    }

    let alternatingCounter = 0;

    for (let i = 0; i < 12 && ranges.length < count; i++) {
        const month = (currentMonth + i) % 12;
        const year = currentYear + Math.floor((currentMonth + i) / 12);

        // Find all Saturdays in this month
        let d = new Date(year, month, 1);
        while (d.getDay() !== 6) d.setDate(d.getDate() + 1);

        while (d.getMonth() === month) {
            if (d > today) {
                const weekNum = Math.ceil(d.getDate() / 7);
                let isYours = false;

                if (scheduleType === 'alternating' || scheduleType === '2-2-3') {
                    isYours = alternatingCounter % 2 === 0;
                    alternatingCounter++;
                } else {
                    isYours = yourWeeks.includes(weekNum);
                }

                // Calculate weekend range
                const saturday = new Date(d);
                const friday = new Date(d);
                friday.setDate(friday.getDate() - 1);
                const sunday = new Date(d);
                sunday.setDate(sunday.getDate() + 1);

                const startDate = weekendStart === 'friday' ? friday : saturday;
                const endDate = sunday;

                // Format range text
                const dayRange = weekendStart === 'friday' ? 'Fri–Sun' : 'Sat–Sun';
                const startMonth = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(startDate);
                const startDay = startDate.getDate();
                const endDay = endDate.getDate();
                const endYear = endDate.getFullYear();
                const rangeText = `${startMonth} ${startDay}–${endDay}, ${endYear} (${dayRange})`;

                if (isYours) {
                    ranges.push({
                        startDate,
                        endDate,
                        isYours,
                        weekNumber: weekNum,
                        rangeText
                    });
                }

                if (ranges.length >= count) break;
            }
            d.setDate(d.getDate() + 7);
        }
    }

    return ranges;
};

// Get next bank closure dates
const getNextClosureDates = (count: number = 4) => {
    const closures: { date: Date; type: string; formattedDate: string }[] = [];
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    for (let i = 0; i < 12 && closures.length < count; i++) {
        const month = (currentMonth + i) % 12;
        const year = currentYear + Math.floor((currentMonth + i) / 12);

        // Find all Saturdays in this month
        let d = new Date(year, month, 1);
        while (d.getDay() !== 6) d.setDate(d.getDate() + 1);

        let satCount = 0;
        while (d.getMonth() === month) {
            satCount++;
            if (d > today && (satCount === 2 || satCount === 4)) {
                closures.push({
                    date: new Date(d),
                    type: satCount === 2 ? '2nd Saturday' : '4th Saturday',
                    formattedDate: new Intl.DateTimeFormat('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    }).format(d)
                });
                if (closures.length >= count) break;
            }
            d.setDate(d.getDate() + 7);
        }
    }

    return closures;
};

// Generate ICS file content
const generateICS = (ranges: { startDate: Date; endDate: Date }[], title: string) => {
    let ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SaturdayTracker//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
`;

    ranges.forEach((range, i) => {
        const endDate = new Date(range.endDate);
        endDate.setDate(endDate.getDate() + 1); // ICS end date is exclusive

        ics += `BEGIN:VEVENT
UID:saturday-tracker-${i}-${range.startDate.getTime()}@saturdaytracker.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART;VALUE=DATE:${range.startDate.toISOString().split('T')[0].replace(/-/g, '')}
DTEND;VALUE=DATE:${endDate.toISOString().split('T')[0].replace(/-/g, '')}
SUMMARY:${title}
DESCRIPTION:Your scheduled parenting weekend
END:VEVENT
`;
    });

    ics += 'END:VCALENDAR';
    return ics;
};

// Share utilities
const buildUSShareUrl = (date: string, schedule: string, weekendStart: string) => {
    return `/share/us?date=${date}&schedule=${schedule}&weekendStart=${weekendStart}`;
};

const buildIndiaShareUrl = (date: string) => {
    return `/share/india?date=${date}`;
};

const getScheduleLabel = (schedule: string) => {
    switch (schedule) {
        case 'second-fourth': return 'Second and Fourth weekends';
        case 'first-third-fifth': return 'First, Third and Fifth weekends';
        case 'alternating': return 'Alternating weekends (every other weekend)';
        case 'custom': return 'Custom schedule';
        default: return schedule;
    }
};

const HeroNew: React.FC<HeroNewProps> = ({ isDarkMode }) => {
    // US Card State
    const [scheduleType, setScheduleType] = useState('second-fourth');
    const [weekendStart, setWeekendStart] = useState<'friday' | 'saturday'>('friday');
    const [thisWeekendMine, setThisWeekendMine] = useState(true); // For alternating anchor
    const [usCopied, setUsCopied] = useState(false);
    const [indiaCopied, setIndiaCopied] = useState(false);

    const nextSat = useMemo(() => getNextSaturdayInfo(), []);
    const weekendRanges = useMemo(() => generateWeekendRanges(scheduleType, weekendStart), [scheduleType, weekendStart]);
    const closureDates = useMemo(() => getNextClosureDates(), []);

    // Check if next Saturday is mine
    const isNextWeekendMine = useMemo(() => {
        let myWeeks: number[] = [];
        switch (scheduleType) {
            case 'second-fourth': myWeeks = [2, 4]; break;
            case 'first-third-fifth': myWeeks = [1, 3, 5]; break;
            case 'alternating': return thisWeekendMine; // Uses anchor
            case 'custom': return weekendRanges.length > 0;
            default: return false;
        }
        return myWeeks.includes(nextSat.weekNumber);
    }, [scheduleType, nextSat.weekNumber, weekendRanges, thisWeekendMine]);

    // India logic
    const isBankClosed = nextSat.weekNumber === 2 || nextSat.weekNumber === 4;
    const bankReason = isBankClosed
        ? `${nextSat.ordinal} Saturday`
        : `${nextSat.ordinal} Saturday (1st, 3rd, 5th Saturdays are working days)`;

    const handleDownloadICS = () => {
        const ics = generateICS(weekendRanges, 'Parenting Weekend');
        const blob = new Blob([ics], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `parenting-weekends-${new Date().getFullYear()}.ics`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleShareUS = async () => {
        const dateStr = nextSat.date.toISOString().split('T')[0];
        let shareUrlPath = `/share/us?date=${dateStr}&schedule=${scheduleType}&weekendStart=${weekendStart}`;
        if (scheduleType === 'alternating') {
            shareUrlPath += `&thisWeekendMine=${thisWeekendMine}`;
        }
        const shareUrl = `https://saturdaytracker.com${shareUrlPath}`;
        const scheduleLabel = getScheduleLabel(scheduleType);

        let shareText = '';
        if (isNextWeekendMine) {
            shareText = `saturdaytracker.com (a HOLBANK product): ${nextSat.formattedDate} — This upcoming weekend is MINE (my parenting schedule: ${scheduleLabel}). Details: ${shareUrl}`;
        } else {
            const nextRange = weekendRanges[0]?.rangeText || 'See calendar';
            shareText = `saturdaytracker.com (a HOLBANK product): ${nextSat.formattedDate} — This upcoming weekend is NOT mine (my parenting schedule: ${scheduleLabel}). Next mine: ${nextRange}. Details: ${shareUrl}`;
        }

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Parenting Weekend Check - SaturdayTracker',
                    text: shareText,
                    url: shareUrl
                });
            } catch (err) {
                // User cancelled or error
            }
        } else {
            await navigator.clipboard.writeText(shareText);
            setUsCopied(true);
            setTimeout(() => setUsCopied(false), 2000);
        }
    };

    const handleShareIndia = async () => {
        const dateStr = nextSat.date.toISOString().split('T')[0];
        const shareUrl = `https://saturdaytracker.com${buildIndiaShareUrl(dateStr)}`;

        const status = isBankClosed ? 'CLOSED' : 'OPEN';
        const shareText = `saturdaytracker.com (a HOLBANK product): ${nextSat.formattedDate} — India banks: ${status} (${bankReason}). Details: ${shareUrl}`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'India Bank Saturday Status - SaturdayTracker',
                    text: shareText,
                    url: shareUrl
                });
            } catch (err) {
                // User cancelled or error
            }
        } else {
            await navigator.clipboard.writeText(shareText);
            setIndiaCopied(true);
            setTimeout(() => setIndiaCopied(false), 2000);
        }
    };

    return (
        <section className="flex flex-col items-center justify-start pt-[100px] px-4 w-full max-w-[1100px] mx-auto relative z-10">

            {/* Hero H1 */}
            <h1 className="w-full text-center font-black tracking-tight leading-[1.1] mb-[17px]
                     uppercase
                     bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 dark:from-[#b49bff] dark:to-white
                     transition-all duration-300 drop-shadow-sm flex flex-col gap-1 sm:gap-2">
                <span className="block" style={{ fontSize: 'clamp(24px, 3.2vw, 44px)' }}>
                    Upcoming Saturday: {nextSat.formattedDate}
                </span>
                <span className="block text-indigo-600 dark:text-[#b49bff] -mt-[15px]" style={{ fontSize: 'clamp(28px, 3.8vw, 52px)' }}>
                    {nextSat.ordinal} Saturday of {nextSat.monthName}
                </span>
            </h1>

            {/* Side-by-Side Sections */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

                {/* US Co-Parenting Section */}
                <div className="w-full bg-white dark:bg-white/5 rounded-[4px] border border-indigo-500/30 overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="bg-indigo-600 px-6 py-4">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            🇺🇸 <span className="sr-only">United States</span> Co-Parenting Weekend Checker
                        </h2>
                        <p className="text-sm text-indigo-100">Standard Possession Order (SPO) calculator</p>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                        {/* Inputs */}
                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-2">
                                    My Parenting Schedule
                                </label>
                                <div className="relative">
                                    <select
                                        value={scheduleType}
                                        onChange={(e) => setScheduleType(e.target.value)}
                                        className="w-full appearance-none bg-slate-50 dark:bg-white/5 border border-indigo-500 rounded-[4px] pl-4 pr-10 py-3 text-sm text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
                                    >
                                        <option value="second-fourth" className="bg-white dark:bg-[#0a0514]">I have the Second and Fourth weekends (2nd & 4th)</option>
                                        <option value="first-third-fifth" className="bg-white dark:bg-[#0a0514]">I have the First, Third and Fifth weekends (1st, 3rd & 5th)</option>
                                        <option value="alternating" className="bg-white dark:bg-[#0a0514]">I have alternating weekends (every other weekend)</option>
                                        <option value="custom" className="bg-white dark:bg-[#0a0514]">Custom / other</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                </div>
                                <p className="text-xs text-slate-400 dark:text-gray-500 mt-1">Select the schedule that matches your parenting time.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-2">
                                        Weekend Starts
                                    </label>
                                    <div className="relative">
                                        <select
                                            value={weekendStart}
                                            onChange={(e) => setWeekendStart(e.target.value as 'friday' | 'saturday')}
                                            className="w-full appearance-none bg-slate-50 dark:bg-white/5 border border-indigo-500 rounded-[4px] pl-4 pr-10 py-3 text-sm text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
                                        >
                                            <option value="friday" className="bg-white dark:bg-[#0a0514]">Friday (default)</option>
                                            <option value="saturday" className="bg-white dark:bg-[#0a0514]">Saturday</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                    </div>
                                    <p className="text-xs text-slate-400 dark:text-gray-500 mt-1">Many court schedules count weekends from Friday.</p>
                                </div>

                                {/* Anchor control for alternating weekends */}
                                {scheduleType === 'alternating' && (
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-2">
                                            This Coming Weekend
                                        </label>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setThisWeekendMine(true)}
                                                className={`flex-1 py-3 px-4 rounded-[4px] text-sm font-semibold transition-all border ${thisWeekendMine
                                                    ? 'bg-indigo-600 text-white border-transparent'
                                                    : 'bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white border-indigo-500'
                                                    }`}
                                            >
                                                Is Mine
                                            </button>
                                            <button
                                                onClick={() => setThisWeekendMine(false)}
                                                className={`flex-1 py-3 px-4 rounded-[4px] text-sm font-semibold transition-all border ${!thisWeekendMine
                                                    ? 'bg-indigo-600 text-white border-transparent'
                                                    : 'bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white border-indigo-500'
                                                    }`}
                                            >
                                                Not Mine
                                            </button>
                                        </div>
                                        <p className="text-xs text-slate-400 dark:text-gray-500 mt-1">Alternating schedules need a starting reference.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Result */}
                        <div className={`rounded-[4px] p-4 mb-6 text-center ${isNextWeekendMine
                            ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/30'
                            : 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-500/30'
                            }`}>
                            <h3 className={`text-2xl font-bold mb-2 ${isNextWeekendMine ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>
                                This upcoming weekend: {isNextWeekendMine ? 'MINE' : 'NOT MINE'}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-gray-400">
                                Based on: {getScheduleLabel(scheduleType)}. Weekend starts {weekendStart === 'friday' ? 'Friday' : 'Saturday'}.
                            </p>
                            {!isNextWeekendMine && weekendRanges.length > 0 && (
                                <p className="text-sm text-slate-500 dark:text-gray-500 mt-2">
                                    Next mine: {weekendRanges[0]?.rangeText}
                                </p>
                            )}
                            <p className="text-xs text-slate-400 dark:text-gray-500 mt-2">
                                {nextSat.formattedDate} ({nextSat.ordinal} Saturday)
                            </p>
                        </div>

                        {/* Next 6 Weekends That Are Mine */}
                        <div className="mb-6">
                            <h3 className="text-sm font-bold text-slate-700 dark:text-gray-300 mb-3">Next 6 weekends that are mine</h3>
                            <div className="space-y-2">
                                {weekendRanges.slice(0, 6).map((range, i) => (
                                    <div
                                        key={i}
                                        className="px-3 py-2 rounded-[4px] text-sm bg-indigo-50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-500/30"
                                    >
                                        {range.rangeText}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                            <button
                                onClick={handleDownloadICS}
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-[4px] transition-all text-sm border border-transparent shadow-[0_0_0_1px_theme(colors.indigo.500)]"
                            >
                                <Download className="w-4 h-4" />
                                Download ICS
                            </button>
                            <button
                                onClick={handleShareUS}
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-white font-semibold py-3 px-4 rounded-[4px] transition-all text-sm border border-indigo-500"
                            >
                                {usCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                                {usCopied ? 'Copied!' : 'Share'}
                            </button>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-xs text-slate-500 dark:text-gray-500 mt-4 text-center">
                            ⚠️ Informational only; custody depends on your court order.
                        </p>
                    </div>
                </div>

                {/* India Banking Section */}
                <div className="w-full bg-white dark:bg-white/5 rounded-[4px] border border-[#7d3cff]/30 overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="bg-[#7d3cff] px-6 py-4">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            🇮🇳 <span className="sr-only">India</span> Bank Saturday Closure Checker
                        </h2>
                        <p className="text-sm text-purple-100">2nd & 4th Saturday holiday rule</p>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                        {/* Result */}
                        <div className={`rounded-[4px] p-6 mb-6 text-center ${isBankClosed
                            ? 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-500/30'
                            : 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/30'
                            }`}>
                            <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-gray-500 mb-1">Banks:</p>
                            <p className={`text-3xl font-bold mb-2 ${isBankClosed ? 'text-rose-700 dark:text-rose-400' : 'text-emerald-700 dark:text-emerald-400'}`}>
                                {isBankClosed ? 'CLOSED' : 'OPEN'}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-gray-400">
                                Reason: {bankReason}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-gray-500 mt-1">
                                {nextSat.formattedDate}
                            </p>
                        </div>

                        {/* Explanation */}
                        <div className="bg-slate-50 dark:bg-white/5 rounded-[4px] p-4 mb-6 text-left">
                            <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                                In India, many bank branches observe closure on the 2nd and 4th Saturdays each month (effective Sep 1, 2015 via Govt notification under Section 25 of the Negotiable Instruments Act). RBI aligned payment system operations accordingly.
                            </p>
                        </div>

                        {/* Next Closure Dates */}
                        <div className="mb-6">
                            <h3 className="text-sm font-bold text-slate-700 dark:text-gray-300 mb-3">Next Bank Closures</h3>
                            <div className="space-y-2">
                                {closureDates.slice(0, 2).map((closure, i) => (
                                    <div
                                        key={i}
                                        className="px-3 py-2 rounded-[4px] text-sm bg-rose-50 dark:bg-rose-900/20 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-500/30 flex justify-between"
                                    >
                                        <span>{closure.formattedDate}</span>
                                        <span className="text-rose-600 dark:text-rose-400 font-medium">{closure.type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                            <a
                                href="/india/2nd-and-4th-saturday-bank-holiday/"
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#7d3cff] hover:bg-[#6a2ee6] text-white font-semibold py-3 px-4 rounded-[4px] transition-all text-sm border border-transparent shadow-[0_0_0_1px_#7d3cff]"
                            >
                                <Calendar className="w-4 h-4" />
                                See 2026 List
                            </a>
                            <button
                                onClick={handleShareIndia}
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-white font-semibold py-3 px-4 rounded-[4px] transition-all text-sm border border-[#7d3cff]"
                            >
                                {indiaCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                                {indiaCopied ? 'Copied!' : 'Share'}
                            </button>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-xs text-slate-500 dark:text-gray-500 mt-4 text-center">
                            ⚠️ Confirm with your bank/state holiday list.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroNew;
