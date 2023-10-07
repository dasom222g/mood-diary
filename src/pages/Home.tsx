import React, { useEffect } from 'react';
import Title from '../components/Title';
import Emotion from '../components/Emotion';
import { moods } from '../data/common';

const Home = () => {
  // logic
  const title = '10월';

  useEffect(() => {
    const name = 'Chutzrit';
    console.log('🚀 : name==>', name);
  });

  // view
  return (
    <div>
      <Title mainTitle={title} />
      <Emotion data={moods[2]} />
    </div>
  );
};

export default Home;
