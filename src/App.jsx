import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Basic from "./components/Basic";
import Basic2 from "./components/Basic2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Basic /> */}
      <Basic2 />
    </>
  );
}

export default App;
