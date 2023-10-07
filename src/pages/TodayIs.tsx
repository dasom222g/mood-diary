import React from 'react';
import EmotionSelect from '../components/EmotionSelect';
import { moods } from '../data/common';
import { CalendarSelect } from '../components/CalendarSelect';
import { MoodType } from '../lib/type';

export const TodayIs = () => {
  // logic
  const handleDateChage = (date: string) => {
    console.log('🚀 : date==>', date);
  };

  const handleEmotionChage = (data: MoodType) => {
    console.log('🚀 : data==>', data);
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
    </div>
  );
};
