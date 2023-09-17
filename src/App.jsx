import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Basic from "./components/Basic";
import Basic2 from "./components/Basic2";
import Basic3Counter from "./components/Basic3-Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Basic /> */}
      {/* <Basic2 /> */}
      <Basic3Counter />
      <div>안녕</div>
    </>
  );
}

export default App;
