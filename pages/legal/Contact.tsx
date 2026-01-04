import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <SEOPageLayout
            title="Contact Us"
            h1="Contact Us"
            description="Get in touch with the SaturdayTracker team."
        >
            <div className="space-y-8">
                <section>
                    <p className="text-lg mb-6">
                        We value your feedback. If you have questions about the tool, suggestions for new features, or believe you've found a bug, please reach out.
                    </p>

                    <div className="p-6 bg-slate-100 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10">
                        <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-gray-200 flex items-center gap-2">
                            <Mail className="w-5 h-5" /> Email
                        </h2>
                        <p className="mb-4">
                            You can email us directly at:
                        </p>
                        <a href="mailto:support@saturdaytracker.com" className="text-indigo-600 dark:text-indigo-400 text-lg font-bold hover:underline">
                            support@saturdaytracker.com
                        </a>
                        <p className="text-sm text-slate-500 mt-2">
                            (This is a placeholder address. Ensure you configure your actual support email.)
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-gray-200">Partnerships</h2>
                    <p>
                        For partnership inquiries related to the <strong>HolBank Network</strong>, please include "Partnership" in your subject line.
                    </p>
                </section>

                <section>
                    <p className="text-sm text-slate-500">
                        By contacting us, you agree to our <Link to="/privacy" className="underline">Privacy Policy</Link>.
                    </p>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default Contact;
