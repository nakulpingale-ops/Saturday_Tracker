import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 border border-gray-100 dark:border-white/10 hover:border-emerald-500/30 dark:hover:border-emerald-500/50 rounded overflow-hidden mb-4 transition-all duration-300 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative z-10"
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-400 dark:text-gray-400 text-xs">•</span>
          <span className="font-medium text-slate-800 dark:text-gray-200 text-sm sm:text-base pr-4">
            {question}
          </span>
        </div>
        <div className={`transform transition-transform duration-300 flex-shrink-0 text-slate-400 dark:text-slate-500 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out bg-slate-50/50 dark:bg-black/40 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 text-slate-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-white/5">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Is today a second or fourth Saturday?",
      answer: "SaturdayTracker counts the Saturdays in the current month and tells you whether today (or an upcoming Saturday) is the first, second, third, fourth, or fifth Saturday."
    },
    {
      question: "Are banks closed on the second and fourth Saturday in India?",
      answer: "In most cases, banks are closed on the second and fourth Saturday. However, local holidays or special notifications can change working hours—so confirm with your bank if it’s critical."
    },
    {
      question: "Are banks open on the first, third, and fifth Saturday?",
      answer: "Generally yes, but state holidays and bank-specific working hours can vary. If it’s a time-sensitive visit, confirm with your branch."
    },
    {
      question: "How do I count which Saturday it is?",
      answer: "Find the first Saturday of the month, then count forward by weeks. SaturdayTracker does this instantly for any date you select."
    },
    {
      question: "Do U.S. custody schedules use ‘weekends’ or ‘Saturdays’?",
      answer: "Most schedules reference ‘weekends,’ but the exact start (Friday vs Saturday) depends on the court order. SaturdayTracker supports weekend counting so you can match your order’s definition."
    },
    {
      question: "What does ‘2nd/4th weekend visitation’ mean?",
      answer: "It means parenting time happens on the second and fourth weekend of each month. Your order may specify pickup/drop-off times—use those times when applying the result."
    },
    {
      question: "Can SaturdayTracker generate a calendar I can share?",
      answer: "Yes—where available, you can share a link to the result so the other person sees the same weekend calculation."
    },
    {
      question: "Can I add these dates to Google Calendar or Outlook?",
      answer: "If the export option is enabled, you can download an ICS calendar file and import it into Google Calendar, Apple Calendar, or Outlook."
    },
    {
      question: "What if a holiday overrides the schedule?",
      answer: "Many custody orders include holiday priority rules and makeup time. SaturdayTracker helps with weekend counting, but always follow your holiday provisions."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="w-full max-w-[1000px] mx-auto px-4 mb-32 relative z-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="flex items-center mb-6 justify-start px-6">
        <span className="bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 p-2 rounded mr-3">
          <HelpCircle className="w-5 h-5" />
        </span>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
          FAQs
        </h2>
      </div>
      <div className="flex flex-col">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
};


export default FAQ;