import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Basic from "./components/Basic";
import Basic2 from "./components/Basic2";
import Basic3Counter from "./components/Basic3-Counter";
import Header from "./components/Header";

import Practice1 from "./practices/Practice1";
import Practice2 from "./practices/Practice2";
import Practice3 from "./practices/Practice3";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/Theme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Practice1 /> */}
        {/* <Practice2 /> */}
        {/* <Practice3 /> */}
        {/* <Basic /> */}
        {/* <Basic2 /> */}
        {/* <Basic3Counter /> */}
        <Header />
        {/* <div>안녕</div> */}
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
