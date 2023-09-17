- [goal](#goal)
- [1week](#1week)
- [install react](#install-react)
  - [React 프로젝트 Port 변경](#react-프로젝트-port-변경)
  - [절대 경로 설정](#절대-경로-설정)
- [React component basic](#react-component-basic)
  - [React Structure](#react-structure)
  - [React Child Component (Props pass)](#react-child-component-props-pass)
    - [Basic](#basic)
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
- [Develop](#develop)
  - [components - Header](#components---header)


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

### Basic
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


# Develop

## components - Header

- 헤더 컴포넌트를 만들어 봅니다.
ref : (https://hungry-hawking-79d524.netlify.app/)
