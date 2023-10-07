import React, { useEffect, useState } from 'react';
import EmotionSelect from '../components/EmotionSelect';
import { moods } from '../data/common';
import { CalendarSelect } from '../components/CalendarSelect';
import { MoodType } from '../lib/type';
import { useRecoilState } from 'recoil';
import { diaryState } from '../data/dateState';
import { useNavigate } from 'react-router-dom';

export const TodayIs = () => {
  // logic
  const history = useNavigate();

  const [diary, setDiary] = useRecoilState(diaryState);

  const handleDateChage = (date: string) => {
    const result = { ...diary, date };
    setDiary(result);
  };

  const handleEmotionChage = (mood: MoodType) => {
    setDiary((prev) => ({ ...prev, mood }));
  };

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
          onClick={() => history('/mood')}
        >
          일기 쓰러 가기
        </button>
      </div>
    </div>
  );
};
