import React from 'react';
import { Link } from 'react-router-dom';

const BankRulesArticle = () => {
  return (
    <article className="mb-20 max-w-4xl mx-auto w-full prose prose-slate dark:prose-invert prose-sm md:prose-base border-t border-slate-200 dark:border-white/10 pt-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white text-center">
        The Universal Guide to Saturday Schedules
      </h2>

      <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-12">
        <p className="text-lg text-center max-w-2xl mx-auto">
          Saturday schedules show up in banking rules, custody weekends, and payroll planning.
          SaturdayTracker helps you identify which Saturday it is (first, second, third, fourth, or fifth) and plan accordingly—without doing calendar math.
        </p>

        {/* SECTION 1: INDIA BANKING */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🇮🇳</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">
              India: Second and Fourth Saturday Bank Holidays
            </h3>
          </div>
          <p>
            In India, banks are typically closed on the second and fourth Saturday of each month (often written as 2nd/4th).
            The first, third, and fifth Saturdays are generally working days, but state holidays and special notifications
            can override normal banking hours. Use SaturdayTracker to confirm the Saturday count and plan visits,
            deposits, or <Link to="/india/" className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline">payment runs</Link>.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1">
            <li><strong>Second Saturday:</strong> usually closed</li>
            <li><strong>Fourth Saturday:</strong> usually closed</li>
            <li><strong>Fifth Saturday (if present):</strong> usually open</li>
          </ul>
        </section>

        {/* SECTION 2: US CO-PARENTING */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🇺🇸</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">
              U.S. Co-Parenting: Weekend Counts (1st/3rd/5th vs 2nd/4th)
            </h3>
          </div>
          <p>
            Many co-parenting schedules reference the ‘weekend number’ of a month—like first and third weekends,
            or <Link to="/us/second-and-fourth-weekend-visitation-calendar/" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">second and fourth weekends</Link>.
            Courts and regions can define weekend start/end differently (Friday evening vs Saturday morning).
            SaturdayTracker helps you count weekends consistently and share the outcome.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1">
            <li>Pick the date (or upcoming Saturday)</li>
            <li>Choose whether your weekend starts Friday or Saturday</li>
            <li>Get a clear ‘this weekend: mine / not mine’ answer and share it</li>
          </ul>
        </section>

        {/* SECTION 3: PAYROLL & OPS */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🏦</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">
              Payroll & Ops: Planning Around Saturday Banking Availability
            </h3>
          </div>
          <p>
            For payroll teams and operations, Saturdays can impact processing timelines—especially when bank branches
            or settlement windows are limited. Use SaturdayTracker to confirm whether the upcoming Saturday is a
            second/fourth Saturday and plan cutoffs accordingly.
          </p>
        </section>


        <div className="pt-8 border-t border-slate-200 dark:border-white/10 text-center">
          <p className="text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 italic">
            Informational only—confirm with your bank, employer policy, or court order.
          </p>
        </div>

      </div>
    </article>
  );
};

export default BankRulesArticle;