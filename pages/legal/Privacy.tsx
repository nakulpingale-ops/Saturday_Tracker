import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';
import { Link } from 'react-router-dom';

const Privacy = () => {
    const today = new Date().toLocaleDateString();

    return (
        <SEOPageLayout
            title="Privacy Policy"
            h1="Privacy Policy"
            description={`Last updated: ${today}`}
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">1. Information We Collect</h2>
                    <p className="mb-4">
                        <strong>Inputs are ephemeral:</strong> When you use our calculators (e.g., selecting a schedule pattern or checking a date), that information is processed locally in your browser. We do not store your specific parenting schedule or banking queries in a database.
                    </p>
                    <p>
                        <strong>Analytics:</strong> We may use standard web analytics tools to understand general usage patterns (e.g., "how many users visited the India page vs US page"). This data is aggregated and anonymized.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">2. Shared Links</h2>
                    <p>
                        When you use the "Share" feature, the application generates a unique URL containing the parameters of your schedule (e.g., <code>?schedule=alternating</code>). This URL allows the recipient to see the same calculate result. Anyone with the link can view that specific result.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">3. Third-Party Services</h2>
                    <p>
                        We may use third-party hosting and content delivery networks (scripts, fonts) required to run the site. These providers may collect standard server logs (IP addresses) for security and performance monitoring.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">4. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please <Link to="/contact" className="text-indigo-600 dark:text-indigo-400 underline">contact us</Link>.
                    </p>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default Privacy;
