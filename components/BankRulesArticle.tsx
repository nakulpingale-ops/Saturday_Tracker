import React from 'react';

const BankRulesArticle = () => {
  return (
    <article className="mb-20 max-w-3xl mx-auto w-full prose prose-slate dark:prose-invert prose-sm md:prose-base border-t border-slate-200 dark:border-white/10 pt-12 px-6">
      <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
        Global Banking & Weekend Schedules
      </h2>
      <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">

        {/* GLOBAL SECTION */}
        <section>
          <p>
            Weekend banking policies vary significantly across the globe. While the transition to a
            standard 5-day workweek is common in North America and parts of Europe, many regions
            still operate on unique schedules that can catch travelers and businesses off guard.
          </p>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-4">
            International Standards
          </h3>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>USA & UK:</strong> Most major banks are closed on Sundays. Some branches operate
              on Saturdays with reduced hours (typically 9:00 AM to 1:00 PM), but this is not guaranteed for all locations.
            </li>
            <li>
              <strong>Middle East:</strong> In many Gulf countries, the weekend falls on Friday and Saturday,
              meaning banks are fully operational on Sundays.
            </li>
            <li>
              <strong>Europe:</strong> Central banks and smaller regional branches often remain closed
              for the entire weekend to align with market hours.
            </li>
          </ul>
        </section>

        {/* INDIA SPECIFIC SECTION */}
        <section className="bg-slate-100 dark:bg-white/5 p-6 rounded border border-slate-200 dark:border-white/10 mt-6">
          <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">
            <span className="text-xl">🇮🇳</span> Specific Rules for India
          </h3>
          <p className="mb-3">
            India follows a unique "Alternate Saturday" policy standardized by the RBI and IBA since 2015.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">● Closed:</span>
              <span>Banks are closed on the <strong>Second and Fourth Saturdays</strong> of every month.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500 font-bold">● Open:</span>
              <span>Banks remain fully operational on the <strong>First, Third, and Fifth Saturdays</strong>.</span>
            </li>
          </ul>
        </section>

        {/* DIGITAL BANKING */}
        <section>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-4">
            Digital Services are 24/7
          </h3>
          <p>
            Regardless of your location, digital banking infrastructure remains active on weekends and holidays.
            Global services like SWIFT (for international transfers) may pause processing until the next working day,
            but instant domestic transfers (UPI in India, Faster Payments in UK, Zelle in US) work 24/7.
          </p>
        </section>

      </div>
    </article>
  );
};

export default BankRulesArticle;