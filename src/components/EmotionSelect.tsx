import React, { FC } from 'react';
import { MoodType } from '../lib/type';

interface EmotionSelectProps {
  title: string;
  moods: MoodType[];
}

const EmotionSelect: FC<EmotionSelectProps> = ({ title, moods }) => {
  return (
    <div>
      <span className="block">{title}</span>
      <div className="flex flex-wrap">
        {moods.map((mood) => (
          <div key={mood.id} className="p-2 w-1/4 ">
            <label>
              <input
                type="radio"
                name="mood"
                id={mood.name}
                value={mood.name}
                className="w-0 h-0 absolute inset-0 peer"
              />
              {/* className="w-0 h-0 absolute inset-0 peer" */}
              <div className="peer-checked:border-2 rounded-2xl border-red-500">
                <img src={`./images/${mood.name}.svg`} alt={mood.name} />
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmotionSelect;
