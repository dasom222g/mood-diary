import React from 'react';
import Emotion from '../components/Emotion';
import { moods } from '../data/common';

const Mood = () => {
  return (
    <div>
      <Emotion data={moods[2]} />
    </div>
  );
};

export default Mood;
