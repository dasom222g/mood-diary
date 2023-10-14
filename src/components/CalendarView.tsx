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
import { CalendarDateType, DiaryType } from "../lib/type";
import Emotion from "./Emotion";
import { calendarDateState } from "../data/dataState";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

interface CalendarViewProps {
  diaryList: DiaryType[];
}

const CalendarView: FC<CalendarViewProps> = ({ diaryList }) => {
  // logic
  const history = useNavigate();

  const setCalendarDate = useSetRecoilState(calendarDateState);

  const handleChange = (value: any | null) => {
    const { $y: year, $M: month, $D: day } = value;
    const selectedDate = totalDate(year, month + 1, day);
    const selectedDiary = diaryList.find(
      (diary) => diary.date.totalDate === selectedDate
    );

    selectedDiary && history(`item/${selectedDiary.id}`);
  };

  const hadleMonthChange = (value: Dayjs) => {
    const year = value.year();
    const month = value.month() + 1;
    const result: CalendarDateType = {
      year,
      month,
    };
    setCalendarDate(result);
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
          <div className="absolute left-0 top-0 z-10 -m-1 pointer-events-none">
            <Emotion data={existDate.mood} />
          </div>
        )}
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={date}
          disabled={!isSelected}
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
          onMonthChange={hadleMonthChange}
        />
      </LocalizationProvider>
    </div>
  );
};

export default CalendarView;
