import React, { FC } from 'react';
import { MoodType } from '../lib/type';

interface EmotionProps {
  data: MoodType;
}

const Emotion: FC<EmotionProps> = ({ data }) => {
  return (
    <div className="p-1 w-24 mx-auto">
      <img src={`./images/${data.name}.svg`} alt={data.name} />
    </div>
  );
};

export default Emotion;
