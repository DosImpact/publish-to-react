import React, { useState } from "react";
import styled from "styled-components";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

const Basic2 = () => {
  return (
    <SBasic2>
      <div className="left">HEADER</div>
      <div className="right">
        <a className="link-item" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <div>VITE</div>
        </a>
        <a className="link-item" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo spin" alt="React logo" />
          <div>REACT</div>
        </a>
      </div>
    </SBasic2>
  );
};

export default Basic2;

const SBasic2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 720px;
  .right {
    display: flex;
  }

  .link-item {
    display: flex;
    align-items: center;
    width: 50px;
    margin-left: 10px;
  }
  .logo {
    width: 25px;
  }
  .spin {
    animation: logo-spin infinite 10s linear;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
