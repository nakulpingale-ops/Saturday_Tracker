import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InternalPageLayout from '../../layouts/InternalPageLayout';
import { Calendar, ArrowRight, RotateCw } from 'lucide-react';

const USAlternatingCalendar: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const year = new Date().getFullYear();

    useEffect(() => {
        document.title = 'Alternating Weekends Calendar 2026 | Custody Schedule Calculator';
        const savedTheme = localStorage.getItem('theme');
        setIsDarkMode(savedTheme !== 'light');
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(prev => !prev);

    // JSON-LD Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is an alternating weekends custody schedule?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An alternating weekends schedule means each parent has the child every other weekend, regardless of which weekend number it is in the month. This creates a simple, predictable pattern."
                }
            },
            {
                "@type": "Question",
                "name": "How does alternating weekends differ from 2nd/4th weekends?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Alternating weekends follow a strict every-other-weekend pattern, while 2nd/4th weekend schedules are based on calendar position. Alternating schedules are simpler but may fall on different numbered weekends each month."
                }
            },
            {
                "@type": "Question",
                "name": "What happens to alternating weekends during holidays?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Holiday schedules typically override the regular alternating weekend pattern. Most custody orders have specific provisions for major holidays like Thanksgiving, Christmas, and summer breaks."
                }
            },
            {
                "@type": "Question",
                "name": "Can I sync my alternating weekend schedule with my phone calendar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! SaturdayTracker allows you to download your custody schedule as an ICS file, which can be imported into Google Calendar, Apple Calendar, Outlook, and other calendar apps."
                }
            }
        ]
    };

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SaturdayTracker Alternating Weekends Calculator",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Free online tool to calculate alternating weekend custody schedules for co-parents."
    };

    return (
        <InternalPageLayout>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

            <div className="w-full">
                {/* Breadcrumb */}
                <nav className="text-sm text-slate-500 dark:text-gray-500 mb-6">
                    <Link to="/" className="hover:text-indigo-500">Home</Link>
                    <span className="mx-2">/</span>
                    <span>US Co-Parenting</span>
                    <span className="mx-2">/</span>
                    <span className="text-slate-700 dark:text-white">Alternating Weekends</span>
                </nav>

                {/* H1 */}
                <h1 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                    Alternating Weekends Custody Calendar
                </h1>

                <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 max-w-2xl">
                    The simplest custody schedule explained. Track your every-other-weekend parenting time with our
                    free calculator and never miss your turn again.
                </p>

                {/* Calculator CTA */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg shadow-purple-500/20 mb-12"
                >
                    <RotateCw className="w-5 h-5" />
                    Generate My Schedule
                    <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Content Section */}
                <article className="prose prose-slate dark:prose-invert max-w-none mb-12">
                    <h2>What is an Alternating Weekends Schedule?</h2>
                    <p>
                        An alternating weekends custody schedule is exactly what it sounds like: each parent has the
                        child every other weekend, in a simple, predictable rotation. Unlike schedules based on
                        calendar positions (like 2nd and 4th weekends), alternating weekends follow a strict
                        every-other-weekend pattern regardless of which numbered weekend it is.
                    </p>

                    <h3>How Alternating Weekends Work</h3>
                    <p>
                        Here's the basic pattern:
                    </p>
                    <ul>
                        <li><strong>Week 1:</strong> Parent A has the weekend</li>
                        <li><strong>Week 2:</strong> Parent B has the weekend</li>
                        <li><strong>Week 3:</strong> Parent A has the weekend</li>
                        <li><strong>Week 4:</strong> Parent B has the weekend</li>
                        <li>...and so on, indefinitely</li>
                    </ul>
                    <p>
                        This pattern continues regardless of month boundaries, holidays, or how many weekends
                        are in a particular month.
                    </p>

                    <h3>Alternating vs. 2nd/4th Weekend Schedules</h3>
                    <p>
                        Many parents wonder which schedule is better. Here's a comparison:
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Alternating Weekends</th>
                                <th>2nd/4th Weekends</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Predictability</td>
                                <td>Very simple - every other weekend</td>
                                <td>Requires calendar checking</td>
                            </tr>
                            <tr>
                                <td>5th Weekend Handling</td>
                                <td>Just continues the pattern</td>
                                <td>Special rules apply</td>
                            </tr>
                            <tr>
                                <td>Monthly Balance</td>
                                <td>May vary (2-3 weekends per month)</td>
                                <td>Consistent 2 weekends per parent</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Holiday Considerations</h3>
                    <p>
                        Most custody agreements have specific provisions for holidays that override the regular
                        alternating pattern. Common approaches include:
                    </p>
                    <ul>
                        <li><strong>Alternating holidays yearly:</strong> One parent gets Christmas in even years, the other in odd years</li>
                        <li><strong>Split holidays:</strong> Morning with one parent, evening with the other</li>
                        <li><strong>Extended summer periods:</strong> Longer blocks of time during summer vacation</li>
                    </ul>
                    <p>
                        Our calculator helps you plan around these variations by generating a complete year's schedule
                        that you can review and adjust for holiday modifications.
                    </p>

                    <h3>Syncing Your Schedule</h3>
                    <p>
                        SaturdayTracker makes it easy to keep track of your alternating weekend schedule:
                    </p>
                    <ol>
                        <li>Select "Alternating Weekends" from the schedule type dropdown</li>
                        <li>Choose your start date (the first weekend of your rotation)</li>
                        <li>Download the ICS file to import into your phone's calendar</li>
                        <li>Share with your co-parent to stay synchronized</li>
                    </ol>
                </article>

                {/* FAQs */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-white/5 rounded-lg p-6 border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-2">What is an alternating weekends custody schedule?</h3>
                            <p className="text-slate-600 dark:text-gray-400">
                                An alternating weekends schedule means each parent has the child every other weekend,
                                regardless of which weekend number it is in the month. This creates a simple, predictable pattern.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-white/5 rounded-lg p-6 border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-2">How does alternating weekends differ from 2nd/4th weekends?</h3>
                            <p className="text-slate-600 dark:text-gray-400">
                                Alternating weekends follow a strict every-other-weekend pattern, while 2nd/4th weekend
                                schedules are based on calendar position. Alternating schedules are simpler but may fall
                                on different numbered weekends each month.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-white/5 rounded-lg p-6 border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-2">What happens to alternating weekends during holidays?</h3>
                            <p className="text-slate-600 dark:text-gray-400">
                                Holiday schedules typically override the regular alternating weekend pattern. Most custody
                                orders have specific provisions for major holidays like Thanksgiving, Christmas, and summer breaks.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-white/5 rounded-lg p-6 border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-2">Can I sync my alternating weekend schedule with my phone calendar?</h3>
                            <p className="text-slate-600 dark:text-gray-400">
                                Yes! SaturdayTracker allows you to download your custody schedule as an ICS file, which can
                                be imported into Google Calendar, Apple Calendar, Outlook, and other calendar apps.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Internal Links */}
                <section className="bg-slate-100 dark:bg-white/5 rounded-xl p-6 border border-slate-200 dark:border-white/10">
                    <h3 className="font-bold text-lg mb-4">Related Resources</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link
                            to="/us/2nd-and-4th-weekend-visitation-calendar"
                            className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 hover:border-indigo-500 transition-colors"
                        >
                            <Calendar className="w-8 h-8 text-indigo-500" />
                            <div>
                                <div className="font-semibold">2nd & 4th Weekend Calendar</div>
                                <div className="text-sm text-slate-500 dark:text-gray-500">Standard Possession Order schedules</div>
                            </div>
                        </Link>
                        <Link
                            to="/india/2nd-and-4th-saturday-bank-holiday"
                            className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 hover:border-emerald-500 transition-colors"
                        >
                            <Calendar className="w-8 h-8 text-emerald-500" />
                            <div>
                                <div className="font-semibold">India Bank Holidays</div>
                                <div className="text-sm text-slate-500 dark:text-gray-500">2nd & 4th Saturday banking holidays</div>
                            </div>
                        </Link>
                    </div>
                </section>
            </div>
        </InternalPageLayout>
    );
};

export default USAlternatingCalendar;
