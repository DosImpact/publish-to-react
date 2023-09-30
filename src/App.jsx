import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Basic from "./components/Basic";
import Basic2 from "./components/Basic2";
import Basic3Counter from "./components/Basic3-Counter";
import Header from "./components/Header";
import HeaderLinked from "./components/HeaderLinked";

import Practice1 from "./practices/Practice1";
import Practice2 from "./practices/Practice2";
import Practice3 from "./practices/Practice3";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/Theme";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudyListPage from "./pages/StudyListPage";
import MyStudyPage from "./pages/MyStudyPage";
import NotFound from "./pages/NotFound";
import StudyDetailPage from "./pages/StudyDetailPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Practice1 /> */}
        {/* <Practice2 /> */}
        {/* <Practice3 /> */}
        {/* <Basic /> */}
        {/* <Basic2 /> */}
        {/* <Basic3Counter /> */}
        {/* <div>안녕</div> */}
        <BrowserRouter>
          <HeaderLinked />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/study-list" element={<StudyListPage />} />
            <Route path="/study-list/:id" element={<StudyDetailPage />} />
            <Route path="/my-study" element={<MyStudyPage />} />{" "}
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
