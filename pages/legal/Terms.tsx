import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';

const Terms = () => {
    const today = new Date().toLocaleDateString();

    return (
        <SEOPageLayout
            title="Terms of Service"
            h1="Terms of Service"
            description={`Last updated: ${today}`}
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">1. Agreement to Terms</h2>
                    <p>
                        By accessing or using SaturdayTracker.com, you agree to be bound by these Terms of Service. If you do not agree, you are prohibited from using this site.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">2. Use of Service</h2>
                    <p className="mb-4">
                        SaturdayTracker.com provides date calculation utilities for co-parenting and banking purposes.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>You agree to use this service only for lawful purposes.</li>
                        <li>You understand that the results are estimates based on standard patterns and rules.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">3. Disclaimer of Liability</h2>
                    <p>
                        This service is provided "AS IS" without any warranty. We are not liable for any damages arising from the use or inability to use the service, including but not limited to missed banking days, scheduling conflicts, or legal disputes resulting from reliance on this tool.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">4. Modifications</h2>
                    <p>
                        We reserve the right to modify these terms at any time. Your continued use of the website constitutes acceptance of those changes.
                    </p>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default Terms;
