import {
  DateCalendar,
  LocalizationProvider,
  PickersDay,
  PickersDayProps,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import React, { FC } from "react";
import { totalDate } from "../data/common";
import { DiaryType } from "../lib/type";
import Emotion from "./Emotion";

interface CalendarViewProps {
  diaryList: DiaryType[];
}

const CalendarView: FC<CalendarViewProps> = ({ diaryList }) => {
  // logic
  const handleChange = (value: any | null) => {
    // const { $y: year, $M, $D: day, $W } = value;
    console.log("value", value);
  };

  const writeDay = (
    props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }
  ) => {
    const { day: date, outsideCurrentMonth, ...other } = props;
    const year = date.year();
    const month = date.month() + 1;
    const day = date.date();

    const resultDate = totalDate(year, month, day);
    const existDate = diaryList.find(
      (diary) => diary.date.totalDate === resultDate
    );

    const isSelected = !props.outsideCurrentMonth && !!existDate;

    return (
      <div className="relative" key={props.day.toString()}>
        {isSelected && (
          <div className="absolute left-0 top-0 z-10 -m-1">
            <Emotion data={existDate.mood} />
          </div>
        )}
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={date}
        />
      </div>
    );
  };

  // view
  return (
    <div className="bg-white rounded-3xl">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          slots={{
            day: writeDay,
          }}
          onChange={handleChange}
        />
      </LocalizationProvider>
    </div>
  );
};

export default CalendarView;
