import React, { useEffect } from 'react';

const Home = () => {
  // logic
  useEffect(() => {
    const name = 'Chutzrit';
    console.log('🚀 : name==>', name);
  });

  // view
  return <div>Home</div>;
};

export default Home;
