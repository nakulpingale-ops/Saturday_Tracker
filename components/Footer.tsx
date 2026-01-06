import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0514] text-slate-400 font-sans border-t border-white/10" aria-label="Footer">
      {/* MEGA LINKS SECTION */}
      <div className="w-full bg-gradient-to-b from-[#1a0b2e] to-[#0f0518] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-8">
            Co-Parenting & Banking Quick Links
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* US Co-Parenting Group */}
            <div>
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-6 border-b border-white/10 pb-2">
                Co-Parenting Weekend Calendars
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                <li>
                  <Link to="/us/second-and-fourth-weekend-visitation-calendar/" className="text-[13px] hover:text-white transition-colors duration-200 block">
                    Second and Fourth Weekend Visitation Calendar
                  </Link>
                </li>
                <li>
                  <Link to="/us/first-third-fifth-weekend-schedule/" className="text-[13px] hover:text-white transition-colors duration-200 block">
                    First, Third and Fifth Weekend Parenting Schedule
                  </Link>
                </li>
                <li>
                  <Link to="/us/alternating-weekends-calendar/" className="text-[13px] hover:text-white transition-colors duration-200 block">
                    Alternating Weekends Calendar (Every Other Weekend)
                  </Link>
                </li>

                <li>
                  <Link to="/us/how-to-count-weekends/" className="text-[13px] hover:text-white transition-colors duration-200 block">
                    How to Count Weekends (Friday vs Saturday Start)
                  </Link>
                </li>
                <li>
                  <Link to="/us/holiday-conflicts-makeup-time/" className="text-[13px] hover:text-white transition-colors duration-200 block">
                    Holiday Conflicts and Makeup Time (Overview)
                  </Link>
                </li>
                <li>
                  <Link to="/us/download-ics/" className="text-[13px] text-indigo-300 hover:text-white transition-colors duration-200 block">
                    Download Co-Parenting Calendar (ICS)
                  </Link>
                </li>
                <li>
                  <Link to="/share/us" className="text-[13px] text-indigo-300 hover:text-white transition-colors duration-200 block">
                    Share My Weekend (Link Generator)
                  </Link>
                </li>
                {/* Optional Year Pages */}
                <li>
                  <Link to="/us/second-and-fourth-weekend-visitation-calendar-2026/" className="text-[13px] text-slate-500 hover:text-white transition-colors duration-200 block">
                    Second and Fourth Weekend Calendar 2026
                  </Link>
                </li>
                <li>
                  <Link to="/us/alternating-weekends-calendar-2026/" className="text-[13px] text-slate-500 hover:text-white transition-colors duration-200 block">
                    Alternating Weekends Calendar 2026
                  </Link>
                </li>
              </ul>
            </div>

            {/* India Quick Links Group */}
            <div>
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-6 border-b border-white/10 pb-2">
                India Bank Saturday Quick Links
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                <li>
                  <Link to="/" className="text-[13px] hover:text-white transition-colors duration-200 block">
                    Is Today a Second or Fourth Saturday?
                  </Link>
                </li>
                <li>
                  <Link to="/india/is-this-saturday-second-saturday/" className="text-[13px] hover:text-white transition-colors duration-200 block">
                    Is This Saturday a Second Saturday?
                  </Link>
                </li>
                <li>
                  <Link to="/india/is-this-saturday-fourth-saturday/" className="text-[13px] hover:text-white transition-colors duration-200 block">
                    Is This Saturday a Fourth Saturday?
                  </Link>
                </li>
                <li>
                  <Link to="/india/second-and-fourth-saturday-rule/" className="text-[13px] hover:text-white transition-colors duration-200 block">
                    Second and Fourth Saturday Bank Holiday Rule (Explained)
                  </Link>
                </li>
                <li>
                  <Link to="/india/second-and-fourth-saturdays-2025/" className="text-[13px] hover:text-white transition-colors duration-200 block">
                    Second and Fourth Saturdays List (2025)
                  </Link>
                </li>
                <li>
                  <Link to="/india/second-and-fourth-saturdays-2026/" className="text-[13px] hover:text-white transition-colors duration-200 block">
                    Second and Fourth Saturdays List (2026)
                  </Link>
                </li>
                <li>
                  <Link to="/india/banks-open-first-third-fifth-saturday/" className="text-[13px] hover:text-white transition-colors duration-200 block">
                    Are Banks Open on 1st / 3rd / 5th Saturday?
                  </Link>
                </li>

                <li className="sm:col-span-2">
                  <a
                    href="https://bankholidaycalendar.com/"
                    target="_blank"
                    rel="noopener"
                    className="text-[13px] text-emerald-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
                  >
                    Bank Holiday Calendar by State (2026)
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left Columns (Navigation) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* 1. HolBank Network */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                HolBank Network
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://saturdaytracker.com/" className="text-[13px] text-slate-300 hover:text-white transition-colors block">
                    Saturday Tracker
                  </a>
                </li>
                <li>
                  <a href="https://bankholidaycalendar.com/" target="_blank" rel="noopener" className="text-[13px] text-slate-300 hover:text-white transition-colors block">
                    Bank Holiday Calendar
                  </a>
                </li>

                <li>
                  <a href="#" className="text-[13px] text-slate-600 hover:text-slate-400 transition-colors block cursor-default">
                    Plan Long Weekends (WEEKODE)
                  </a>
                </li>
              </ul>
            </div>

            {/* 2. Co-Parenting Tools */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Co-Parenting Tools
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/us/second-and-fourth-weekend-visitation-calendar/" className="text-[13px] hover:text-white transition-colors block">
                    Second and Fourth Weekend Checker
                  </Link>
                </li>
                <li>
                  <Link to="/us/alternating-weekends-calendar/" className="text-[13px] hover:text-white transition-colors block">
                    Alternating Weekends Checker
                  </Link>
                </li>

                <li>
                  <Link to="/us/how-to-count-weekends/" className="text-[13px] hover:text-white transition-colors block">
                    How to Count Weekends
                  </Link>
                </li>
                <li>
                  <Link to="/us/download-ics/" className="text-[13px] hover:text-white transition-colors block">
                    Download ICS Calendar
                  </Link>
                </li>
                <li>
                  <Link to="/share/us" className="text-[13px] hover:text-white transition-colors block">
                    Share My Weekend
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3. India Banking */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                India Banking
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/india/second-and-fourth-saturday-rule/" className="text-[13px] hover:text-white transition-colors block">
                    Second & Fourth Saturday Rule
                  </Link>
                </li>
                <li>
                  <Link to="/india/second-and-fourth-saturdays-2026/" className="text-[13px] hover:text-white transition-colors block">
                    Second & Fourth Saturdays 2026
                  </Link>
                </li>
                <li>
                  <Link to="/india/banks-open-first-third-fifth-saturday/" className="text-[13px] hover:text-white transition-colors block">
                    Banks Open on 1st/3rd/5th Saturday?
                  </Link>
                </li>

                <li>
                  <a href="https://bankholidaycalendar.com/bank-holiday-calendar-2026" target="_blank" rel="noopener" className="text-[13px] hover:text-white transition-colors block">
                    Bank Holiday Calendar 2026
                  </a>
                </li>
              </ul>
            </div>

            {/* 4. Resources */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-[13px] hover:text-white transition-colors block">
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/privacy" className="text-[13px] hover:text-white transition-colors block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-[13px] hover:text-white transition-colors block">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="text-[13px] hover:text-white transition-colors block">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap.xml" className="text-[13px] hover:text-white transition-colors block">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side (Disclaimer Block) */}
          <div className="md:col-span-4 md:text-right flex flex-col gap-4 md:items-end">
            <div className="space-y-1">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                © {currentYear} HOLBANK IP. ALL RIGHTS RESERVED.
              </p>
              <p className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold">
                SATURDAYTRACKER.COM — VERIFIED SCHEDULING UTILITY.
              </p>
            </div>
            <div className="space-y-2 max-w-xs">
              <p className="text-[10px] text-slate-600 leading-relaxed">
                Co-parenting results are informational only and do not replace your court order.
              </p>
              <p className="text-[10px] text-slate-600 leading-relaxed">
                Banking info may vary by state/notification; confirm with your bank.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;