import { memo, useCallback } from "react";

interface ICalendarDay {
    day: Date
    onClick?: (day: Date) => void
}

const CalendarDay = (props: ICalendarDay) => {
    const { day } = props;

    const onClickTd = useCallback(() => {
        if (!props.onClick) throw new Error("OnClick function is not implemented");

        props.onClick(day);
    }, [day]);

    return (
        <td
            key={day + "Cell"}
            className="day-cell__div"
            onClick={onClickTd}
        >
            {day.getDate()}
        </td>
    )
}

CalendarDay.defaultPropr = {
    day: new Date(),
    onClick: (day: Date) => { }
} as ICalendarDay


export default memo(CalendarDay)