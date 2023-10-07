import React, { useEffect } from 'react';
import Title from '../components/Title';

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
    </div>
  );
};

export default Home;
