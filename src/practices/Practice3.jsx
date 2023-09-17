// 아래 코드를 React 컴포넌트로 변환하고 보여주세요.
// https://codepen.io/abhishek747/pen/BbWKVa

import React, { useState } from "react";
import styled from "styled-components";

const Practice3 = () => {
  const [count, setCount] = useState(1);
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <Basic3Counter
        count={count}
        setCount={setCount}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <CardList selectedNum={count} />
    </>
  );
};

export default Practice3;

const CardList = ({ selectedNum = 1 }) => {
  return (
    <div>
      <SContainer>
        <div className="cards-list">
          {selectedNum === 1 && (
            <div className="card 1">
              <div className="card_image">
                {" "}
                <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
              </div>
              <div className="card_title title-white">
                <p>Card Title</p>
              </div>
            </div>
          )}
          {selectedNum === 2 && (
            <div className="card 2">
              <div className="card_image">
                <img src="https://media1.giphy.com/media/rcSLJHmBdAMfRJ67bs/giphy.gif?cid=ecf05e47fw71b1ei83y3o5odxxgu5pd2xnfuay25e18k3kr8" />
              </div>
              <div className="card_title title-white">
                <p>Card Title</p>
              </div>
            </div>
          )}
          {selectedNum === 3 && (
            <div className="card 3">
              <div className="card_image">
                <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
              </div>
              <div className="card_title">
                <p>Card Title</p>
              </div>
            </div>
          )}
          {selectedNum === 4 && (
            <div className="card 4">
              <div className="card_image">
                <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
              </div>
              <div className="card_title title-black">
                <p>Card Title</p>
              </div>
            </div>
          )}
        </div>
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  .cards-list {
    z-index: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .card {
    margin: 30px auto;
    width: 300px;
    height: 300px;
    border-radius: 40px;
    box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
      -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    transition: 0.4s;
  }

  .card .card_image {
    width: inherit;
    height: inherit;
    border-radius: 40px;
  }

  .card .card_image img {
    width: inherit;
    height: inherit;
    border-radius: 40px;
    object-fit: cover;
  }

  .card .card_title {
    text-align: center;
    border-radius: 0px 0px 40px 40px;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 30px;
    margin-top: -80px;
    height: 40px;
  }

  .card:hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
  }

  .title-white {
    color: white;
  }

  .title-black {
    color: black;
  }

  @media all and (max-width: 500px) {
    .card-list {
      /* On small screens, we are no longer using row direction but column */
      flex-direction: column;
    }
  }

  /*
.card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  background-image: url('https://i.redd.it/b3esnz5ra34y.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  transition: 0.4s;
}
*/
`;

const Basic3Counter = ({ count, setCount, userInput, setUserInput }) => {
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
      <div>selectedNum :{count}</div>
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
