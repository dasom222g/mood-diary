import React from 'react';
import EmotionSelect from '../components/EmotionSelect';
import { moods } from '../data/common';
import { CalendarSelect } from '../components/CalendarSelect';

export const TodayIs = () => {
  return (
    <div>
      <div className="py-2">
        <EmotionSelect title="오늘 하루는 어땠니?" moods={moods} />
      </div>
      <div className="py-2">
        <CalendarSelect />
      </div>
    </div>
  );
};
