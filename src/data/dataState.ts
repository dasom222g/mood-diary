import { atom } from "recoil";
import { CalendarDateType, DiaryType } from "../lib/type";
import { initialCalendarDate, initialDiary } from "./initialState";

export const diaryState = atom<DiaryType>({
  key: 'diaryState',
  default: initialDiary
})

export const diaryListState = atom<DiaryType[]>({
  key: 'diaryListState',
  default: []
})

export const calendarDateState = atom<CalendarDateType>({
  key: 'calendarDateState',
  default: initialCalendarDate
})