import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';
import { Link } from 'react-router-dom';

const US2026SecondFourth = () => {
    return (
        <SEOPageLayout
            title="Second and Fourth Weekend Calendar 2026"
            h1="2026 Second and Fourth Weekend Calendar"
            description="The complete list of 2nd and 4th weekends for the year 2026."
            showUSCTA={true}
        >
            <div className="text-center py-12">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-800 uppercase bg-indigo-100 rounded-full dark:bg-indigo-900 dark:text-indigo-200">
                    Coming Soon
                </span>
                <p className="text-slate-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
                    We are currently generating the static calendar views for 2026.
                </p>
                <p>
                    In the meantime, you can use our dynamic calculator on the homepage to generate 2026 dates instantly.
                </p>
            </div>
        </SEOPageLayout>
    );
};

export default US2026SecondFourth;
