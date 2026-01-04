import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InternalPageLayout from '../../layouts/InternalPageLayout';
import { Calendar, Download, ArrowRight, Check } from 'lucide-react';

// Helper to generate 2nd/4th weekends for the year
const generate2nd4thWeekends = (year: number) => {
    const weekends: { date: Date; type: string }[] = [];

    for (let month = 0; month < 12; month++) {
        // Find 2nd Saturday
        let d = new Date(year, month, 1);
        while (d.getDay() !== 6) d.setDate(d.getDate() + 1);
        const firstSat = d.getDate();
        const secondSat = new Date(year, month, firstSat + 7);
        const fourthSat = new Date(year, month, firstSat + 21);

        weekends.push({ date: secondSat, type: '2nd' });
        if (fourthSat.getMonth() === month) {
            weekends.push({ date: fourthSat, type: '4th' });
        }
    }

    return weekends;
};

const USVisitationCalendar: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const year = new Date().getFullYear();
    const weekends = generate2nd4thWeekends(year);

    useEffect(() => {
        // Set page title
        document.title = '2nd and 4th Weekend Visitation Calendar 2026 | Co-Parenting Schedule Tool';

        // Theme
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
                "name": "What is a 2nd and 4th weekend visitation schedule?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A 2nd and 4th weekend visitation schedule is a custody arrangement where the non-custodial parent has the child on the second and fourth weekends of each month. This is commonly used in Standard Possession Orders (SPO) in states like Texas."
                }
            },
            {
                "@type": "Question",
                "name": "How do you count weekends in a month for custody?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Weekends are typically counted by when Friday falls. The first Friday of the month marks the first weekend, the second Friday marks the second weekend, and so on. Some orders count by Saturday instead."
                }
            },
            {
                "@type": "Question",
                "name": "What happens when there are 5 weekends in a month?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When a month has 5 weekends, the parent with 1st, 3rd, and 5th weekend visitation gets an extra weekend. This often creates back-to-back weekends for the non-custodial parent."
                }
            }
        ]
    };

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SaturdayTracker Visitation Calendar",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Free online tool to calculate 2nd and 4th weekend visitation schedules for co-parenting."
    };

    return (
        <InternalPageLayout>
            {/* JSON-LD Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

            {/* Content (No explicit main padding needed as Layout handles it, but keep some structure if needed) */}
            <div className="w-full">
                {/* Breadcrumb */}
                <nav className="text-sm text-slate-500 dark:text-gray-500 mb-6">
                    <Link to="/" className="hover:text-indigo-500">Home</Link>
                    <span className="mx-2">/</span>
                    <span>US Co-Parenting</span>
                    <span className="mx-2">/</span>
                    <span className="text-slate-700 dark:text-white">2nd & 4th Weekend Calendar</span>
                </nav>

                {/* H1 */}
                <h1 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                    2nd and 4th Weekend Visitation Calendar
                </h1>

                <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 max-w-2xl">
                    Plan your custody weekends for {year} and beyond. Our free calculator helps parents following
                    Standard Possession Orders (SPO) track exactly which weekends belong to each parent.
                </p>

                {/* Calculator CTA */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg shadow-indigo-500/20 mb-12"
                >
                    <Calendar className="w-5 h-5" />
                    Open Interactive Calendar
                    <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Content Section */}
                <article className="prose prose-slate dark:prose-invert max-w-none mb-12">
                    <h2>Understanding the 2nd and 4th Weekend Schedule</h2>
                    <p>
                        The 2nd and 4th weekend visitation schedule is one of the most common custody arrangements
                        in the United States. Under this arrangement, typically found in Standard Possession Orders (SPO),
                        the custodial parent retains possession of the child during the 2nd and 4th weekends of each month,
                        while the non-custodial parent has visitation rights on the 1st, 3rd, and 5th weekends.
                    </p>

                    <h3>How Weekends Are Counted</h3>
                    <p>
                        Most court orders define weekends by when Friday falls in the month. Here's how it works:
                    </p>
                    <ul>
                        <li><strong>Friday-based counting (default):</strong> The weekend that contains the first Friday of the month is the "1st weekend," and so on.</li>
                        <li><strong>Saturday-based counting:</strong> Some orders specify that weekends are counted by when Saturday falls.</li>
                    </ul>
                    <p>
                        Our calculator supports both methods. Simply select your preferred counting method in the dropdown
                        to see accurate dates for your specific situation.
                    </p>

                    <h3>The 5th Weekend Rule</h3>
                    <p>
                        When a month has 5 Fridays (and therefore 5 weekends), this creates what's called a "5th weekend."
                        Under the standard possession order:
                    </p>
                    <ul>
                        <li>The parent with 1st, 3rd, and 5th weekend visitation gets this extra weekend</li>
                        <li>This often creates back-to-back weekends for the non-custodial parent</li>
                        <li>Months with 5 weekends occur 4-5 times per year</li>
                    </ul>

                    <h3>States Using Standard Possession Orders</h3>
                    <p>
                        While the 2nd/4th weekend schedule is used nationwide, it's particularly common in:
                    </p>
                    <ul>
                        <li><strong>Texas:</strong> The Texas Family Code's Standard Possession Order is the foundation for many similar orders</li>
                        <li><strong>Utah:</strong> Utah Code Section 30-3-35 outlines similar weekend patterns</li>
                        <li><strong>California:</strong> Many California custody orders follow this pattern</li>
                        <li><strong>Florida:</strong> Common in Florida parenting plans</li>
                    </ul>
                </article>

                {/* Quick Reference Table */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">2nd & 4th Saturdays in {year}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {weekends.slice(0, 8).map((w, i) => (
                            <div key={i} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-center">
                                <div className="text-sm text-slate-500 dark:text-gray-500">{w.type} Weekend</div>
                                <div className="font-bold">
                                    {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(w.date)}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQs */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-white/5 rounded-lg p-6 border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-2">What is a 2nd and 4th weekend visitation schedule?</h3>
                            <p className="text-slate-600 dark:text-gray-400">
                                A 2nd and 4th weekend visitation schedule is a custody arrangement where the non-custodial
                                parent has the child on the second and fourth weekends of each month. This is commonly used
                                in Standard Possession Orders (SPO) in states like Texas.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-white/5 rounded-lg p-6 border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-2">How do you count weekends in a month for custody?</h3>
                            <p className="text-slate-600 dark:text-gray-400">
                                Weekends are typically counted by when Friday falls. The first Friday of the month marks
                                the first weekend, the second Friday marks the second weekend, and so on. Some orders
                                count by Saturday instead.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-white/5 rounded-lg p-6 border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-2">What happens when there are 5 weekends in a month?</h3>
                            <p className="text-slate-600 dark:text-gray-400">
                                When a month has 5 weekends, the parent with 1st, 3rd, and 5th weekend visitation gets
                                an extra weekend. This often creates back-to-back weekends for the non-custodial parent.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Internal Links */}
                <section className="bg-slate-100 dark:bg-white/5 rounded-xl p-6 border border-slate-200 dark:border-white/10">
                    <h3 className="font-bold text-lg mb-4">Related Resources</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link
                            to="/us/alternating-weekends-calendar"
                            className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 hover:border-indigo-500 transition-colors"
                        >
                            <Calendar className="w-8 h-8 text-indigo-500" />
                            <div>
                                <div className="font-semibold">Alternating Weekends Calendar</div>
                                <div className="text-sm text-slate-500 dark:text-gray-500">Every-other-weekend custody schedules</div>
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

export default USVisitationCalendar;
