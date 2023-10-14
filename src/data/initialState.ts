import { CalendarDateType, DateType, DiaryType } from "../lib/type";
import { daysOfWeek } from "./common";

const today = (): DateType => {
  const todayData = new Date();
  const year = todayData.getFullYear()
  const month = todayData.getMonth() + 1
  const day = todayData.getDate()
  const dayOfWeeks = daysOfWeek[todayData.getDay()]

  const totalText = `${year}년 ${month}월 ${day}일 ${
    dayOfWeeks
  }`;

  const resultDate: DateType = {
    year,
    month,
    day,
    dayOfWeeks,
    totalDate: `${year}-${month}-${day}`,
    totalText
  }
  return resultDate
}

const todayCalendarDate = (): CalendarDateType => {
  const todayData = new Date();
  const year = todayData.getFullYear()
  const month = todayData.getMonth() + 1
  return {
    year,
    month
  }
}


export const initialDiary: DiaryType = {
  id: 1,
  date: today(),
  diary: '',
  mood: {
    id: 1,
    name: 'depressed',
    description: '우울해',
  },
}

export const initialCalendarDate: CalendarDateType = todayCalendarDate()