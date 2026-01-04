import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const About = () => {
    return (
        <SEOPageLayout
            title="About SaturdayTracker"
            h1="About SaturdayTracker"
            description="The specialized utility for weekend scheduling patterns."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">Our Mission</h2>
                    <p className="mb-4">
                        SaturdayTracker.com was built to solve two specific, recurring "weekend math" problems that cause unnecessary confusion:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 mb-4">
                        <li>
                            <strong>Co-Parenting Schedules:</strong> Calculating "Which weekend is the 2nd weekend?" or "When is my next alternating weekend?" without manually counting on a wall calendar.
                        </li>
                        <li>
                            <strong>India Banking Holidays:</strong> Quickly determining if a specific Saturday is a "Second" or "Fourth" Saturday when banks are closed.
                        </li>
                    </ol>
                    <p>
                        Our goal is to provide instant, downloadable, and shareable answers to these questions.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">Part of the HolBank Network</h2>
                    <p className="mb-4">
                        SaturdayTracker is a verified utility within the <strong>HolBank Network</strong>, a suite of tools dedicated to calendar intelligence and holiday tracking.
                    </p>
                    <p>
                        <a
                            href="https://bankholidaycalendar.com/"
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 underline"
                        >
                            Visit BankHolidayCalendar.com <ExternalLink className="w-3 h-3" />
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">Get Started</h2>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link to="/" className="text-indigo-600 dark:text-indigo-400 font-medium">
                            Check US Co-Parenting Schedule →
                        </Link>
                        <Link to="/india" className="text-[#7d3cff] font-medium">
                            Check India Bank Status →
                        </Link>
                    </div>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default About;
