import React, { useEffect, useState } from 'react';
import EmotionSelect from '../components/EmotionSelect';
import { moods } from '../data/common';
import { CalendarSelect } from '../components/CalendarSelect';
import { DiaryType, MoodType } from '../lib/type';
import { initialDiary } from '../data/initialState';

export const TodayIs = () => {
  const [diary, setDiary] = useState<DiaryType>(initialDiary);

  // logic
  const handleDateChage = (date: string) => {
    const result = { ...diary, date };
    setDiary(result);
  };

  const handleEmotionChage = (mood: MoodType) => {
    setDiary((prev) => ({ ...prev, mood }));
  };

  useEffect(() => {
    console.log('diary', diary);
  }, [diary]);
  // view
  return (
    <div>
      <div className="py-2">
        <EmotionSelect
          title="오늘 하루는 어땠니?"
          moods={moods}
          emotionChage={handleEmotionChage}
        />
      </div>
      <div className="py-2">
        <CalendarSelect dateChage={handleDateChage} />
      </div>
      <div className="py-2">
        <button
          type="button"
          className="w-full py-4 px-1 block rounded-3xl text-white text-sm font-medium bg-mood-blue-700"
        >
          일기 쓰러 가기
        </button>
      </div>
    </div>
  );
};
