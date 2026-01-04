import React from 'react';
import { Link } from 'react-router-dom';
import SEOPageLayout from '../../layouts/SEOPageLayout';

const TwoTwoThreeSchedule: React.FC = () => {
    return (
        <SEOPageLayout
            title="2-2-3 Parenting Schedule Calendar & Calculator | 2026 Free Tool"
            description="Generate your 2-2-3 parenting schedule rotations instantly. A free tool to calculate custody exchanges for co-parenting. Download ICS and share."
            keywords="2-2-3 schedule, 2-2-3 parenting plan, 2-2-3 custody calendar, co-parenting rotation calculator"
        >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        2-2-3 Parenting Schedule Calendar
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Generate your repeating 2-2-3 custody rotation instantly. Calculate exchange dates, download your calendar, and share with your co-parent.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/pattern-generator?mode=custody&preset=223"
                            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-xl shadow-emerald-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <span>Open 2-2-3 Generator</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <span className="text-sm text-slate-400 dark:text-slate-500 font-medium">
                            Free • No Signup Required
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2>What is a 2-2-3 Schedule?</h2>
                    <p>
                        The 2-2-3 parenting schedule constitutes a 50/50 shared custody arrangement where your child spends 2 days with one parent, 2 days with the other parent, and then 3 days (a long weekend) with the first parent. The rotation then switches the following week.
                    </p>
                    <p>
                        This repeating 14-day cycle ensures that both parents have alternate weekends off and regular time with the child during the week. It is particularly popular for younger children who benefit from frequent contact with both parents.
                    </p>

                    <h3>How to Use the Calculator</h3>
                    <ol>
                        <li><strong>Select a Start Date:</strong> Choose the day your 2-2-3 cycle begins (usually a Monday).</li>
                        <li><strong>Identify Who Start:</strong> Indicate which parent has the child for the first 2-day block.</li>
                        <li><strong>Generate:</strong> The tool will instantly project your schedule for the next year.</li>
                    </ol>

                    <div className="not-prose bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 my-8 border border-slate-200 dark:border-slate-700">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Need a different schedule?</h4>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                            Our calculator supports various patterns. Check out other common arrangements:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Link to="/us/alternating-weekends-calendar" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">Alternating Weekends</Link>
                            <span className="text-slate-300">•</span>
                            <Link to="/us/second-and-fourth-weekend-visitation-calendar" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">2nd & 4th Weekends</Link>
                        </div>
                    </div>

                    <h3>Why Use an Anchor Date?</h3>
                    <p>
                        Unlike simple patterns like "every other weekend", a 2-2-3 schedule relies heavily on the specific start date of the rotation. Shifting the start by even one day completely changes which parent has the weekend. Our tool locks this "Anchor Date" to ensure your long-term planning is accurate.
                    </p>

                    <h3>Common Questions</h3>
                    <details className="group border-b border-gray-200 dark:border-gray-700 py-4 cursor-pointer">
                        <summary className="flex justify-between items-center font-bold list-none">
                            <span>Does the week always start on Monday?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <p className="text-slate-600 dark:text-slate-300 mt-3 group-open:animate-fadeIn">
                            Not necessarily. While many parents start the rotation on Monday to align with school weeks, you can start a 2-2-3 cycle on any day of the week. Just set your "Start Date" in the generator accordingly.
                        </p>
                    </details>

                    <details className="group border-b border-gray-200 dark:border-gray-700 py-4 cursor-pointer">
                        <summary className="flex justify-between items-center font-bold list-none">
                            <span>Can I export this to Google Calendar?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <p className="text-slate-600 dark:text-slate-300 mt-3 group-open:animate-fadeIn">
                            Yes. After generating your schedule, click the "Download ICS" button. You can then import this .ics file directly into Google Calendar, Apple Calendar, or Outlook.
                        </p>
                    </details>

                    <details className="group border-b border-gray-200 dark:border-gray-700 py-4 cursor-pointer">
                        <summary className="flex justify-between items-center font-bold list-none">
                            <span>How are exchanges handled?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <p className="text-slate-600 dark:text-slate-300 mt-3 group-open:animate-fadeIn">
                            This calendar calculates the <strong>days</strong> of custody. Exchange times (e.g., 3:00 PM pickup) should be agreed upon separately or specified in your court order.
                        </p>
                    </details>

                </div>
            </div>
        </SEOPageLayout>
    );
};

export default TwoTwoThreeSchedule;
