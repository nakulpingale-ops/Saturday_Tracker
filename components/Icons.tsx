import React from 'react';
import { Moon, Sun, Calendar, CheckCircle, XCircle, ChevronRight, Info, Search } from 'lucide-react';

export const IconMoon = () => <Moon className="w-5 h-5" />;
export const IconSun = () => <Sun className="w-5 h-5" />;
export const IconCalendar = () => <Calendar className="w-5 h-5" />;
export const IconCheck = () => <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-500 mb-4" />;
export const IconX = () => <XCircle className="w-12 h-12 sm:w-16 sm:h-16 text-red-500 mb-4" />;
export const IconArrowRight = () => <ChevronRight className="w-4 h-4 ml-1" />;
export const IconInfo = () => <Info className="w-5 h-5 text-gray-400" />;
export const IconSearch = () => <Search className="w-5 h-5" />;