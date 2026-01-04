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

const ShareIndia: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [copied, setCopied] = React.useState(false);

    const dateStr = searchParams.get('date') || new Date().toISOString().split('T')[0];

    const satInfo = useMemo(() => getSaturdayInfo(dateStr), [dateStr]);
    const isClosed = satInfo.weekNumber === 2 || satInfo.weekNumber === 4;
    const reason = `${satInfo.ordinal} Saturday`;

    // Set document title and meta
    useEffect(() => {
        const status = isClosed ? 'CLOSED' : 'OPEN';
        document.title = `India Banks ${status} | ${satInfo.formattedDate} | SaturdayTracker`;

        // Update OG tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogTitle) ogTitle.setAttribute('content', `India Bank Status: ${status}`);
        if (ogDesc) ogDesc.setAttribute('content', `${satInfo.formattedDate} - ${reason}`);
    }, [satInfo, isClosed, reason]);

    const handleCopy = async () => {
        const shareUrl = window.location.href;
        const status = isClosed ? 'CLOSED' : 'OPEN';
        const shareText = `saturdaytracker.com (a HOLBANK product): ${satInfo.formattedDate} — India banks: ${status} (${reason}). Details: ${shareUrl}`;

        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0a0514] flex flex-col items-center justify-center p-4">
            {/* Canonical */}
            <link rel="canonical" href={`https://saturdaytracker.com/share/india?date=${dateStr}`} />

            <div className="w-full max-w-md">
                {/* Back Link */}
                <Link to="/" className="inline-flex items-center gap-2 text-[#7d3cff] hover:underline mb-6 text-sm">
                    <ArrowLeft className="w-4 h-4" />
                    Back to SaturdayTracker
                </Link>

                {/* Card */}
                <div className="bg-white dark:bg-white/5 rounded-[4px] border border-[#7d3cff]/30 overflow-hidden shadow-xl">
                    {/* Header */}
                    <div className="bg-[#7d3cff] px-6 py-4">
                        <h1 className="text-lg font-bold text-white flex items-center gap-2">
                            🇮🇳 India Bank Saturday Status
                        </h1>
                        <p className="text-sm text-purple-100">SaturdayTracker (a HOLBANK product)</p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {/* Date */}
                        <div className="text-center mb-6">
                            <p className="text-sm text-slate-500 dark:text-gray-400 uppercase tracking-wider">{satInfo.ordinal} Saturday of {satInfo.monthName}</p>
                            <p className="text-xl font-bold text-slate-800 dark:text-white">{satInfo.formattedDate}</p>
                        </div>

                        {/* Result */}
                        <div className={`rounded-[4px] p-6 mb-6 text-center ${isClosed
                            ? 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-500/30'
                            : 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/30'
                            }`}>
                            <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-gray-500 mb-2">Banks:</p>
                            <p className={`text-4xl font-black ${isClosed ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                                {isClosed ? 'CLOSED' : 'OPEN'}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-gray-400 mt-2">
                                Reason: {reason}
                            </p>
                        </div>

                        {/* Explanation */}
                        <div className="bg-slate-50 dark:bg-white/5 rounded-[4px] p-4 mb-6">
                            <p className="text-sm text-slate-600 dark:text-gray-400">
                                In India, many bank branches observe closure on the 2nd and 4th Saturdays each month (effective Sep 1, 2015 via Govt notification under Section 25 of the Negotiable Instruments Act).
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
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#7d3cff] hover:bg-[#6a2ee6] text-white font-semibold py-3 px-4 rounded-[4px] transition-all text-sm"
                            >
                                <Calendar className="w-4 h-4" />
                                Open Calculator
                            </Link>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-xs text-slate-500 dark:text-gray-500 mt-4 text-center">
                            ⚠️ Confirm with your bank/state holiday list.
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

export default ShareIndia;
