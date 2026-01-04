import React from 'react';
import SEOPageLayout from '../layouts/SEOPageLayout';
import { Link } from 'react-router-dom';

const PatternGenerator = () => {
    return (
        <SEOPageLayout
            title="Pattern Generator (Shifts & Custom Schedules)"
            h1="Shift & Pattern Generator"
            description="Generate custom calendars for complex working shifts."
        >
            <div className="text-center py-12">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-amber-800 uppercase bg-amber-100 rounded-full dark:bg-amber-900 dark:text-amber-200">
                    Temporarily Unavailable
                </span>
                <h2 className="text-2xl font-bold mb-4">Custom Pattern Tool</h2>
                <p className="text-slate-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
                    We're currently updating the Custody Rotation Generator with improved features and functionality.
                </p>
                <p className="mb-8 text-slate-500 dark:text-gray-400">
                    Please check back soon. In the meantime, explore our other co-parenting tools and banking calendars.
                </p>

                <div className="mt-8">
                    <Link to="/" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </SEOPageLayout>
    );
};

export default PatternGenerator;
