import React from 'react';
import { Link } from 'react-router-dom';
import InternalPageLayout from './InternalPageLayout';

interface SEOPageLayoutProps {
    title: string;
    h1: string;
    description?: string;
    showUSCTA?: boolean;
    showIndiaCTA?: boolean;
    children: React.ReactNode;
}

const SEOPageLayout: React.FC<SEOPageLayoutProps> = ({
    title,
    h1,
    description,
    showUSCTA,
    showIndiaCTA,
    children
}) => {
    React.useEffect(() => {
        document.title = `${title} | SaturdayTracker`;
    }, [title]);

    return (
        <InternalPageLayout>
            <article className="prose prose-slate dark:prose-invert lg:prose-lg mx-auto">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a0514] dark:text-white mb-6 px-4 sm:px-0">
                    {h1}
                </h1>

                {description && (
                    <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-8">
                        {description}
                    </p>
                )}

                {/* CTAs */}
                {(showUSCTA || showIndiaCTA) && (
                    <div className="not-prose my-8 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-500/30 text-center">
                        <p className="text-sm font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-widest mb-4">
                            Check Your Schedule
                        </p>
                        <div className="flex justify-center gap-4">
                            {showUSCTA && (
                                <Link to="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                    Check US Weekend
                                </Link>
                            )}
                            {showIndiaCTA && (
                                <Link to="/india" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#7d3cff] hover:bg-[#6a2ee6] md:py-4 md:text-lg md:px-10">
                                    Check India Status
                                </Link>
                            )}
                        </div>
                    </div>
                )}

                <div className="mt-8">
                    {children}
                </div>
            </article>
        </InternalPageLayout>
    );
};

export default SEOPageLayout;
