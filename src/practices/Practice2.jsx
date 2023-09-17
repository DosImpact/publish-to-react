import React, { useState } from "react";

const Practice2 = () => {
  const [count, setCount] = useState(0);
  const [userInput, setUserInput] = useState("");

  const handleClickPlus = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    setCount(count - 1);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleUserEnter = (e) => {
    if (e.key === "Enter") {
      const num = Number.parseInt(e.target.value);
      if (Number.isInteger(num)) setCount(num);
      setUserInput("");
    }
  };

  return (
    <div>
      <div>current Count:{count}</div>
      <div>
        <button onClick={handleClickPlus}>+</button>
        <button onClick={handleClickMinus}>-</button>
      </div>
      <div>
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          onKeyDown={handleUserEnter}
        />
      </div>
    </div>
  );
};

export default Practice2;
