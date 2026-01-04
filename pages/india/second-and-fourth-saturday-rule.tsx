import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';

const IndiaRule = () => {
    return (
        <SEOPageLayout
            title="Second and Fourth Saturday Bank Holiday Rule (Explained)"
            h1="The Second and Fourth Saturday Rule"
            description="Understanding the RBI and Govt guidelines for bank holidays in India."
            showIndiaCTA={true}
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">The Notification</h2>
                    <p className="mb-4">
                        The Government of India declared the second and fourth Saturdays of every month as public holidays for banks under <strong>Section 25 of the Negotiable Instruments Act, 1881</strong>.
                    </p>
                    <p className="mb-4">
                        This rule came into effect on September 1, 2015. Before this, banks in India typically worked half-days on all Saturdays.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">What about 5th Saturdays?</h2>
                    <p className="mb-4">
                        Months with 5 Saturdays are treated as regular working days. The 5th Saturday is <strong>OPEN</strong> for banking business, just like the 1st and 3rd Saturdays.
                    </p>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default IndiaRule;
