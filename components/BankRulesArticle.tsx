import React from 'react';

const BankRulesArticle = () => {
  return (
    <article className="mb-20 max-w-4xl mx-auto w-full prose prose-slate dark:prose-invert prose-sm md:prose-base border-t border-slate-200 dark:border-white/10 pt-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white text-center">
        The Universal Guide to Saturday Schedules
      </h2>

      <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-12">

        {/* SECTION 1: US CO-PARENTING */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🇺🇸</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">
              Co-Parenting & Custody Schedules
            </h3>
          </div>
          <p>
            In the United States, particularly in states like Texas and Utah, custody schedules often follow a
            <strong> Standard Possession Order (SPO)</strong>. This legal framework relies heavily on the specific count of the weekend.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 list-none pl-0">
            <li className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg border border-purple-100 dark:border-purple-500/20">
              <strong className="block text-purple-700 dark:text-purple-400 mb-1">Custodial Parent</strong>
              Typically retains possession on the <strong>2nd and 4th weekends</strong> of the month.
            </li>
            <li className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-500/20">
              <strong className="block text-blue-700 dark:text-blue-400 mb-1">Non-Custodial Parent</strong>
              Typically has visitation rights on the <strong>1st, 3rd, and 5th weekends</strong> of a month.
            </li>
          </ul>
          <p className="mt-4 text-sm bg-slate-100 dark:bg-white/5 p-3 rounded">
            <strong>The "Fifth Weekend" Rule:</strong> Months with five Fridays/Saturdays create a "bonus" weekend.
            Under most standard orders, the parent with the 1st and 3rd weekends (Non-Custodial) also gets the 5th weekend,
            resulting in back-to-back possession weekends.
          </p>
        </section>

        {/* SECTION 2: INDIA BANKING */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🇮🇳</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">
              Banking Holidays (RBI Rules)
            </h3>
          </div>
          <p>
            Since 2015, the Reserve Bank of India (RBI) and the Indian Banks' Association (IBA) have standardized
            Saturday holidays to provide work-life balance for bank employees while keeping services accessible.
          </p>
          <div className="mt-4 border-l-4 border-emerald-500 pl-4 py-1">
            <h4 className="font-bold text-slate-900 dark:text-white m-0">The 2nd & 4th Rule</h4>
            <p className="m-0 mt-1">
              Banks are strictly <strong>CLOSED</strong> on the Second and Fourth Saturdays.
              They remain <strong>OPEN</strong> on the First, Third, and Fifth Saturdays (unless a gazetted holiday falls on that day).
            </p>
          </div>
        </section>

        {/* SECTION 3: SHIFT WORK */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🏭</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">
              Shift Work & Emergency Services
            </h3>
          </div>
          <p>
            Healthcare workers, firefighters, police officers, and manufacturing staff often operate on
            rotating rosters (such as the "Pitman Schedule" or "2-2-3").
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>
              <strong>The "Every Other Weekend" Pattern:</strong> Many employees work a 14-day cycle where they are off every alternating weekend.
            </li>
            <li>
              <strong>The Impact of the 5th Saturday:</strong> Rotating schedules often desync when a month has 5 weekends.
              Our tool helps shift workers visualize exactly which Saturdays they are working months in advance.
            </li>
          </ul>
        </section>

      </div>
    </article>
  );
};

export default BankRulesArticle;