import React, { FC, useState } from "react";
import { MoodType } from "../lib/type";

interface EmotionGroupProps {
  title: string;
  moods: MoodType[];
  emotionChage: (data: MoodType) => void;
}

const EmotionGroup: FC<EmotionGroupProps> = ({
  title,
  moods,
  emotionChage,
}) => {
  const [value, setValue] = useState("");
  // logic
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    mood: MoodType
  ) => {
    const { value } = event.target;
    setValue(value);
    emotionChage(mood);
  };
  // view
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
                checked={value === mood.name}
                onChange={(event) => handleChange(event, mood)}
              />
              {/* className="w-0 h-0 absolute inset-0 peer" */}
              <div className="peer-checked:border-2 rounded-2xl border-red-500">
                <img src={`/images/${mood.name}.svg`} alt={mood.name} />
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmotionGroup;
