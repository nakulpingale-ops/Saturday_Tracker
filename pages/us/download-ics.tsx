import React from 'react';
import SEOPageLayout from '../../layouts/SEOPageLayout';
import { Download, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const USDownloadICS = () => {
    return (
        <SEOPageLayout
            title="Download Co-Parenting Calendar (ICS)"
            h1="Download Your Schedule (ICS)"
            description="How to export your parenting schedule to Google Calendar, Outlook, and Apple Calendar."
            showUSCTA={true}
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">What is an ICS file?</h2>
                    <p className="mb-4">
                        An ICS file (Internet Calendar Scheduling) is a standard file format that allows you to import calendar events into almost any calendar application.
                    </p>
                    <p className="mb-4">
                        When you click "Download ICS" on SaturdayTracker, we generate a file containing all your "Mine" weekends for the selected year.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">How to Import</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-blue-500" /> Google Calendar
                            </h3>
                            <ol className="list-decimal pl-5 text-sm space-y-2">
                                <li>Open Google Calendar on desktop.</li>
                                <li>Click the Gear icon {'>'} Settings.</li>
                                <li>Click "Import & Export".</li>
                                <li>Upload the <code>.ics</code> file you downloaded from us.</li>
                            </ol>
                        </div>

                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-sky-500" /> Outlook
                            </h3>
                            <ol className="list-decimal pl-5 text-sm space-y-2">
                                <li>Open Outlook.</li>
                                <li>File {'>'} Open & Export {'>'} Import/Export.</li>
                                <li>Select "Import an iCalendar (.ics) file".</li>
                                <li>Select the file and choose "Import".</li>
                            </ol>
                        </div>

                        <div className="bg-white dark:bg-white/5 p-6 rounded-lg border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-red-500" /> Apple Calendar
                            </h3>
                            <ol className="list-decimal pl-5 text-sm space-y-2">
                                <li>File {'>'} Import.</li>
                                <li>Select the <code>.ics</code> file.</li>
                                <li>Choose which calendar to add the events to (e.g., "Home" or "Work").</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section className="text-center pt-8">
                    <p className="mb-6 text-slate-600 dark:text-gray-400">
                        Ready to get your file?
                    </p>
                    <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition">
                        <Download className="w-5 h-5" /> Generate My ICS File
                    </Link>
                </section>
            </div>
        </SEOPageLayout>
    );
};

export default USDownloadICS;
