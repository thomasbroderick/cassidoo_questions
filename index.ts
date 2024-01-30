import { Temporal } from "proposal-temporal";

function daysBetween(startDate: string, endDate: string): number {
    // Assumes that startDate and endDate are valid ISO 8601 dates
    const start = Temporal.PlainDate.from(startDate);
    const end = Temporal.PlainDate.from(endDate);
    const difference = start.until(end, { largestUnit: 'day' });
    return difference.days;
}

const days = daysBetween('2020-02-29', '2023-10-31');
console.log(days);