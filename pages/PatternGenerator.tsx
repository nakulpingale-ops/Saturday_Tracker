import React from 'react';
import { Link } from 'react-router-dom';
import InternalPageLayout from '../layouts/InternalPageLayout';

const PatternGeneratorPage: React.FC = () => {
    return (
        <InternalPageLayout>
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <div className="mb-8">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-amber-800 uppercase bg-amber-100 rounded-full dark:bg-amber-900 dark:text-amber-200">
                        Temporarily Unavailable
                    </span>
                    <h1 className="text-4xl font-bold text-white mb-4">Custom Pattern Tool</h1>
                    <p className="text-slate-400 max-w-xl mx-auto mb-8">
                        We're currently updating the Custody Rotation Generator with improved features and functionality.
                    </p>
                    <p className="text-slate-500 max-w-lg mx-auto mb-12">
                        Please check back soon. In the meantime, explore our other co-parenting tools and banking calendars.
                    </p>
                </div>

                <div className="mt-8">
                    <Link to="/" className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-indigo-500/20">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </InternalPageLayout>
    );
};

export default PatternGeneratorPage;
