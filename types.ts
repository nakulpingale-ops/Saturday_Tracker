export enum SaturdayPattern {
  First = "First Saturday",
  Second = "Second Saturday",
  Third = "Third Saturday",
  Fourth = "Fourth Saturday",
  Fifth = "Fifth Saturday",
  Both = "Second & Fourth Saturday"
}

export interface CalculationSettings {
  pattern: SaturdayPattern;
  startDate: string; // "YYYY-MM"
  durationYears: number;
}