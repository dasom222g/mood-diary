import {
  DateCalendar,
  LocalizationProvider,
  PickersDay,
  PickersDayProps,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { FC } from "react";
import { daysOfWeek, totalDate } from "../data/common";
import { DateType, DiaryType } from "../lib/type";
import dayjs, { Dayjs } from "dayjs";

interface CalendarSelectProps {
  diaryList: DiaryType[];
  dateChage: (date: DateType) => void;
}

export const CalendarSelect: FC<CalendarSelectProps> = ({
  diaryList,
  dateChage,
}) => {
  // logic
  const handleChange = (value: any | null) => {
    const { $y: year, $M, $D: day, $W } = value;
    const month = $M + 1;
    const dayOfWeeks = daysOfWeek[$W];

    const totalText = `${year}년 ${month}월 ${day}일 ${dayOfWeeks}`;

    const resultDate: DateType = {
      year,
      month,
      day,
      dayOfWeeks,
      totalDate: totalDate(year, month, day),
      totalText,
    };

    dateChage(resultDate);
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
    const isFuture = 0 < dayjs(resultDate).diff(new Date());

    return (
      <div key={props.day.toString()}>
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={date}
          disabled={isSelected || isFuture}
        />
      </div>
    );
  };
  // view
  return (
    <div className="bg-mood-purple rounded-3xl">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          maxDate={dayjs(new Date())}
          slots={{
            day: writeDay,
          }}
          onChange={handleChange}
        />
      </LocalizationProvider>
    </div>
  );
};
