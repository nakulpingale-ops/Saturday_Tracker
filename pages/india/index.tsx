import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';
import { Link } from 'react-router-dom';

const IndiaLanding = () => {
    return (
        <SEOPageLayout
            title="India Bank Saturday Checker"
            h1="India Bank Saturday Holiday Checker"
            description="Find out instantly if banks in India are open or closed this Saturday."
            showIndiaCTA={true}
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">The 2nd & 4th Saturday Rule</h2>
                    <p className="mb-4">
                        In India, public and private sector banks follow a holiday schedule where:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>2nd & 4th Saturdays:</strong> Banks are CLOSED.</li>
                        <li><strong>1st, 3rd & 5th Saturdays:</strong> Banks are OPEN (full working days).</li>
                        <li><strong>Sundays:</strong> Always CLOSED.</li>
                    </ul>
                    <p>
                        This rule was implemented by the RBI in 2015 via the Negotiable Instruments Act.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Why use this checker?</h2>
                    <p className="mb-4">
                        It's easy to lose track of whether the upcoming Saturday is the "2nd" or "3rd" of the month. Our tool calculates the correct ordinal position instantly.
                    </p>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default IndiaLanding;
