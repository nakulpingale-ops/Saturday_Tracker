import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';
import { Link } from 'react-router-dom';

const USHowToCount = () => {
    return (
        <SEOPageLayout
            title="How to Count Weekends (Friday vs Saturday Start)"
            h1="How to Count Weekends for Custody"
            description="Resolving the confusion between Friday and Saturday weekend starts."
            showUSCTA={true}
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">The Problem</h2>
                    <p className="mb-4">
                        A month starts on a Friday. Is that weekend the "First Weekend" of the month? Or does the first weekend start on the first Saturday?
                    </p>
                    <p className="mb-4">
                        This small detail causes thousands of disputes annually. The answer depends entirely on the language in your court order (or state conventions).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Scenario 1: Friday Start Convention</h2>
                    <p className="mb-4">
                        <strong>Rule:</strong> The weekend is identified by the Friday on which it begins.
                    </p>
                    <p className="mb-4">
                        <strong>Example:</strong> If Friday is August 31st, and Saturday is September 1st.
                        <br />
                        Because the Friday is in August, this is considered the <strong>Last Weekend of August</strong> (or 5th weekend), not the First Weekend of September.
                    </p>
                    <p className="text-sm text-slate-500 italic">Common in: Texas Standard Possession Orders (SPO).</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Scenario 2: Saturday Start Convention</h2>
                    <p className="mb-4">
                        <strong>Rule:</strong> The weekend is identified by the Saturday.
                    </p>
                    <p className="mb-4">
                        <strong>Example:</strong> If Friday is August 31st, and Saturday is September 1st.
                        <br />
                        Because the Saturday is in September, this is considered the <strong>1st Weekend of September</strong>.
                    </p>
                </section>

                <section>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-500/30">
                        <h3 className="font-bold text-indigo-900 dark:text-indigo-200 mb-2">Our Calculator Handes Both</h3>
                        <p className="mb-4">
                            SaturdayTracker includes a "Weekend Starts" toggle.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-6 text-sm">
                            <li>Set it to <strong>Friday</strong> to see how dates land under Friday-based rules.</li>
                            <li>Set it to <strong>Saturday</strong> to see the Saturday-based calculation.</li>
                        </ul>
                        <div className="text-center">
                            <Link to="/" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                                Try the Calculator Now
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default USHowToCount;
