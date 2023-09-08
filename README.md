
# goal

- [ ] install react
- [ ] react component basic
  - [ ] React Structure
  - [ ] React Child Component (Props pass)
  - [ ] Make Counter 
- [ ] styling
  - [ ] install styled-components, styled-breakpoints
  - [ ] global styles > reset css ( https://meyerweb.com/eric/tools/css/reset/ )
  - [ ] google fonts > https://fonts.google.com/noto/specimen/Noto+Sans+KR
  - [ ] animation 
- [ ] develop - header (https://hungry-hawking-79d524.netlify.app/)

---


# install react

```
# nodejs 를 설치합니다.
install nodejs

# vscode 
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
## Port 3000 변경

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

# react component basic

##  React Structure

##  React Child Component (Props pass)

## Practice - html+css > React Components

## Practice -  Make Counter

# styling

## install styled-components, styled-breakpoints 

```
yarn add styled-components 
yarn add styled-breakpoints
```

```

```

# develop - header

## resource 