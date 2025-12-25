import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded overflow-hidden mb-4 transition-all duration-300 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative z-10"
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-400 dark:text-gray-400 text-xs">•</span>
          <span className="font-medium text-slate-800 dark:text-gray-200 text-sm sm:text-base">
            {question}
          </span>
        </div>
        <div className={`bg-slate-50 dark:bg-white rounded-full p-0.5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-3 h-3 text-slate-900 dark:text-black" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out bg-slate-50/50 dark:bg-black/40 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Are banks closed on Second and Fourth Saturdays?",
      answer: "Yes, in many regions (including India), banks remain closed on both the Second and Fourth Saturdays of every month. They typically function on the First, Third, and Fifth Saturdays."
    },
    {
      question: "What does SaturdayTracker do?",
      answer: "SaturdayTracker instantly calculates and verifies whether today (or any upcoming date) is a Second or Fourth Saturday, helping you plan around banking holidays and office closures."
    },
    {
      question: "How are Second and Fourth Saturdays calculated?",
      answer: "A Second Saturday always falls between the 8th and 14th of the month. A Fourth Saturday always falls between the 22nd and 28th of the month."
    },
    {
      question: "Why are these specific Saturdays important?",
      answer: "They are designated as official holidays for public sector banks, many private banks, and various government offices to provide employees with scheduled time off."
    },
    {
      question: "Does every month have a Second and Fourth Saturday?",
      answer: "Yes. Since every month has at least 28 days, it is mathematically guaranteed to have a First, Second, Third, and Fourth Saturday."
    },
    {
      question: "What about the Fifth Saturday?",
      answer: "Months with 29, 30, or 31 days can occasionally have a Fifth Saturday. Banks and offices usually remain OPEN on Fifth Saturdays unless it coincides with a specific public holiday."
    },
    {
      question: "Is SaturdayTracker free to use?",
      answer: "Yes, SaturdayTracker is a free tool designed to help you plan your schedule effectively."
    }
  ];

  return (
    <section className="w-full max-w-[1000px] mx-auto px-4 mb-32 relative z-10">
      <h3 className="text-3xl font-bold mb-2 pl-6 sm:pl-8 text-slate-900 dark:text-white uppercase tracking-tight transition-colors duration-300">
        FAQS
      </h3>
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