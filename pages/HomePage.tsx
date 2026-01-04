import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroNew from '../components/HeroNew';
import UpcomingSchedule from '../components/UpcomingSchedule';
import Calculator from '../components/Calculator';
import ResultsArea from '../components/ResultsArea';
import NicheCards from '../components/NicheCards';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import BankRulesArticle from '../components/BankRulesArticle';
import { CalculationSettings, SaturdayPattern } from '../types';

const HomePage: React.FC = () => {
    // --- Theme State ---
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    // --- Calculator State ---
    const [calcSettings, setCalcSettings] = useState<CalculationSettings>({
        pattern: 'Second & Fourth Saturday' as any,
        startDate: new Date().toISOString().split('T')[0],
        durationYears: 1
    });

    const [calcResults, setCalcResults] = useState<{ date: Date; occurrence: number }[]>([]);

    // --- Theme Effects ---
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDarkMode(false);
        } else {
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    // --- Calculation Logic ---
    const handleCalculate = (settings: CalculationSettings) => {
        setCalcSettings(settings);

        const results: { date: Date; occurrence: number }[] = [];
        const [startYear, startMonth, startDay] = settings.startDate.split('-').map(Number);
        const startDateObj = new Date(startYear, startMonth - 1, startDay);
        const endDateObj = new Date(startYear + settings.durationYears, startMonth - 1, startDay);

        let currentMonth = new Date(startDateObj.getFullYear(), startDateObj.getMonth(), 1);

        while (currentMonth < endDateObj) {
            const year = currentMonth.getFullYear();
            const month = currentMonth.getMonth();

            const saturdaysInMonth: Date[] = [];
            let d = new Date(year, month, 1);

            while (d.getDay() !== 6) {
                d.setDate(d.getDate() + 1);
            }

            while (d.getMonth() === month) {
                saturdaysInMonth.push(new Date(d));
                d.setDate(d.getDate() + 7);
            }

            if ((settings.pattern as string) === 'Second & Fourth Saturday') {
                if (saturdaysInMonth[1] && saturdaysInMonth[1] >= startDateObj && saturdaysInMonth[1] < endDateObj) {
                    results.push({ date: saturdaysInMonth[1], occurrence: 2 });
                }
                if (saturdaysInMonth[3] && saturdaysInMonth[3] >= startDateObj && saturdaysInMonth[3] < endDateObj) {
                    results.push({ date: saturdaysInMonth[3], occurrence: 4 });
                }
            } else {
                const occurrenceMap: Record<string, number> = {
                    'First Saturday': 1,
                    'Second Saturday': 2,
                    'Third Saturday': 3,
                    'Fourth Saturday': 4,
                    'Fifth Saturday': 5
                };
                const targetOccurrence = occurrenceMap[settings.pattern as string] || 1;
                const targetIndex = targetOccurrence - 1;

                if (saturdaysInMonth[targetIndex]) {
                    const foundDate = saturdaysInMonth[targetIndex];
                    if (foundDate >= startDateObj && foundDate < endDateObj) {
                        results.push({ date: foundDate, occurrence: targetOccurrence });
                    }
                }
            }

            currentMonth = new Date(year, month + 1, 1);
        }

        results.sort((a, b) => a.date.getTime() - b.date.getTime());
        setCalcResults(results);
    };

    const handleReset = () => {
        setCalcResults([]);
    };

    return (
        <div className="min-h-screen flex flex-col relative isolate bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:bg-none dark:bg-[#0a0514] transition-all duration-500 bg-cover bg-fixed bg-no-repeat">

            {/* Top Purple Gradient Glow */}
            <div className="absolute top-0 left-0 w-full h-[1200px] bg-purple-glow opacity-0 dark:opacity-60 z-[-1] pointer-events-none transition-opacity duration-300 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]" />

            <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

            <main className="flex-grow flex flex-col w-full relative z-10">



                {/* 1. The New Hero with Toggle */}
                <HeroNew isDarkMode={isDarkMode} />

                {/* Generator temporarily removed */}



                {/* 3. The Calendar Grid */}
                <div className="mt-[40px]">
                    <UpcomingSchedule isDarkMode={isDarkMode} />
                </div>

                {/* 4. Global Use Cases (Niche Cards) */}
                <NicheCards />

                {/* 5. The Questions */}
                <FAQ />

                {/* 6. The SEO Article */}
                <BankRulesArticle />

                {/* 7. Huge HolBank Logo */}
                <div className="w-full mx-auto px-4 py-12 md:py-24 flex flex-col items-center select-none opacity-90 hover:opacity-100 transition-opacity overflow-hidden">
                    <h1 className="text-[19.6vw] md:text-[553px] font-black tracking-tighter leading-[0.7] uppercase font-sans text-center">
                        <span className="font-light text-slate-300 dark:text-white">HOL</span>
                        <span className="text-[#7d3cff]">BANK</span>
                    </h1>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
