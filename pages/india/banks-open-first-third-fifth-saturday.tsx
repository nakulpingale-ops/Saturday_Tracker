import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';

const IndiaBanksOpenOthers = () => {
    return (
        <SEOPageLayout
            title="Are Banks Open on 1st, 3rd, 5th Saturday?"
            h1="Are Banks Open on 1st, 3rd & 5th Saturday?"
            description="Clarifying the status of non-holiday Saturdays."
            showIndiaCTA={true}
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Yes, They Are Open.</h2>
                    <p className="mb-4">
                        Unless there is a specifically notified public holiday (like a festival or national holiday) falling on that day, <strong>banks in India are fully operational</strong> on:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>The <strong>1st Saturday</strong> of the month.</li>
                        <li>The <strong>3rd Saturday</strong> of the month.</li>
                        <li>The <strong>5th Saturday</strong> of the month (if obtaining).</li>
                    </ul>
                    <p>
                        These are considered full working days.
                    </p>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default IndiaBanksOpenOthers;
