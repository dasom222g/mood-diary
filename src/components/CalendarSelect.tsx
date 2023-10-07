import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { FC } from 'react';
import { daysOfWeek } from '../data/common';

interface CalendarSelectProps {
  dateChage: (date: string) => void;
}

export const CalendarSelect: FC<CalendarSelectProps> = ({ dateChage }) => {
  // logic
  const handleChange = (value: any | null) => {
    const { $y: year, $M: month, $D: day, $W: dayOfWeeks } = value;
    // 2023년 10월 7일 토요일
    const resultDate = `${year}년 ${month + 1}월 ${day}일 ${
      daysOfWeek[dayOfWeeks]
    }`;
    dateChage(resultDate);
  };
  // view
  return (
    <div className="bg-mood-purple rounded-3xl">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={handleChange} />
      </LocalizationProvider>
    </div>
  );
};
