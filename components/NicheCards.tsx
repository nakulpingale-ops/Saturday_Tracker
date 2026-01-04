import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const NicheCards: React.FC = () => {
  const niches = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "For Co-Parenting & Custody",
      description: "Quickly confirm whether an upcoming weekend is yours based on common U.S. visitation patterns like 1st/3rd/5th or 2nd/4th weekends. Share the result and keep everyone aligned.",
      bullets: [
        "Check 2nd & 4th weekend visitation (Standard Possession Order patterns)",
        "Choose whether weekends start Friday or Saturday (court-order dependent)",
        "Share a clean link with your co-parent (no India banking info)"
      ],
      primaryCTA: { label: "Check my parenting weekend", link: "/us/second-and-fourth-weekend-visitation-calendar/" },
      secondaryCTA: { label: "How to count weekends (Fri vs Sat start)", link: "/us/how-to-count-weekends/" }
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "For Global Payroll",
      description: "Planning payroll or vendor payments around banking availability? Instantly verify India’s second and fourth Saturday closures and avoid cut-off surprises.",
      bullets: [
        "Confirm if banks are closed on the 2nd and 4th Saturday",
        "Plan payment processing windows when Saturday banking is limited",
        "Cross-check with state/holiday lists when needed"
      ],
      primaryCTA: { label: "Check India bank Saturdays", link: "/india/" },
      secondaryCTA: { label: "View 2026 bank Saturday list", link: "/india/second-and-fourth-saturdays-2026/" }
    }
  ];

  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 py-12 mb-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        {niches.map((niche, i) => (
          <div
            key={i}
            className="flex flex-col group p-8 rounded bg-slate-50 dark:bg-slate-800/50 border border-gray-100 dark:border-white/10 hover:border-emerald-500/30 dark:hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-none transition-all duration-300"
          >
            <div className="bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 w-16 h-16 rounded flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              {niche.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">{niche.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mb-6">
              {niche.description}
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              {niche.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start text-[13px] text-slate-600 dark:text-slate-400 leading-snug">
                  <span className="text-emerald-500 mr-2 mt-1">✓</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <Link
                to={niche.primaryCTA.link}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[13px] font-bold transition-colors shadow-lg shadow-emerald-500/20"
              >
                {niche.primaryCTA.label}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                to={niche.secondaryCTA.link}
                className="w-full inline-block text-[12px] font-medium text-slate-400 hover:text-emerald-500 transition-colors text-center"
              >
                {niche.secondaryCTA.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NicheCards;