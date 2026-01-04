export enum SaturdayPattern {
    First = "First Saturday",
    Second = "Second Saturday",
    Third = "Third Saturday",
    Fourth = "Fourth Saturday",
    Fifth = "Fifth Saturday",
    Both = "Second & Fourth Saturday"
}

export type CalculatorMode = 'pattern' | 'custody';

export interface CalculationSettings {
    pattern: SaturdayPattern;
    startDate: string; // "YYYY-MM-DD"
    durationYears: number;
    // New fields for Custody Mode
    mode: CalculatorMode;
    custodyPreset?: '2-2-3'; // Future: | '2-2-5-5' | '3-4-4-3'
    custodyStartOwner?: 'me' | 'other';
    durationMonths?: number;
}

export interface CustodyBlock {
    owner: 'me' | 'other';
    startDate: Date;
    endDate: Date;
    label: string; // "WITH ME" or "WITH OTHER"
}

export interface HolidayEntry {
    Date: string;        // "YYYY-MM-DD"
    Holiday: string;     // "Republic Day"
    State: string;       // "Andaman And Nicobar Islands"
    Status: string;      // "Closed"
}
