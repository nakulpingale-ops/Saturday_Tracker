import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';
import { Link } from 'react-router-dom';

const Disclaimer = () => {
    return (
        <SEOPageLayout
            title="Disclaimer"
            h1="Disclaimer"
            description="Important information regarding the use of SaturdayTracker.com."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">1. US Co-Parenting Information</h2>
                    <p className="mb-4">
                        The co-parenting schedules, calculators, and calendars provided on SaturdayTracker.com are for <strong>informational and planning purposes only</strong>. They do not constitute legal advice and should not be used as a substitute for your official court order or parenting agreement.
                    </p>
                    <p className="mb-4">
                        <strong>Your Court Order Controls:</strong> Every custody case is unique. Your specific court order, decree, or parenting plan is the final authority on your schedule. If there is any discrepancy between this tool and your legal documents, you must follow your legal documents.
                    </p>
                    <p>
                        <strong>Variations:</strong> Weekend schedules can vary based on:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Start times (Friday school pickup vs. Saturday morning).</li>
                        <li>Holiday overrides (which usually take precedence over regular weekends).</li>
                        <li>Specific "anchor dates" defined in your plan.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">2. India Banking Information</h2>
                    <p className="mb-4">
                        The bank holiday information provided here is based on the general "Second and Fourth Saturday" rule in India (Section 25 of the Negotiable Instruments Act).
                    </p>
                    <p className="mb-4">
                        <strong>Variations exist:</strong> State governments may declare additional holidays, and specific cooperative banks or states may have different notifications.
                    </p>
                    <p>
                        <strong>Confirm with your Bank:</strong> Always check your specific bank's official holiday list or notification before planning critical financial transactions.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">3. No Warranties</h2>
                    <p>
                        This service is provided "as is" without any representations or warranties, express or implied. We do not warrant that the information on this website is complete, true, accurate, or non-misleading.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">4. Contact</h2>
                    <p>
                        If you have questions about this disclaimer, please <Link to="/contact" className="text-indigo-600 dark:text-indigo-400 underline">contact us</Link>.
                    </p>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default Disclaimer;
