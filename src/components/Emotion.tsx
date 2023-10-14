import React, { FC } from "react";
import { MoodType } from "../lib/type";

interface EmotionProps {
  data: MoodType;
  size?: string; // small, medium, large
}

const Emotion: FC<EmotionProps> = ({ data, size }) => {
  // logic
  // const sizeList = ['8','16','24']
  const sizeList = [
    {
      size: "small",
      width: "8",
    },
    {
      size: "medium",
      width: "16",
    },
    {
      size: "large",
      width: "24",
    },
  ];

  // view
  return (
    <div
      className={`p-1 w-${
        size ? sizeList.find((item) => item.size === size)?.width : "fit"
      } mx-auto text-center`}
    >
      <img src={`/images/${data.name}.svg`} alt={data.name} />
    </div>
  );
};

export default Emotion;
