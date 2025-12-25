
export interface DateCheckResult {
  isSecondSaturday: boolean;
  formattedDate: string;
}

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

// A Saturday is the "Second Saturday" if the day of the month is between 8 and 14 inclusive.
export const checkIsSecondSaturday = (date: Date): boolean => {
  const dayOfWeek = date.getDay(); // 0 = Sun, 6 = Sat
  const dayOfMonth = date.getDate();
  
  return dayOfWeek === 6 && dayOfMonth >= 8 && dayOfMonth <= 14;
};

// A Saturday is the "Fourth Saturday" if the day of the month is between 22 and 28 inclusive.
export const checkIsFourthSaturday = (date: Date): boolean => {
  const dayOfWeek = date.getDay(); // 0 = Sun, 6 = Sat
  const dayOfMonth = date.getDate();
  
  return dayOfWeek === 6 && dayOfMonth >= 22 && dayOfMonth <= 28;
};

// Helper to get all Saturdays for a specific month/year
export const getAllSaturdaysInMonth = (year: number, month: number): Date[] => {
  const saturdays: Date[] = [];
  const date = new Date(year, month, 1);
  
  // Advance to first Saturday
  while (date.getDay() !== 6) {
    date.setDate(date.getDate() + 1);
  }
  
  // Loop through month adding 7 days
  while (date.getMonth() === month) {
    saturdays.push(new Date(date));
    date.setDate(date.getDate() + 7);
  }
  
  return saturdays;
};

export const getUpcomingSecondSaturdays = (count: number = 5): Date[] => {
  const dates: Date[] = [];
  const today = new Date();
  
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth(); 

  while (dates.length < count) {
    let secondSaturdayDate: Date | null = null;
    
    for (let day = 8; day <= 14; day++) {
      const tempDate = new Date(currentYear, currentMonth, day);
      if (tempDate.getDay() === 6) {
        secondSaturdayDate = tempDate;
        break;
      }
    }

    if (secondSaturdayDate) {
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);
      
      if (secondSaturdayDate > startOfToday) {
         dates.push(secondSaturdayDate);
      }
    }

    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  }
  
  return dates;
};

// Get next N months data including all saturdays for visualization
// Added offset parameter to support pagination (offset 0 = current month)
export const getUpcomingMonthsData = (count: number = 4, offset: number = 0) => {
  const monthsData = [];
  const today = new Date();
  
  // Calculate start date based on offset.
  // Using the Date constructor handles year wrapping automatically.
  const startDate = new Date(today.getFullYear(), today.getMonth() + offset, 1);
  
  let currentYear = startDate.getFullYear();
  let currentMonth = startDate.getMonth();

  for (let i = 0; i < count; i++) {
    const saturdays = getAllSaturdaysInMonth(currentYear, currentMonth);
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(currentYear, currentMonth, 1));
    const fullYear = currentYear;
    const shortYear = currentYear.toString().slice(-2);
    
    monthsData.push({
      monthName: monthName.toUpperCase(),
      year: fullYear,
      shortYear: shortYear,
      monthIndex: currentMonth,
      saturdays: saturdays.map(d => d.getDate()),
    });

    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  }
  return monthsData;
};

// Helper to get the 2nd Saturday of a specific month
export const getSecondSaturdayOfMonth = (year: number, month: number): Date => {
  for (let day = 8; day <= 14; day++) {
    const date = new Date(year, month, day);
    if (date.getDay() === 6) {
      return date;
    }
  }
  // Should technically not reach here for valid months
  return new Date(year, month, 8); 
};

// Helper to get the 4th Saturday of a specific month
export const getFourthSaturdayOfMonth = (year: number, month: number): Date => {
  for (let day = 22; day <= 28; day++) {
    const date = new Date(year, month, day);
    if (date.getDay() === 6) {
      return date;
    }
  }
  return new Date(year, month, 22);
};

// Calculate the immediate next Second Saturday from a given date
export const getNextSecondSaturday = (fromDate: Date): Date => {
  const date = new Date(fromDate);
  date.setHours(0, 0, 0, 0);
  
  let year = date.getFullYear();
  let month = date.getMonth();
  
  const currentMonthSat = getSecondSaturdayOfMonth(year, month);
  
  if (currentMonthSat > date) {
    return currentMonthSat;
  }
  
  // If not this month, move to next
  if (month === 11) {
    month = 0;
    year++;
  } else {
    month++;
  }
  
  return getSecondSaturdayOfMonth(year, month);
};

// Calculate the immediate next Special Saturday (2nd or 4th)
export const getNextSpecialSaturday = (fromDate: Date): { date: Date, type: string } => {
  const date = new Date(fromDate);
  date.setHours(0, 0, 0, 0);
  
  let year = date.getFullYear();
  let month = date.getMonth();
  
  const current2nd = getSecondSaturdayOfMonth(year, month);
  const current4th = getFourthSaturdayOfMonth(year, month);
  
  if (date.getTime() < current2nd.getTime()) {
    return { date: current2nd, type: 'Second' };
  }
  
  if (date.getTime() < current4th.getTime()) {
    return { date: current4th, type: 'Fourth' };
  }
  
  // Next month
  if (month === 11) {
    month = 0;
    year++;
  } else {
    month++;
  }
  
  const next2nd = getSecondSaturdayOfMonth(year, month);
  return { date: next2nd, type: 'Second' };
};

// Calculate days difference between two dates
export const getDaysDifference = (from: Date, to: Date): number => {
  const msPerDay = 1000 * 60 * 60 * 24;
  const start = new Date(from);
  start.setHours(0, 0, 0, 0);
  const end = new Date(to);
  end.setHours(0, 0, 0, 0);
  
  return Math.round((end.getTime() - start.getTime()) / msPerDay);
};

export const getOrdinalSuffix = (n: number): string => {
  const j = n % 10,
        k = n % 100;
  if (j === 1 && k !== 11) {
    return n + "st";
  }
  if (j === 2 && k !== 12) {
    return n + "nd";
  }
  if (j === 3 && k !== 13) {
    return n + "rd";
  }
  return n + "th";
};
