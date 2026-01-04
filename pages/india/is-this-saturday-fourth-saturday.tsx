import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';

const IndiaIsFourth = () => {
    return (
        <SEOPageLayout
            title="Is This Saturday a Fourth Saturday?"
            h1="Is checking if this Saturday is a Fourth Saturday?"
            description="If it is the Fourth Saturday, banks in India are closed."
            showIndiaCTA={true}
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">How to check</h2>
                    <p className="mb-4">
                        A "Fourth Saturday" is strictly the fourth Saturday to occur within a calendar month. It typically falls between the 22nd and the 28th of the month.
                    </p>
                    <p className="mb-4">
                        If today falls on a Fourth Saturday, banks (PSU and Private) across India will remain <strong>CLOSED</strong>.
                    </p>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default IndiaIsFourth;
