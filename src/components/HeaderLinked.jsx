import React from "react";
import styled from "styled-components";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const HeaderLinked = () => {
  return (
    <SHeader>
      <Wrapper>
        <Container>
          <div>
            <Link to="/">
              <img src={logo}></img>
            </Link>
          </div>
          <NavList>
            <Link to="/study-list">
              <div className="itemList">스터디 찾기</div>
            </Link>
            <Link to="/my-study">
              <div className="itemList">내 스터디</div>
            </Link>
            <Link to="/auth">
              <div className="itemList">회원가입 </div>
            </Link>
            <Link to="/auth">
              <div className="itemList yellow">로그인</div>
            </Link>
          </NavList>
        </Container>
      </Wrapper>
    </SHeader>
  );
};

const SHeader = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  margin: 0px auto;
  max-width: 1240px;
  width: 100%;
  height: 71px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`;

const NavList = styled.div`
  display: flex;
  flex-flow: row;
  color: rgb(109, 114, 120);
  .itemList {
    margin-right: 24px;
    font-family: SpoqaHanSans;
    font-size: 14px;
    letter-spacing: -0.47px;
    cursor: pointer;
  }
  .yellow {
    color: rgb(255, 199, 0);
  }
`;

export default HeaderLinked;
