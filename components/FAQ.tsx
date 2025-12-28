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
      question: "What does SaturdayTracker do?",
      answer: "SaturdayTracker is a universal date calculator. It instantly generates schedules for 1st, 2nd, 3rd, 4th, and 5th Saturdays. It is used for Bank Holiday checking (2nd & 4th), Co-Parenting schedules, and Shift Work planning."
    },
    {
      question: "How do I calculate custody / co-parenting weekends?",
      answer: "Select the 'Co-Parenting' badge above. Most Standard Possession Orders (SPO) assign the 1st, 3rd, and 5th weekends to one parent, and the 2nd and 4th weekends to the other. Our tool instantly lists these dates for the entire year so you can plan ahead."
    },
    {
      question: "Who gets the '5th Weekend' in a custody schedule?",
      answer: "In a standard 1st/3rd/5th schedule, the parent who has the 1st and 3rd weekends typically gets the 5th weekend as well. This occurs about 4 times a year. Our calculator explicitly labels 'Fifth Saturdays' to help you avoid confusion."
    },
    {
      question: "Are banks closed on Second and Fourth Saturdays?",
      answer: "Yes, in many regions (including India/RBI rules), banks remain closed on both the Second and Fourth Saturdays of every month. They typically function on the First, Third, and Fifth Saturdays."
    },
    {
      question: "How are Second and Fourth Saturdays calculated?",
      answer: "A Second Saturday always falls between the 8th and 14th of the month. A Fourth Saturday always falls between the 22nd and 28th. Our algorithm calculates this mathematically for any year."
    },
    {
      question: "Can I print or share these schedules?",
      answer: "Yes. You can generate a list for the 'Next 1 Year' or 'Next 2 Years' using the dropdown menu, then copy the list to share with your co-parent, employer, or employees."
    },
    {
      question: "Does every month have a 5th Saturday?",
      answer: "No. A 5th Saturday only occurs in months that have 29, 30, or 31 days AND start on a Friday or Saturday. These are effectively 'bonus' weekends for 1st/3rd/5th schedule holders."
    },
    {
      question: "Is SaturdayTracker free to use?",
      answer: "Yes, SaturdayTracker is a free tool designed to help you plan your schedule effectively."
    }
  ];

  return (
    <section className="w-full max-w-[1000px] mx-auto px-4 mb-32 relative z-10">
      <div className="flex items-center mb-6 justify-start px-6">
        <span className="bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 p-2 rounded mr-3">
          <HelpCircle className="w-5 h-5" />
        </span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
          FAQs
        </h3>
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