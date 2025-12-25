export enum SaturdayPattern {
  First = "1st Saturday",
  Second = "2nd Saturday",
  Third = "3rd Saturday",
  Fourth = "4th Saturday",
  Fifth = "5th Saturday",
  Both = "2nd and 4th Saturday"
}

export interface CalculationSettings {
  pattern: SaturdayPattern;
  startDate: string; // "YYYY-MM"
  durationYears: number;
}