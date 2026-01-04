import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import USVisitationCalendar from './pages/us/2nd-and-4th-weekend-visitation-calendar';
import USAlternatingCalendar from './pages/us/alternating-weekends-calendar';
import IndiaBankHoliday from './pages/india/2nd-and-4th-saturday-bank-holiday';
import ShareUS from './pages/share/us';
import ShareIndia from './pages/share/india';

// Placeholder Pages - Will be replaced by real content files
import Disclaimer from './pages/legal/Disclaimer';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import About from './pages/legal/About';
import Contact from './pages/legal/Contact';
import Sitemap from './pages/legal/Sitemap';

import USFirstThirdFifth from './pages/us/first-third-fifth-weekend-schedule';
import US223Schedule from './pages/us/2-2-3-parenting-schedule';
import USHowToCount from './pages/us/how-to-count-weekends';
import USHolidayConflicts from './pages/us/holiday-conflicts-makeup-time';
import USDownloadICS from './pages/us/download-ics';
import US2026SecondFourth from './pages/us/second-and-fourth-weekend-visitation-calendar-2026';
import US2026Alternating from './pages/us/alternating-weekends-calendar-2026';

import IndiaLanding from './pages/india/index';
import IndiaIsSecond from './pages/india/is-this-saturday-second-saturday';
import IndiaIsFourth from './pages/india/is-this-saturday-fourth-saturday';
import IndiaRule from './pages/india/second-and-fourth-saturday-rule';
import India2025List from './pages/india/second-and-fourth-saturdays-2025';
import India2026List from './pages/india/second-and-fourth-saturdays-2026';
import IndiaBanksOpenOthers from './pages/india/banks-open-first-third-fifth-saturday';
import PatternGenerator from './pages/PatternGenerator';

import ScrollToTop from './components/ScrollToTop';

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* Core */}
                <Route path="/" element={<HomePage />} />

                {/* Visual Fix for India specific checking */}
                <Route path="/india" element={<HomePage defaultTab="india" />} />

                {/* US Pages */}
                <Route path="/us/second-and-fourth-weekend-visitation-calendar" element={<USVisitationCalendar />} />
                <Route path="/us/2nd-and-4th-weekend-visitation-calendar" element={<USVisitationCalendar />} />
                <Route path="/us/alternating-weekends-calendar" element={<USAlternatingCalendar />} />
                <Route path="/us/first-third-fifth-weekend-schedule" element={<USFirstThirdFifth />} />
                <Route path="/us/2-2-3-parenting-schedule" element={<US223Schedule />} />
                <Route path="/us/how-to-count-weekends" element={<USHowToCount />} />
                <Route path="/us/holiday-conflicts-makeup-time" element={<USHolidayConflicts />} />
                <Route path="/us/download-ics" element={<USDownloadICS />} />
                <Route path="/us/second-and-fourth-weekend-visitation-calendar-2026" element={<US2026SecondFourth />} />
                <Route path="/us/alternating-weekends-calendar-2026" element={<US2026Alternating />} />

                {/* India Pages */}
                <Route path="/india/2nd-and-4th-saturday-bank-holiday" element={<IndiaBankHoliday />} />
                <Route path="/india/is-this-saturday-second-saturday" element={<IndiaIsSecond />} />
                <Route path="/india/is-this-saturday-fourth-saturday" element={<IndiaIsFourth />} />
                <Route path="/india/second-and-fourth-saturday-rule" element={<IndiaRule />} />
                <Route path="/india/second-and-fourth-saturdays-2025" element={<India2025List />} />
                <Route path="/india/second-and-fourth-saturdays-2026" element={<India2026List />} />
                <Route path="/india/banks-open-first-third-fifth-saturday" element={<IndiaBanksOpenOthers />} />

                {/* Tools */}
                <Route path="/pattern-generator" element={<PatternGenerator />} />
                <Route path="/share/us" element={<ShareUS />} />
                <Route path="/share/india" element={<ShareIndia />} />

                {/* Legal / Resources */}
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sitemap" element={<Sitemap />} />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
