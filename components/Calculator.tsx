
import React, { useState, useEffect, useMemo } from 'react';
import { CalculationSettings, SaturdayPattern, CalculatorMode, CustodyBlock } from '../types';
import { useSearchParams } from 'react-router-dom';

interface CalculatorProps {
  onCalculate: (settings: CalculationSettings, custodyResults?: CustodyBlock[]) => void;
  onReset: () => void;
  initialSettings: CalculationSettings;
}

// Helper Logic (Pure Function)
const calculateCustodySchedule = (start: Date, durationMonths: number, startOwner: 'me' | 'other', preset: string): CustodyBlock[] => {
  const results: CustodyBlock[] = [];
  const endDate = new Date(start);
  endDate.setMonth(start.getMonth() + durationMonths);

  // Determine Pattern Cycle
  let cycleDurations: number[] = [2, 2, 3]; // Default 2-2-3

  if (preset === '2-2-5-5') {
    cycleDurations = [2, 2, 5, 5]; // 14 days
  } else if (preset === '3-4-4-3') {
    cycleDurations = [3, 4, 4, 3]; // 14 days
  } else {
    // Default 2-2-3 (Full 14 day cycle for correct loop iteration)
    cycleDurations = [2, 2, 3, 2, 2, 3];
  }

  const ownerA = startOwner;
  const ownerB = startOwner === 'me' ? 'other' : 'me';

  // Sequence of owners for each step in the duration array
  const ownersForSteps = cycleDurations.map((_, index) => index % 2 === 0 ? ownerA : ownerB);

  let currentDate = new Date(start);
  let loops = 0;

  while (currentDate < endDate && loops < 1000) {
    // Iterate through one full cycle
    for (let i = 0; i < cycleDurations.length; i++) {
      if (currentDate >= endDate) break;

      const duration = cycleDurations[i];
      const currentOwner = ownersForSteps[i];

      const blockStart = new Date(currentDate);
      const blockEnd = new Date(currentDate);
      blockEnd.setDate(blockEnd.getDate() + duration - 1);

      results.push({
        owner: currentOwner,
        startDate: blockStart,
        endDate: blockEnd,
        label: currentOwner === 'me' ? 'WITH ME' : 'WITH OTHER'
      });

      currentDate.setDate(currentDate.getDate() + duration);
    }
    loops++;
  }

  return results;
};

const Calculator: React.FC<CalculatorProps> = ({ onCalculate, onReset, initialSettings }) => {
  const [settings, setSettings] = useState<CalculationSettings>(initialSettings);
  const [activePreset, setActivePreset] = useState<'co-parenting' | 'shift-work' | 'academy' | 'bank-holidays' | null>('co-parenting');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [debugStatus, setDebugStatus] = useState<string>(''); // TEMP DEBUG
  const [searchParams] = useSearchParams();

  // Derived State: End Date Display
  // const derivedEndDate = useMemo(() => {
  //   if (settings.startDate && settings.durationMonths) {
  //     const d = new Date(settings.startDate);
  //     d.setMonth(d.getMonth() + settings.durationMonths);
  //     return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  //   }
  //   return '';
  // }, [settings.startDate, settings.durationMonths]);

  // --- Initial Load / deep link handling ---
  useEffect(() => {
    const modeParam = searchParams.get('mode');
    const presetParam = searchParams.get('preset');
    const startParam = searchParams.get('start');
    const ownerParam = searchParams.get('owner');

    if (modeParam === 'custody') {
      let preset = '2-2-3';
      if (presetParam === '223' || presetParam === '2-2-3') preset = '2-2-3';
      if (presetParam === '2-2-5-5') preset = '2-2-5-5';
      if (presetParam === '3-4-4-3') preset = '3-4-4-3';

      const newSettings: CalculationSettings = {
        ...settings,
        mode: 'custody',
        custodyPreset: preset as any,
        custodyStartOwner: (ownerParam === 'other') ? 'other' : 'me',
        startDate: startParam || new Date().toISOString().split('T')[0],
        durationMonths: 1 // Default to 1 month on reset/load
      };
      setSettings(newSettings);

      // Auto-run calculation
      const start = new Date(newSettings.startDate);
      const results = calculateCustodySchedule(start, newSettings.durationMonths || 1, newSettings.custodyStartOwner || 'me', newSettings.custodyPreset || '2-2-3');
      onCalculate(newSettings, results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    // Clear error for field
    if (errors[name]) setErrors({ ...errors, [name]: '' });

    if (name === 'pattern') {
      setActivePreset(null);
    }

    setSettings(prev => ({
      ...prev,
      [name]: (name === 'durationYears' || name === 'durationMonths') ? parseInt(value) : value
    }));
  };

  const handleResetInternal = () => {
    // Clear inputs to defaults
    const freshStart: CalculationSettings = {
      ...settings,
      custodyPreset: '2-2-3',
      startDate: new Date().toISOString().split('T')[0],
      custodyStartOwner: 'me',
      durationMonths: 1,
      mode: 'custody'
    };
    setSettings(freshStart);
    setErrors({});
    onReset(); // Clears results in parent
  };

  const handleCalculate = () => {
    // 1. INSTRUMENTATION
    console.log("[GENERATOR] Generate clicked", { timestamp: Date.now() });
    console.log("[GENERATOR] Current state snapshot", {
      preset: settings.custodyPreset,
      start: settings.startDate,
      owner: settings.custodyStartOwner,
      duration: settings.durationMonths
    });
    setDebugStatus('Generating...');

    // 2. VALIDATION
    const formErrors: { [key: string]: string } = {};
    if (!settings.startDate) formErrors['startDate'] = 'Required';

    if (Object.keys(formErrors).length > 0) {
      console.warn("[GENERATOR] Validation failed", formErrors);
      setErrors(formErrors);
      setDebugStatus('Error: Missing required fields');
      return;
    }

    try {
      const effectivePreset = settings.custodyPreset || '2-2-3';
      const effectiveStart = settings.startDate || new Date().toISOString().split('T')[0];
      const effectiveOwner = settings.custodyStartOwner || 'me';
      const effectiveDuration = settings.durationMonths || 1;

      // Always Run Custody Calculation
      const start = new Date(effectiveStart);
      console.log("[GENERATOR] Computing schedule...", { start, effectiveDuration, effectiveOwner, effectivePreset });

      const results = calculateCustodySchedule(start, effectiveDuration, effectiveOwner, effectivePreset);

      console.log("[GENERATOR] computation complete", { count: results.length });

      if (results.length === 0) {
        setDebugStatus('Warning: 0 blocks generated');
      } else {
        setDebugStatus(`Success: Generated ${results.length} blocks`);
      }

      const updatedSettings = {
        ...settings,
        custodyPreset: effectivePreset,
        startDate: effectiveStart,
        custodyStartOwner: effectiveOwner,
        durationMonths: effectiveDuration,
        mode: 'custody' as CalculatorMode
      };

      onCalculate(updatedSettings, results);

    } catch (err: any) {
      console.error("[GENERATOR] CRITICAL ERROR", err);
      setDebugStatus(`CRITICAL ERROR: ${err.message}`);
    }
  };

  return (
    <div>

      {/* --- HEADER SECTION START --- */}
      <div className="mb-3 mt-[35px] px-8">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center">
            <span className="bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 p-2 rounded mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </span>
            Custody Rotation Generator
          </h2>
          {/* RESET ICON with DEBUG RESET */}
          <button
            onClick={() => { handleResetInternal(); setDebugStatus(''); }}
            className="text-slate-400 hover:text-emerald-500 dark:text-slate-500 dark:hover:text-emerald-400 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            title="Reset Generator"
            aria-label="Reset generator"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          </button>
        </div>
      </div>
      {/* --- HEADER SECTION END --- */}

      <div className="bg-white dark:bg-white/5 rounded shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-white/10 p-4 sm:p-8 transition-colors duration-300">

        {/* --- CUSTODY MODE FORM --- */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.1fr_0.9fr_1.8fr_1.3fr] gap-3 items-end">
          {/* 1. My Rotation */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Rotation</label>
            <div className="relative">
              <select
                name="custodyPreset"
                value={settings.custodyPreset || '2-2-3'}
                onChange={(e) => setSettings({ ...settings, custodyPreset: e.target.value as any })}
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 rounded px-3 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer h-[42px]"
              >
                <option value="2-2-3" className="dark:bg-[#0a0514]">2-2-3 Rotation (50/50)</option>
                <option value="2-2-5-5" className="dark:bg-[#0a0514]">2-2-5-5 Rotation</option>
                <option value="3-4-4-3" className="dark:bg-[#0a0514]">3-4-4-3 Rotation</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          {/* 2. Start Date */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Start Date</label>
            <div className="relative">
              <input
                name="startDate"
                type="date"
                value={settings.startDate}
                onChange={handleChange}
                className={`w-full bg-gray-50 dark:bg-white/5 border ${errors.startDate ? 'border-red-500' : 'border-gray-200 dark:border-white/10'} hover:border-emerald-500 dark:hover:border-emerald-500 rounded px-3 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 outline-none cursor-pointer [color-scheme:light] dark:[color-scheme:dark] h-[42px]`}
              />
            </div>
            {errors.startDate && <span className="text-[10px] text-red-500 font-bold">{errors.startDate}</span>}
          </div>

          {/* 3. Duration (Months) */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Duration</label>
            <div className="relative">
              <select
                name="durationMonths"
                value={settings.durationMonths || 1}
                onChange={handleChange}
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 rounded px-3 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer h-[42px]"
              >
                <option value="1" className="dark:bg-[#0a0514]">1 Month</option>
                <option value="2" className="dark:bg-[#0a0514]">2 Months</option>
                <option value="3" className="dark:bg-[#0a0514]">3 Months</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          {/* 4. On Start Date Child is With... */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider truncate">Who has child?</label>
            <div className="flex bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded p-1 h-[42px]">
              <button
                onClick={() => setSettings({ ...settings, custodyStartOwner: 'me' })}
                type="button"
                className={`flex-1 rounded text-xs font-semibold transition-all ${settings.custodyStartOwner === 'me'
                  ? 'bg-white dark:bg-white/10 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300'
                  } `}
              >
                Me
              </button>
              <button
                onClick={() => setSettings({ ...settings, custodyStartOwner: 'other' })}
                type="button"
                className={`flex-1 rounded text-xs font-semibold transition-all ${settings.custodyStartOwner === 'other'
                  ? 'bg-white dark:bg-white/10 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300'
                  } `}
              >
                Other Parent
              </button>
            </div>
          </div>

          {/* 5. Generate Button */}
          <div className="">
            <button
              id="generate-btn"
              type="button"
              onClick={handleCalculate}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold h-[42px] px-4 rounded transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2 active:scale-95 group"
            >
              <span>Generate</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;