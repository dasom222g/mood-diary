import React, { useEffect } from 'react';
import Title from '../components/Title';

import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { diaryListState } from '../data/dataState';
import Emotion from '../components/Emotion';

const Home = () => {
  // logic
  const diaryList = useRecoilValue(diaryListState);

  useEffect(() => {
    console.log(diaryList);
  }, [diaryList]);
  // view
  return (
    <div className="flex flex-col h-full items-center">
      <Title mainTitle={'10월'} />
      <div className="flex flex-wrap">
        {diaryList.map((diary) => (
          <Emotion key={diary.id} data={diary.mood} />
        ))}
      </div>

      {/* START: add button */}
      <Link
        to={'/today-is'}
        className="w-10 h-10 bg-mood-purple rounded-full flex items-center justify-center item relative mt-auto"
      >
        <i className="block w-1 h-4 bg-neutral-800"></i>
        <i className="block w-1 h-4 bg-neutral-800 absolute transform rotate-90"></i>
        <span className="text-none">Add diary</span>
      </Link>
      {/* END: add button */}
    </div>
  );
};

export default Home;
