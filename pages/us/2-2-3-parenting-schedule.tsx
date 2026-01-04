import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';
import { Link } from 'react-router-dom';

const US223Schedule = () => {
    return (
        <SEOPageLayout
            title="2-2-3 Parenting Schedule Calculator"
            h1="2-2-3 Parenting Time Schedule"
            description="A calculator for the popular 50/50 shared custody rotation."
        >
            <div className="text-center py-12">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-800 uppercase bg-indigo-100 rounded-full dark:bg-indigo-900 dark:text-indigo-200">
                    Coming Soon
                </span>
                <h2 className="text-2xl font-bold mb-4">We're building this tool right now.</h2>
                <p className="text-slate-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
                    The 2-2-3 schedule involves a rotation where the child spends 2 days with Parent A, 2 days with Parent B, then 3 days with Parent A. The next week it flips.
                </p>
                <p className="mb-8">
                    Our team is currently finalizing the logic to allow you to visualize this rotation on a calendar and generate an ICS file for it.
                </p>

                <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl max-w-lg mx-auto">
                    <h3 className="font-bold mb-4">What this tool will do:</h3>
                    <ul className="text-left space-y-2 text-sm text-slate-600 dark:text-gray-300">
                        <li>✅ Visualize the 2-2-3 split for the entire year</li>
                        <li>✅ Handle "mid-week overnight" variations</li>
                        <li>✅ Export the full schedule to Google Calendar / Outlook</li>
                    </ul>
                </div>

                <div className="mt-12">
                    <Link to="/" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                        ← Back to Standard Weekend Calculator
                    </Link>
                </div>
            </div>
        </SEOPageLayout>
    );
};

export default US223Schedule;
