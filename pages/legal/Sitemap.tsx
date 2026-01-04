import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../../lib/routes'; // We need to check if we can import this, or if we need to refine it. 
// Assuming FOOTER_LINKS is not yet available in lib because I haven't moved it yet. I will define the lists locally for now to avoid circular dependency issues if any.

const Sitemap = () => {
    return (
        <SEOPageLayout
            title="Sitemap"
            h1="Sitemap"
            description="Overview of all pages on SaturdayTracker.com"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <section>
                    <h2 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400 border-b border-indigo-100 dark:border-white/10 pb-2">
                        US Co-Parenting
                    </h2>
                    <ul className="space-y-3">
                        <li><Link to="/us/second-and-fourth-weekend-visitation-calendar/" className="hover:underline">Second & Fourth Weekend Calendar</Link></li>
                        <li><Link to="/us/alternating-weekends-calendar/" className="hover:underline">Alternating Weekends Schedule</Link></li>
                        <li><Link to="/us/first-third-fifth-weekend-schedule/" className="hover:underline">First, Third & Fifth Weekend Schedule</Link></li>
                        <li><Link to="/us/2-2-3-parenting-schedule/" className="hover:underline">2-2-3 Parenting Schedule</Link></li>
                        <li><Link to="/us/how-to-count-weekends/" className="hover:underline">How to Count Weekends (Fri vs Sat)</Link></li>
                        <li><Link to="/us/holiday-conflicts-makeup-time/" className="hover:underline">Holiday Conflicts & Makeup Time</Link></li>
                        <li><Link to="/us/download-ics/" className="hover:underline">Download ICS Calendar</Link></li>
                        <li><Link to="/share/us" className="hover:underline">Share My Weekend</Link></li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-[#7d3cff] border-b border-purple-100 dark:border-white/10 pb-2">
                        India Banking
                    </h2>
                    <ul className="space-y-3">
                        <li><Link to="/" className="hover:underline">India Bank Saturday Checker</Link></li>
                        <li><Link to="/india/second-and-fourth-saturday-rule/" className="hover:underline">2nd & 4th Saturday Rule Explained</Link></li>
                        <li><Link to="/india/is-this-saturday-second-saturday/" className="hover:underline">Is This Saturday the Second Saturday?</Link></li>
                        <li><Link to="/india/is-this-saturday-fourth-saturday/" className="hover:underline">Is This Saturday the Fourth Saturday?</Link></li>
                        <li><Link to="/india/banks-open-first-third-fifth-saturday/" className="hover:underline">Are Banks Open on 1st/3rd/5th Saturdays?</Link></li>
                        <li><Link to="/pattern-generator/" className="hover:underline">Pattern Generator</Link></li>
                        <li><Link to="/share/india" className="hover:underline">Share India Results</Link></li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-gray-200 border-b border-slate-200 dark:border-white/10 pb-2">
                        Resources
                    </h2>
                    <ul className="space-y-3">
                        <li><Link to="/about" className="hover:underline">About Us</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                        <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
                        <li><Link to="/disclaimer" className="hover:underline">Disclaimer</Link></li>
                        <li><Link to="/sitemap.xml" className="hover:underline text-indigo-500">XML Sitemap</Link></li>
                    </ul>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default Sitemap;
