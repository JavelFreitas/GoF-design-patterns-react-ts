
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const getDayDifference = (date: Date, diff: number): Date => {
    var diffDay = new Date(date.getTime());
    diffDay.setDate(date.getDate() + diff);

    return diffDay;
}

const buildMonth = (today: Date = new Date()): Date[] => {
    try {
        // get a date with first day of that month
        const monthFirstDay = new Date(today.getFullYear(), today.getMonth(), 1);

        const firstCalendarDay = getDayDifference(monthFirstDay, -monthFirstDay.getDay());

        let wholeMonth: Date[] = [];

        for (let i = 0; i < 6 * 7; i++) {
            wholeMonth.push(getDayDifference(firstCalendarDay, i));
        }

        return wholeMonth;
    } catch (e) {
        throw e;
    }
}

export { buildMonth, months, weekDays }