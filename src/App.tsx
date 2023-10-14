import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { TodayIs } from "./pages/TodayIs";
import Mood from "./pages/Mood";
import Layout from "./components/layout/Layout";
import { RecoilRoot } from "recoil";
import Item from "./pages/Item";

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today-is" element={<TodayIs />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/item/:itemId" element={<Item />} />
        </Routes>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
