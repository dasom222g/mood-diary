import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { TodayIs } from './pages/TodayIs';
import Mood from './pages/Mood';
import Layout from './components/layout/Layout';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today-is" element={<TodayIs />} />
          <Route path="/mood" element={<Mood />} />
        </Routes>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
