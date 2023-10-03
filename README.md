- [goal](#goal)
- [읽는 방법](#읽는-방법)
- [1week](#1week)
- [install react](#install-react)
  - [React 프로젝트 Port 변경](#react-프로젝트-port-변경)
  - [절대 경로 설정](#절대-경로-설정)
- [React component basic](#react-component-basic)
  - [React Structure](#react-structure)
  - [React Child Component (Props pass)](#react-child-component-props-pass)
    - [Basic1](#basic1)
- [styling](#styling)
  - [install styled-components, styled-breakpoints, styled-reset](#install-styled-components-styled-breakpoints-styled-reset)
  - [reset css ( https://meyerweb.com/eric/tools/css/reset/ )](#reset-css--httpsmeyerwebcomerictoolscssreset-)
  - [google fonts \> https://fonts.google.com/noto/specimen/Noto+Sans+KR](#google-fonts--httpsfontsgooglecomnotospecimennotosanskr)
  - [global css](#global-css)
  - [theme provider](#theme-provider)
  - [animation](#animation)
    - [Basic2](#basic2)
- [Practice](#practice)
    - [Practice1 - html+css \> React Components](#practice1---htmlcss--react-components)
    - [Practice2 -  Make Counter](#practice2----make-counter)
    - [Practice3 - Practice1 응용](#practice3---practice1-응용)
- [Develop1.1](#develop11)
  - [components - Header](#components---header)
- [2week](#2week)
- [Page관리 - react-router-dom](#page관리---react-router-dom)
  - [install react-router-dom](#install-react-router-dom)
  - [react-router-dom 기본 사용법](#react-router-dom-기본-사용법)
    - [1. page 경로설정](#1-page-경로설정)
    - [2. header link](#2-header-link)
    - [3. path param router](#3-path-param-router)
- [배포 (deployments)](#배포-deployments)
    - [Practice4 : 헤더까지 개발된 리액트 앱 배포하기](#practice4--헤더까지-개발된-리액트-앱-배포하기)
    - [이슈 체크](#이슈-체크)
- [bootstrap 연동](#bootstrap-연동)
  - [install](#install)
  - [Basic : Bootstrap1](#basic--bootstrap1)
  - [Basic : Bootstrap2](#basic--bootstrap2)
  - [Practice : Bootstrap3](#practice--bootstrap3)
  - [develop : Boostrap4](#develop--boostrap4)
  - [질의 및 지난 시간 과제 체크](#질의-및-지난-시간-과제-체크)
 

# goal

- [ ] 1week

--- 2week
- [ ] deployments
- [ ] install react-router-dom
  - [ ] page router
- [ ] bootstrap 연동
  - [ ] develop component onboarding Section
- [ ] 질의 
- [ ] 과제 : CardComponent

--- 3week
- [ ] antd 연동
  - [ ] antd 연동

---

# 읽는 방법

- 개념에 대한 이론 설명을 먼저 학습합니다.
- 예제 (Basic) : 개념에 대한 예제
- 연습 (Practice) : 복습을 위한 기본 코드
- 과제 (Develop) : 예제와 연습을 바탕으로 실무에 필요한 내용으로 개발합니다.

# 1week

목표 
- 리액트 설치 / 컴포넌트 이해 / 스타일링 / 카운터 / 연습 / 과제

# install react

```
# nodejs 를 설치합니다. (install nodejs)
# 18 버전 체크
node -v 

# IDE vscode 설치
install vscode 

install extension
- prettier
- indent-rainbow
- eslint
settings
- foramt on save


# yarn 이라는 패키지 매니저를 설치
npm install yarn -g


# react app을 빠르게 만들 수 있습니다.
yarn create vite
✔ Project name: … react-publisher
✔ Select a framework: › React
✔ Select a variant: › JavaScript
```

## React 프로젝트 Port 변경

host 및 port를 3000번으로 변경합니다.

vite.config.js
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: "0.0.0.0",
  }
});

```

## 절대 경로 설정

상대경로 대신 절대경로로 설정합니다.
- jsconfig.json : IDE에게 경로 설정 알려줍니다.
- vite.config.js : 번들러에게 경로 설정 알려줍니다.

jsconfig.json
```Js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```

vite.config.js
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

# React component basic

## React Structure

- 기본 설정 파일 설명 ( package.json, vite.config.js, jsconfig.json, index.html, .gitignore, .eslintrc.cjs ) 
- 기본 디렉터리 구조 ( public, assets, components, pages)
- 리액트 컴포넌트란 ? 
- 변수, 함수, JSX 란 ?
- 리액트 컴포넌트 합성 ( import, export, export default )

## React Child Component (Props pass)

- 부모컴포넌트 자식컴포넌트 변수(함수) 전달

### Basic1
- 기본 컴포넌트 및 합성




# styling

## install styled-components, styled-breakpoints, styled-reset

```
yarn add styled-components 
yarn add styled-breakpoints
yarn add styled-reset
```
styled-components : 리액트 컴포넌트에 스타일을 Wrapping
styled-breakpoints : 리액트 컴포넌트에 반응형 스타일을 설정

## reset css ( https://meyerweb.com/eric/tools/css/reset/ )

- index.css에 reset css 설정 후 import

## google fonts > https://fonts.google.com/noto/specimen/Noto+Sans+KR

- link > index.html
- @import > index.css 

## global css
- yarn add styled-reset
- index.css 파일 내용을 옮길 수 있다.

## theme provider
- Theme 적용방법, 다크모드 적용

```
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyles />
      </ThemeProvider>
    </>
```

## animation 

```css
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
```

### Basic2
- styled, img, styled

# Practice 

### Practice1 - html+css > React Components

아래 HTML+CSS를 리액트 컴포넌트로 옮겨봅니다.
- https://codepen.io/abhishek747/pen/BbWKVa


### Practice2 -  Make Counter

### Practice3 - Practice1 응용
- 4개 카드 중 card number 가 1이면 1번 카드를 보여줍니다.
- +,- 버튼을 만들어서 card number를 변경합니다.


# Develop1.1

## components - Header

- 헤더 컴포넌트를 만들어 봅니다.
ref : (https://hungry-hawking-79d524.netlify.app/)

# 2week

Goal
- [ ] bootstrap 연동
  - [ ] develop component onboarding Section
- [ ] 질의 
- [ ] 과제 : CardComponent

# Page관리 - react-router-dom

## install react-router-dom

```
yarn add react-router-dom
```

## react-router-dom 기본 사용법

### 1. page 경로설정 
- BrowserRouter, Route, Routes 컴포넌트 이용

```js

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudyListPage from "./pages/StudyListPage";
import MyStudyPage from "./pages/MyStudyPage";
import NotFound from "./pages/NotFound";
import StudyDetailPage from "./pages/StudyDetailPage";
...
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
```


### 2. header link

```js
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
```

### 3. path param router 

- Routers는 스위치의 역할을 수행한다.
- path가 /*인 경우 : 모든 path에 걸리지 않는 경우 보여줄 페이지
- path에 변수가 있는 경우 : `path="/study-list/:id"` :을 이용해서 변수 표기

```js

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudyListPage from "./pages/StudyListPage";
import MyStudyPage from "./pages/MyStudyPage";
import NotFound from "./pages/NotFound";
import StudyDetailPage from "./pages/StudyDetailPage";
...
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

```

3.1 useParams으로 url변수 가져오기

```js
// src/pages/StudyDetailPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const StudyDetailPage = () => {
  const { id } = useParams();

  return <div>StudyDetailPage id :{id} Components</div>;
};

export default StudyDetailPage;

```

3.3  Link을 이용해서 List > Detail 페이지 이동

```js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudyListPage = () => {
  return (
    <div>
      StudyListPage Components
      <Link to="/study-list/1">
        <div>study num 1</div>
      </Link>
      <Link to="/study-list/2">
        <div>study num 2</div>
      </Link>
    </div>
  );
};

export default StudyListPage;

```



# 배포 (deployments)

React App 배포는 Netlify를 이용한다.
- github 연동으로 빠르게 배포가 가능하다.
- github에 새로운 코드가 커밋되면 이를 자동으로 배포해주는 CI/CD기능이 탑재 되어 있다.
- 퍼블리싱이 완료되면 Netlify를 통해서 배포 테스트를 진행하면 좋다.
- 그리고 Production Level의 배포는 각 어플리케이션의 상황에 맞게 배포를 진행한다. 
- https://app.netlify.com/

### Practice4 : 헤더까지 개발된 리액트 앱 배포하기

1. netlify 접속
2. github 아이디로 로그인 
3. Team overview > Sites > Add new Site > import an existing project (project read 권한 부여) 
4. 프로젝트 선택
5. Build settings
   1. build command : yarn run build
   2. publish directory : dist
   3. add environment variables (optional)
6. check deployment url 


### 이슈 체크

page not found error

```js
package.json의 scripts항목에 다음을 추가
    "postbuild": "echo '/* /index.html 200' | cat > dist/_redirects",

- npm에서 build가 끝나면 postbuild의 스크립트를 자동으로 실행시켜 준다.
- pre접두사를 이용하면 build 시작전 실행할 스크립트를 작성할 수 있다.

```


# bootstrap 연동

## install

docs : https://react-bootstrap.netlify.app/

```
npm install react-bootstrap bootstrap
or
yarn add react-bootstrap bootstrap
```

css 파일을 import 합니다. 
- 컴포넌트의 시작점인 main.jsx 폴더에 넣어주면 된다.

```js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
+ import "bootstrap/dist/css/bootstrap.min.css";
...

```

## Basic : Bootstrap1

Boostrap의 버튼을 가져와서 랜더링 합니다.
- https://react-bootstrap.netlify.app/docs/components/buttons#api


```js
import Button from "react-bootstrap/Button";

const Bootstrap1 = () => {
  return (
    <>
      <Button>Primary</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="secondary" size="lg">
        Link
      </Button>
    </>
  );
};

export default Bootstrap1;

```


## Basic : Bootstrap2

Boostrap의 모달창을 가져와서 랜더링 합니다.
- https://react-bootstrap.netlify.app/docs/components/modal#live-demo


```js
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Bootstrap2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Bootstrap2;
```

## Practice : Bootstrap3

```js
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

function Bootstrap3() {
  return (
    <SBootstrap3>
      <Card style={{ width: "600px" }}>
        <Card.Img
          style={{ objectFit: "cover", height: "320px" }}
          variant="top"
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
        />
        <Card.Body>
          <CardTitle>
            스터디 모임에서 간단히 헬퍼와 토픽을 지정해보세요 지정해보세요
            지정해보세요
          </CardTitle>
          <CardText>
            스터디마스터에서는, 모임을 찾는 것은 물론 각 헬퍼를 지정하고 토픽을
            추가할 수 있어요. 클릭 몇번으로, 시간을 절약하는 꿀팁을 공..
          </CardText>
        </Card.Body>
      </Card>
    </SBootstrap3>
  );
}

export default Bootstrap3;

const SBootstrap3 = styled.div``;

const CardTitle = styled.div`
  margin-top: 24px;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.28px;
  font-size: 28px;
  font-weight: 500;

  /* 말줄임 */
  white-space: nowrap; /* 줄 바꿈 금지 */
  overflow: hidden; /* 넘치는 부분 감추기 */
  text-overflow: ellipsis; /* 말줄임 (...) */
  width: 100%; /* 표시할 너비 설정 */
`;

const CardText = styled.div`
  margin-top: 14px;
  opacity: 0.8;
  line-height: 1.65;
  letter-spacing: -0.23px;
  font-size: 14px;
`;

/*
1. img 에서 이미지 요소 사이즈에 맞춤
    object-fit: cover;


2.div 에서 이미지 요소 사이즈에 맞춤
    background-image: url('경로/이미지.jpg');
    background-size: cover;
*/

```

## develop : Boostrap4


아래 링크에서 > 홈 > 스터디마스터 100% 활용하기 ✍🏼 부분을 만들어본다.
- https://hungry-hawking-79d524.netlify.app/
- 적절한 컴포넌트로 분리해서 작업 진행
- React Child Component (Props pass) 을 이용해서 재활용 가능한 컴포넌트로 만들자.
- css의 flex, grid로도 레이아웃을 잡을 수 있지만, bootstrap의 grid를 사용해서 레아웃을 잡자. (아래 링크 참고)
-  https://react-bootstrap.netlify.app/docs/layout/grid



## 질의 및 지난 시간 과제 체크

- 카운터 예제 설명해보기 ?
- html/css > react컴포넌트 어떻게 옮기는가 ? 
- Header 에제