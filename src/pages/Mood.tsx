import React, { useState } from 'react';
import Emotion from '../components/Emotion';
import { useRecoilState } from 'recoil';
import { diaryState } from '../data/dateState';
import DiaryInput from '../components/DiaryInput';
import Button from '../components/Button';

const Mood = () => {
  // logic
  const [diary, setDiary] = useRecoilState(diaryState);
  const { date, mood } = diary;

  const [diaryValue, setDiaryValue] = useState('');
  const [isReset, setIsReset] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDiary((prev) => ({ ...prev, diary: diaryValue }));
    setDiaryValue('');
    setIsReset(true);
  };

  const handleChange = (value: string) => {
    setDiaryValue(value);
    isReset && setIsReset(false);
  };

  // useEffect(() => {
  //   console.log('diary', diary);
  // }, [diary]);
  return (
    <>
      <div className="border border-mood-gray-700 rounded-xl px-4 py-6">
        <div className="py-2">
          {/* START: date */}
          <p>{date}</p>
          {/* START: date */}
        </div>
        <div className="py-2">
          <Emotion data={mood} />
        </div>
        <div className="py-2">
          <form id="diaryForm" onSubmit={handleSubmit}>
            <DiaryInput onChage={handleChange} isReset={isReset} />
          </form>
        </div>
      </div>
      <div className="pt-8">
        <Button type="submit" formId="diaryForm" text="일기 저장하기" />
      </div>
    </>
  );
};

export default Mood;
