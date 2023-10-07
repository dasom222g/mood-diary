import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { TodayIs } from './pages/TodayIs';
import Mood from './pages/Mood';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today-is" element={<TodayIs />} />
        <Route path="/mood" element={<Mood />} />
      </Routes>
    </Layout>
  );
}

export default App;
