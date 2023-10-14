import { atom } from "recoil";
import { CalendarDateType, DiaryType } from "../lib/type";
import { initialCalendarDate, initialDiary } from "./initialState";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist()

export const diaryState = atom<DiaryType>({
  key: 'diaryState',
  default: initialDiary
})

export const diaryListState = atom<DiaryType[]>({
  key: 'diaryListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const calendarDateState = atom<CalendarDateType>({
  key: 'calendarDateState',
  default: initialCalendarDate
})