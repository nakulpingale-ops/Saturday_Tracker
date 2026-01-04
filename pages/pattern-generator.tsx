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
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-green-800 uppercase bg-green-100 rounded-full dark:bg-green-900 dark:text-green-200">
                    Coming Soon
                </span>
                <h2 className="text-2xl font-bold mb-4">Custom Pattern Tool</h2>
                <p className="text-slate-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
                    Do you work a 4-on-4-off schedule? Or maybe you have a custom custody arrangement that doesn't fit the standard molds?
                </p>
                <p className="mb-8">
                    Our universal Pattern Generator will allow you to input any repeating sequence and project it out for 2+ years.
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
