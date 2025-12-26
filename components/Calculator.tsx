import React, { useState } from 'react';
import { CalculationSettings, SaturdayPattern } from '../types';

interface CalculatorProps {
  onCalculate: (settings: CalculationSettings) => void;
  onReset: () => void;
  initialSettings: CalculationSettings;
}

const Calculator: React.FC<CalculatorProps> = ({ onCalculate, onReset, initialSettings }) => {
  const [settings, setSettings] = useState<CalculationSettings>(initialSettings);
  const [activePreset, setActivePreset] = useState<'co-parenting' | 'shift-work' | 'academy' | 'bank-holidays' | null>('co-parenting');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;

    // If user manually changes pattern, clear the preset selection
    if (name === 'pattern') {
      setActivePreset(null);
    }

    setSettings(prev => ({
      ...prev,
      [name]: name === 'durationYears' ? parseInt(value) : value
    }));
  };

  const handlePresetClick = (preset: 'co-parenting' | 'shift-work' | 'academy' | 'bank-holidays') => {
    setActivePreset(preset);

    let newPattern: SaturdayPattern;

    switch (preset) {
      case 'co-parenting':
        newPattern = SaturdayPattern.Both; // 2nd and 4th
        break;
      case 'bank-holidays':
        newPattern = SaturdayPattern.Both; // 2nd and 4th
        break;
      case 'shift-work':
        newPattern = SaturdayPattern.First; // 1st
        break;
      case 'academy':
        newPattern = SaturdayPattern.Second; // 2nd
        break;
    }

    setSettings(prev => ({
      ...prev,
      pattern: newPattern
    }));
  };

  const handleReset = () => {
    // FIX: Hard reset to fresh defaults instead of using potentially stale 'initialSettings' prop
    const freshDefaults: CalculationSettings = {
      pattern: SaturdayPattern.Both, // Default start pattern (Co-Parenting)
      startDate: new Date().toISOString().split('T')[0], // Today
      durationYears: 1
    };

    setSettings(freshDefaults);
    setActivePreset('co-parenting'); // Reset to default preset
    onReset(); // Tell parent to clear results
  };

  return (
    <div>

      {/* --- HEADER SECTION START --- */}
      <div className="mb-3 px-8">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center">
            <span className="bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 p-2 rounded mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </span>
            Universal Saturday Pattern Generator & Calculator
          </h2>

          {/* Reset CTA */}

        </div>

        {/* Use Case Badges */}
      </div>
      {/* --- HEADER SECTION END --- */}

      <div className="bg-white dark:bg-white/5 rounded shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-white/10 p-8 transition-colors duration-300">

        {/* Use Case Badges & Reset */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mr-2 uppercase tracking-wider">
              PLAN NOW:
            </span>

            <button
              onClick={() => handlePresetClick('co-parenting')}
              className={`inline-flex items-center px-3 py-1.5 rounded text-[11px] font-semibold border transition-all duration-200 ${activePreset === 'co-parenting'
                ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-500 text-purple-700 dark:text-purple-300 opacity-100 ring-1 ring-purple-500/20'
                : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300 opacity-60 hover:opacity-100 hover:border-slate-300 dark:hover:border-white/20 cursor-pointer'
                }`}
            >
              🇺🇸 Co-Parenting
            </button>

            <button
              onClick={() => handlePresetClick('bank-holidays')}
              className={`inline-flex items-center px-3 py-1.5 rounded text-[11px] font-semibold border transition-all duration-200 ${activePreset === 'bank-holidays'
                ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-500 text-purple-700 dark:text-purple-300 opacity-100 ring-1 ring-purple-500/20'
                : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300 opacity-60 hover:opacity-100 hover:border-slate-300 dark:hover:border-white/20 cursor-pointer'
                }`}
            >
              🇮🇳 Bank Saturdays
            </button>

            <button
              onClick={() => handlePresetClick('shift-work')}
              className={`inline-flex items-center px-3 py-1.5 rounded text-[11px] font-semibold border transition-all duration-200 ${activePreset === 'shift-work'
                ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-500 text-purple-700 dark:text-purple-300 opacity-100 ring-1 ring-purple-500/20'
                : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300 opacity-60 hover:opacity-100 hover:border-slate-300 dark:hover:border-white/20 cursor-pointer'
                }`}
            >
              🏭 Shift Work
            </button>

            <button
              onClick={() => handlePresetClick('academy')}
              className={`inline-flex items-center px-3 py-1.5 rounded text-[11px] font-semibold border transition-all duration-200 ${activePreset === 'academy'
                ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-500 text-purple-700 dark:text-purple-300 opacity-100 ring-1 ring-purple-500/20'
                : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300 opacity-60 hover:opacity-100 hover:border-slate-300 dark:hover:border-white/20 cursor-pointer'
                }`}
            >
              🇰🇷 Academy Schedules
            </button>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-emerald-500 dark:text-slate-500 dark:hover:text-emerald-400 transition-colors"
            title="Reset to defaults"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Pattern Selection */}
          <div className="md:col-span-4 flex flex-col space-y-2">
            <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Pattern / Schedule</label>
            <div className="relative">
              <select
                name="pattern"
                value={settings.pattern}
                onChange={handleChange}
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 rounded px-4 py-3 text-sm text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="Second & Fourth Saturday" className="dark:bg-[#0a0514]">Second & Fourth Saturday</option>
                <option value="First Saturday" className="dark:bg-[#0a0514]">First Saturday</option>
                <option value="Second Saturday" className="dark:bg-[#0a0514]">Second Saturday</option>
                <option value="Third Saturday" className="dark:bg-[#0a0514]">Third Saturday</option>
                <option value="Fourth Saturday" className="dark:bg-[#0a0514]">Fourth Saturday</option>
                <option value="Fifth Saturday" className="dark:bg-[#0a0514]">Fifth Saturday</option>
              </select>
              {/* Custom Arrow Icon */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Start Date */}
          <div className="md:col-span-3 flex flex-col space-y-2">
            <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Start Date</label>
            <div className="relative">
              <input
                name="startDate"
                type="date"
                value={settings.startDate}
                onChange={handleChange}
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 rounded px-4 py-3 text-sm text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 outline-none cursor-pointer [color-scheme:light] dark:[color-scheme:dark]"
              />
            </div>
          </div>

          {/* Duration */}
          <div className="md:col-span-2 flex flex-col space-y-2">
            <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Duration</label>
            <div className="relative">
              <select
                name="durationYears"
                value={settings.durationYears}
                onChange={handleChange}
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 rounded px-4 py-3 text-sm text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer"
              >
                <option value={1} className="dark:bg-[#0a0514]">Next 1 Year</option>
                <option value={2} className="dark:bg-[#0a0514]">Next 2 Years</option>
                <option value={5} className="dark:bg-[#0a0514]">Next 5 Years</option>
                <option value={10} className="dark:bg-[#0a0514]">Next 10 Years</option>
              </select>
              {/* Custom Arrow Icon */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="md:col-span-3">
            <button
              onClick={() => onCalculate(settings)}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2 active:scale-95"
            >
              <span>Calculate Dates</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;