import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Calendar, ArrowRight, Building2, Info } from 'lucide-react';

// Generate all 2nd/4th Saturdays for a year
const generate2nd4thSaturdays = (year: number) => {
    const saturdays: { date: Date; type: '2nd' | '4th' }[] = [];

    for (let month = 0; month < 12; month++) {
        let d = new Date(year, month, 1);
        while (d.getDay() !== 6) d.setDate(d.getDate() + 1);

        const secondSat = new Date(year, month, d.getDate() + 7);
        const fourthSat = new Date(year, month, d.getDate() + 21);

        saturdays.push({ date: secondSat, type: '2nd' });
        if (fourthSat.getMonth() === month) {
            saturdays.push({ date: fourthSat, type: '4th' });
        }
    }

    return saturdays;
};

const IndiaBankHoliday: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const year = 2026;
    const saturdays = useMemo(() => generate2nd4thSaturdays(year), []);

    useEffect(() => {
        document.title = '2nd & 4th Saturday Bank Holiday 2026 India | RBI Holiday Calendar';
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
                "name": "Why are banks closed on 2nd and 4th Saturdays in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Under a Government of India notification issued under Section 25 of the Negotiable Instruments Act, 1881, effective September 1, 2015, banks observe holidays on the 2nd and 4th Saturdays of every month to provide work-life balance for employees while maintaining accessible banking services."
                }
            },
            {
                "@type": "Question",
                "name": "Are ATMs and online banking available on 2nd/4th Saturdays?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, ATMs operate 24/7 including on bank holidays. Digital banking services like UPI, IMPS, and mobile banking are also available. However, RTGS and NEFT may have limited operations as per RBI guidelines."
                }
            },
            {
                "@type": "Question",
                "name": "Which banks follow the 2nd/4th Saturday holiday rule?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All scheduled commercial banks, cooperative banks, and RRBs (Regional Rural Banks) follow this rule. This includes public sector banks like SBI, private banks like HDFC and ICICI, as well as foreign banks operating in India."
                }
            },
            {
                "@type": "Question",
                "name": "Is the 5th Saturday a holiday for banks?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, banks are OPEN on the 5th Saturday of a month. Only the 2nd and 4th Saturdays are holidays. Banks also remain open on the 1st and 3rd Saturdays."
                }
            }
        ]
    };

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SaturdayTracker India Bank Holiday Calendar",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
        },
        "description": "Free tool to check 2nd and 4th Saturday bank holidays in India for 2026."
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0a0514] text-slate-900 dark:text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

            <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

            <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-12">
                {/* Breadcrumb */}
                <nav className="text-sm text-slate-500 dark:text-gray-500 mb-6">
                    <Link to="/" className="hover:text-emerald-500">Home</Link>
                    <span className="mx-2">/</span>
                    <span>India Banking</span>
                    <span className="mx-2">/</span>
                    <span className="text-slate-700 dark:text-white">2nd & 4th Saturday Holidays</span>
                </nav>

                {/* H1 */}
                <h1 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
                    2nd and 4th Saturday Bank Holidays in India
                </h1>

                <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 max-w-2xl">
                    Complete list of 2nd and 4th Saturday bank holidays for {year}. Understand the RBI's Saturday
                    holiday rule and plan your banking activities accordingly.
                </p>

                {/* Calculator CTA */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg shadow-emerald-500/20 mb-12"
                >
                    <Building2 className="w-5 h-5" />
                    Check Today's Bank Status
                    <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Content Section */}
                <article className="prose prose-slate dark:prose-invert max-w-none mb-12">
                    <h2>Understanding India's 2nd & 4th Saturday Bank Holidays</h2>
                    <p>
                        Since September 1, 2015, all banks in India observe holidays on the Second and Fourth
                        Saturdays of every month. This rule was implemented following a Government of India
                        notification issued under <strong>Section 25 of the Negotiable Instruments Act, 1881</strong>.
                    </p>

                    <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/30 rounded-lg p-4 my-6 not-prose">
                        <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-1">Official Legal Basis</p>
                                <p className="text-sm text-emerald-700 dark:text-emerald-300">
                                    Government of India notification under Section 25 of the Negotiable Instruments Act, 1881,
                                    effective September 1, 2015. RBI has aligned payment systems (e.g., RTGS not operated on 2nd/4th Saturdays).
                                </p>
                            </div>
                        </div>
                    </div>

                    <h3>Which Days Are Banks Open?</h3>
                    <p>
                        Here's a simple breakdown of Saturday bank operations:
                    </p>
                    <ul>
                        <li><strong>1st Saturday:</strong> Banks are OPEN (full working day)</li>
                        <li><strong>2nd Saturday:</strong> Banks are CLOSED (holiday)</li>
                        <li><strong>3rd Saturday:</strong> Banks are OPEN (full working day)</li>
                        <li><strong>4th Saturday:</strong> Banks are CLOSED (holiday)</li>
                        <li><strong>5th Saturday:</strong> Banks are OPEN (when a month has 5 Saturdays)</li>
                    </ul>

                    <h3>Impact on Banking Services</h3>
                    <p>
                        While bank branches are closed on 2nd and 4th Saturdays, several services remain available:
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Availability on 2nd/4th Saturday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ATM Cash Withdrawal</td>
                                <td>✅ Available 24/7</td>
                            </tr>
                            <tr>
                                <td>UPI Payments</td>
                                <td>✅ Available 24/7</td>
                            </tr>
                            <tr>
                                <td>IMPS Transfers</td>
                                <td>✅ Available 24/7</td>
                            </tr>
                            <tr>
                                <td>RTGS Transfers</td>
                                <td>⚠️ Not operated</td>
                            </tr>
                            <tr>
                                <td>NEFT Transfers</td>
                                <td>⚠️ Limited operations</td>
                            </tr>
                            <tr>
                                <td>Cheque Clearing</td>
                                <td>❌ Not processed</td>
                            </tr>
                            <tr>
                                <td>Branch Services</td>
                                <td>❌ Branches closed</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Banks Covered Under This Rule</h3>
                    <p>
                        All types of banks in India follow this Saturday holiday schedule:
                    </p>
                    <ul>
                        <li><strong>Public Sector Banks:</strong> SBI, Bank of Baroda, Punjab National Bank, Canara Bank, etc.</li>
                        <li><strong>Private Sector Banks:</strong> HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra, etc.</li>
                        <li><strong>Foreign Banks:</strong> Citibank, HSBC, Standard Chartered, etc.</li>
                        <li><strong>Regional Rural Banks (RRBs):</strong> All RRBs across India</li>
                        <li><strong>Cooperative Banks:</strong> District and State cooperative banks</li>
                    </ul>
                </article>

                {/* 2026 Calendar */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">All 2nd & 4th Saturdays in {year}</h2>
                    <p className="text-slate-600 dark:text-gray-400 mb-6">
                        Banks will be closed on the following dates:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {saturdays.map((sat, i) => (
                            <div key={i} className="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-500/30 rounded-lg p-3 text-center">
                                <div className="text-xs text-rose-600 dark:text-rose-400 font-medium">{sat.type} Saturday</div>
                                <div className="font-bold text-rose-800 dark:text-rose-200">
                                    {new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(sat.date)}
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
                            <h3 className="font-bold text-lg mb-2">Why are banks closed on 2nd and 4th Saturdays in India?</h3>
                            <p className="text-slate-600 dark:text-gray-400">
                                Under a Government of India notification issued under Section 25 of the Negotiable Instruments Act, 1881,
                                effective September 1, 2015, banks observe holidays on the 2nd and 4th Saturdays to provide
                                work-life balance for employees while maintaining accessible banking services.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-white/5 rounded-lg p-6 border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-2">Are ATMs and online banking available on 2nd/4th Saturdays?</h3>
                            <p className="text-slate-600 dark:text-gray-400">
                                Yes, ATMs operate 24/7 including on bank holidays. Digital banking services like UPI, IMPS,
                                and mobile banking are also available. However, RTGS and NEFT may have limited operations.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-white/5 rounded-lg p-6 border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-2">Which banks follow the 2nd/4th Saturday holiday rule?</h3>
                            <p className="text-slate-600 dark:text-gray-400">
                                All scheduled commercial banks, cooperative banks, and RRBs follow this rule. This includes
                                public sector banks like SBI, private banks like HDFC and ICICI, as well as foreign banks.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-white/5 rounded-lg p-6 border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-2">Is the 5th Saturday a holiday for banks?</h3>
                            <p className="text-slate-600 dark:text-gray-400">
                                No, banks are OPEN on the 5th Saturday of a month. Only the 2nd and 4th Saturdays are holidays.
                                Banks also remain open on the 1st and 3rd Saturdays.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <aside className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-500/30 rounded-lg p-4 mb-12">
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                        <strong>⚠️ Disclaimer:</strong> Informational only; confirm with your bank. Individual bank branches
                        may observe additional holidays based on state-specific gazetted holidays.
                    </p>
                </aside>

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
                                <div className="font-semibold">2nd & 4th Weekend Visitation</div>
                                <div className="text-sm text-slate-500 dark:text-gray-500">US custody schedule calculator</div>
                            </div>
                        </Link>
                        <Link
                            to="/us/alternating-weekends-calendar"
                            className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 hover:border-purple-500 transition-colors"
                        >
                            <Calendar className="w-8 h-8 text-purple-500" />
                            <div>
                                <div className="font-semibold">Alternating Weekends</div>
                                <div className="text-sm text-slate-500 dark:text-gray-500">Every-other-weekend custody</div>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default IndiaBankHoliday;
