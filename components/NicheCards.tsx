import React from 'react';

const NicheCards: React.FC = () => {
  const niches = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "For Co-Parenting & Custody",
      description: "Plan visitation schedules years in advance. Ensure compliance with shared custody agreements that rely on specific monthly Saturday patterns."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "For Global Payroll",
      description: "Calculate billable weekend hours accurately for staff working on a 2nd or 4th Saturday basis. Automate payroll cycles based on rotating weekend shifts."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "For Recurring Events",
      description: "Schedule club meetings, municipal services, or farmers markets. Never miss a 3rd Saturday gathering due to calendar confusion."
    }
  ];

  return (
    // UPDATED LINE BELOW: Changed max-w-7xl to max-w-[970px] and added mb-[100px]
    <div className="w-full max-w-[1000px] mx-auto px-4 py-12 mb-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {niches.map((niche, i) => (
          <div
            key={i}
            className="group p-8 rounded bg-slate-50 dark:bg-slate-800/50 border border-gray-100 dark:border-white/10 hover:border-emerald-500/30 dark:hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-none transition-all duration-300"
          >
            <div className="bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 w-16 h-16 rounded flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              {niche.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">{niche.title}</h4>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
              {niche.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NicheCards;