import { memo, useCallback, useState } from "react";
import { buildMonth, weekDays } from "../utils/calendar";
import './Calendar.css'
import CalendarDay from "./CalendarDay";
interface ICalendar {
    dateDisplayed: Date
}

const Calendar = (props: ICalendar) => {
    const { dateDisplayed = new Date() } = props;
    const [currentDate, setCurrentDate] = useState(dateDisplayed)
    const [yearDisplayed, setYearDisplayed] = useState(dateDisplayed.getFullYear());
    const [monthDisplayed, setMonthDisplayed] = useState(dateDisplayed.getMonth() + 1);
    const [dayDisplayed, setDayDisplayed] = useState(dateDisplayed.getDate());

    const clickCalendarDay = useCallback((day: Date) => {
        setCurrentDate(day);
        setYearDisplayed(day.getFullYear());
        setMonthDisplayed(day.getMonth() + 1);
        setDayDisplayed(day.getDate());
    }, [])

    const buildWeekDays = useCallback(() => {
        return (
            weekDays.map((day) => {
                return <th key={day + "WeekDay"} className="week-day__td">{day}</th>
            })
        )
    }, [weekDays])

    const buildMonthDays = useCallback(() => {
        const wholeMonth = buildMonth(currentDate);

        let monthRows: Date[] = []

        return wholeMonth.map(() => {
            monthRows = wholeMonth.splice(0, 7)

            return monthRows.map((day, index) => {
                return (
                    <CalendarDay
                        key={`CalendarDay${index}`}
                        day={day}
                        onClick={clickCalendarDay}
                    />)
            })
        })
    }, [currentDate, dateDisplayed, clickCalendarDay, buildMonth])

    return (<div className="calendar__div">
        <div className="current-date__div">
            <span>{yearDisplayed}</span>
            <span>{monthDisplayed}</span>
            <span>{dayDisplayed}</span>
        </div>
        <div className="calendar-days__div">
            <table className="calendar__table">
                <thead>
                    <tr className="week__tr">
                        {buildWeekDays()}
                    </tr>
                </thead>
                <tbody>
                    {buildMonthDays().map((weeks, index) => {
                        return (<tr key={"weeks" + index} className="month-days__tr">
                            {weeks}
                        </tr>)
                    })}
                </tbody>
            </table>

        </div>

    </div>)
}

Calendar.defaultProps = {
    dateDisplayed: new Date()
} as ICalendar

export default memo(Calendar);