import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';
import { Link } from 'react-router-dom';

const USFirstThirdFifth = () => {
    return (
        <SEOPageLayout
            title="First, Third and Fifth Weekend Parenting Schedule"
            h1="First, Third and Fifth Weekend Parenting Schedule"
            description="Understanding the 1st, 3rd, and 5th weekend custody arrangement."
            showUSCTA={true}
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">How It Works</h2>
                    <p className="mb-4">
                        In a "First, Third, and Fifth" weekend possession order (often called a Standard Possession Order or SPO in states like Texas), one parent has the children on the <strong>1st, 3rd, and 5th weekends of a month</strong>.
                    </p>
                    <p className="mb-4">
                        The other parent typically has the weekends that aren't the 1st, 3rd, or 5th (which are the 2nd and 4th weekends).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">The "Fifth Weekend" Bonus</h2>
                    <p className="mb-4">
                        The most confusing part of this schedule is the <strong>5th weekend</strong>. Not every month has five weekends. In fact, most months only have four.
                    </p>
                    <p className="mb-4">
                        However, roughly 4 months a year will have a 5th weekend. In this schedule, the parent with the "First, Third, and Fifth" rights gets that bonus weekend.
                    </p>
                    <div className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-lg border-l-4 border-yellow-400">
                        <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Back-to-Back Weekends</h3>
                        <p className="text-sm">
                            When a month has a 5th weekend, the parent who has the 1st, 3rd, and 5th will have the 5th weekend of that month, followed immediately by the 1st weekend of the next month. This results in back-to-back weekends of possession.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Determine Your Schedule</h2>
                    <p className="mb-6">
                        Use our calculator to instantly verify if a specific date falls on a 1st, 3rd, or 5th weekend.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/" className="btn-primary px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
                            Open Schedule Calculator
                        </Link>
                    </div>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default USFirstThirdFifth;
