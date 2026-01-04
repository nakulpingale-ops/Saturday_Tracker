import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';

const IndiaIsSecond = () => {
    return (
        <SEOPageLayout
            title="Is This Saturday a Second Saturday?"
            h1="Is checking if this Saturday is a Second Saturday?"
            description="If it is the Second Saturday, banks in India are closed."
            showIndiaCTA={true}
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">How to check</h2>
                    <p className="mb-4">
                        A "Second Saturday" is strictly the second Saturday to occur within a calendar month. It typically falls between the 8th and the 14th of the month.
                    </p>
                    <p className="mb-4">
                        If today falls on a Second Saturday, banks (PSU and Private) across India will remain <strong>CLOSED</strong>.
                    </p>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default IndiaIsSecond;
