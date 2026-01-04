export const getNextSaturdayInfo = () => {
    const today = new Date();
    let d = new Date(today);

    // If today is Saturday, use today
    if (d.getDay() !== 6) {
        d.setDate(d.getDate() + 1);
        while (d.getDay() !== 6) {
            d.setDate(d.getDate() + 1);
        }
    }

    const dayOfMonth = d.getDate();
    const weekNumber = Math.ceil(dayOfMonth / 7);
    const ordinal = weekNumber === 1 ? '1ST' : weekNumber === 2 ? '2ND' : weekNumber === 3 ? '3RD' : weekNumber === 4 ? '4TH' : '5TH';
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(d).toUpperCase();

    return {
        date: d,
        weekNumber,
        ordinal,
        monthName,
        formattedDate: new Intl.DateTimeFormat('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }).format(d).toUpperCase()
    };
};
