import React from 'react';
import EmotionSelect from '../components/EmotionSelect';
import { moods } from '../data/common';

export const TodayIs = () => {
  return (
    <div>
      <EmotionSelect title="오늘 하루는 어땠니?" moods={moods} />
    </div>
  );
};
