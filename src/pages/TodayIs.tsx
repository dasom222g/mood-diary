import React from "react";
import EmotionGroup from "../components/EmotionGroup";
import { moods } from "../data/common";
import { CalendarSelect } from "../components/CalendarSelect";
import { DateType, MoodType } from "../lib/type";
import { useRecoilState } from "recoil";
import { diaryState } from "../data/dataState";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export const TodayIs = () => {
  // logic
  const history = useNavigate();

  const [diary, setDiary] = useRecoilState(diaryState);

  const handleDateChage = (date: DateType) => {
    const result = { ...diary, date };
    setDiary(result);
  };

  const handleEmotionChage = (mood: MoodType) => {
    setDiary((prev) => ({ ...prev, mood }));
  };

  const handleClick = () => {
    const id = new Date().getTime() * 1000 * 60;
    setDiary((prev) => ({ ...prev, id }));
    history("/mood");
  };

  // view
  return (
    <>
      <div className="pb-2">
        <EmotionGroup
          title="오늘 하루는 어땠니?"
          moods={moods}
          emotionChage={handleEmotionChage}
        />
      </div>
      <div className="py-2">
        <CalendarSelect dateChage={handleDateChage} />
      </div>
      <div className="py-2">
        <Button text="일기 쓰러 가기" onClick={handleClick} />
      </div>
    </>
  );
};
