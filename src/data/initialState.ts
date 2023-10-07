import { DiaryType } from "../lib/type";
import { daysOfWeek } from "./common";

const today = (): string => {
  const todayData = new Date();
  const year = todayData.getFullYear()
  const month = todayData.getMonth()
  const day = todayData.getDate()
  const dayOfWeeks = todayData.getDay()
  const resultDate = `${year}년 ${month + 1}월 ${day}일 ${
    daysOfWeek[dayOfWeeks]
  }`;
  return resultDate
}

today()

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