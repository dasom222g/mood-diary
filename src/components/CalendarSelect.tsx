import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';

export const CalendarSelect = () => {
  return (
    <div className="bg-mood-purple rounded-3xl">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </div>
  );
};
