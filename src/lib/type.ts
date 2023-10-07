export interface MoodType {
  id: number,
  name: string,
  description: string
}

export interface DiaryType {
  id:1
  mood: MoodType
  date: string
  diary: string
}
