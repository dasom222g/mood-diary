export interface MoodType {
  id: number,
  name: string,
  description: string
}

export interface DateType {
  year: number,
  month: number,
  day: number,
  dayOfWeeks: string,
  totalDate: string,
  totalText: string
}
export interface DiaryType {
  id: number
  mood: MoodType
  date: DateType
  diary: string
}

export interface CalendarDateType {
  year: number
  month: number
}


