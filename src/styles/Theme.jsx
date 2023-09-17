import { css } from "styled-components";

// contant

// unused

const WHITE_COLOR = "#FFFFFF";

const HOVER_GRAY_COLOR = "#F8F8F8";

const GERY_BROWN_COLOR = "#AAAAAA";
const BRWON_COLOR = "#AFA196";
const DARK_BROWN_COLOR = "#676564";
const LIGHT_BRWON_COLOR = "#FBF9F7";

// ------------------------------------------ used
const BLACK_COLOR = "#342e19";

const RED_COLOR = "#e02020";

const GRAY_COLOR_LIGHT = "#F7F7F7";
const GRAY_COLOR_TEXT_LIGHT = "#bbbbbb";
const GRAY_COLOR = "#6d7278";
const GRAY_COLOR_DARK = "#6D6D6D";

const YELLOW_COLOR_LIGHT = "#fff9e3";
const YELLOW_COLOR = "#ffc700";
const YELLOW_COLOR_DARK = "#FFA800";

const ORANGE_COLOR_LIGHT = "#ff9f5e";
const ORANGE_COLOR = "#fa6400";
const ORANGE_COLOR_DARK = "#fa6400";

const BLUE_COLOR_LIGHT = "#65d1fc";
const BLUE_COLOR = "#0db7fa";
const BLUE_COLOR_DARK = "#009fde";

// OPTION: mainColor 3가지 변경시 - theme 변경

const MAIN_COLOR_LIGHT = YELLOW_COLOR_LIGHT;
const MAIN_COLOR = YELLOW_COLOR;
const MAIN_COLOR_DARK = YELLOW_COLOR;

// mixin font
const FontMixin = {
  SpoqaHanSans: css`
    font-family: "SpoqaHanSans", "Noto Sans KR", sans-serif;
  `,
  NotoSans: css`
    font-family: "Noto Sans KR", "SpoqaHanSans", sans-serif;
  `,
};

// mixin custome Input css

// export to global styles
const InputMixin = {
  checkbox: css`
    input[type="checkbox"],
    input[type="radio"] {
      position: relative;
    }
    input[type="checkbox"]:after,
    input[type="radio"]:after {
      content: "";
      display: block;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      top: 1px;
      left: 4px;
    }

    input[type="checkbox"]:before,
    input[type="radio"]:before {
      content: "";
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      top: -3px;
      left: -3px;
      background-color: #d8d8d8;
      border-radius: 50%;
    }

    input[type="checkbox"]:checked:before,
    input[type="radio"]:checked:before {
      background-color: ${(props) => props.theme.MainColor3};
    }

    input[type="checkbox"]:checked:after,
    input[type="radio"]:checked:after {
      content: "";
      display: block;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      top: 1px;
      left: 4px;
    }
  `,
  range: css`
    // reset styles

    input[type="range"] {
      -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
      width: 100%; /* Specific width is required for Firefox. */
      background: transparent; /* Otherwise white in Chrome */
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
    }

    input[type="range"]:focus {
      outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
    }

    input[type="range"]::-ms-track {
      width: 100%;
      cursor: pointer;
      /* Hides the slider so custom styles can be added */
      background: transparent;
      border-color: transparent;
      color: transparent;
    }

    // handler styles

    /* Special styling for WebKit/Blink */
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: ${(props) => props.theme.MainColor3};
      cursor: pointer;
      margin-top: -7px;
    }

    /* All the same stuff for Firefox */
    input[type="range"]::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: ${(props) => props.theme.MainColor3};
      cursor: pointer;
    }

    /* All the same stuff for IE */
    input[type="range"]::-ms-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: ${(props) => props.theme.MainColor3};
      cursor: pointer;
    }

    // Bar styles

    input[type="range"]::-webkit-slider-runnable-track {
      width: 100%;
      height: 4px;
      cursor: pointer;
      /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
      background: ${(props) => props.theme.MainColor3};
      border-radius: 5px;
      /* border: 0.2px solid #010101; */
    }

    input[type="range"]:focus::-webkit-slider-runnable-track {
      background: ${(props) => props.theme.MainColor3};
    }

    input[type="range"]::-moz-range-track {
      width: 100%;
      height: 8.4px;
      cursor: pointer;
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      background: ${(props) => props.theme.MainColor3};
      border-radius: 1.3px;
      border: 0.2px solid #010101;
    }

    input[type="range"]::-ms-track {
      width: 100%;
      height: 8.4px;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      border-width: 16px 0;
      color: transparent;
    }
    input[type="range"]::-ms-fill-lower {
      background: #2a6495;
      border: 0.2px solid #010101;
      border-radius: 2.6px;
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    input[type="range"]:focus::-ms-fill-lower {
      background: ${(props) => props.theme.MainColor3};
    }
    input[type="range"]::-ms-fill-upper {
      background: ${(props) => props.theme.MainColor3};
      border: 0.2px solid #010101;
      border-radius: 2.6px;
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    input[type="range"]:focus::-ms-fill-upper {
      background: #367ebd;
    }
  `,
  radio: css``,
};

// mixin ColorMixin

const ColorMixin = {
  ColorMain: css`
    color: ${MAIN_COLOR};
  `,
  LevelBadge: css`
    min-width: 44px;
    min-height: 24px;
    padding: 1px 8px;
    border-radius: 11.5px;
    background-color: ${MAIN_COLOR_DARK};
    color: #ffffff;
    font-size: 14px;
    font-weight: 900;
  `,
};
// mixin LayoutMixin
const LayoutMixin = {
  flexH: css`
    display: flex;
    flex-flow: row nowrap;
  `,
  flexHC: css`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  `,
  flexV: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  flexVC: css`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  `,
  centering: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

// mixin Box
const BoxMixin = {
  BoxDefault: css`
    border-radius: 8px;
    border: solid 1px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
  `,
};

// mixin ComponentMixin
const ComponentMixin = {
  ButtonDefault: css`
    transition: all 0.3s ease-in-out;
    /* &:hover {
      border: solid 1px ${MAIN_COLOR_DARK};
    } */
  `,
  ButtonNormal: css`
    border: solid 1px rgba(109, 114, 120, 0.1);
    color: rgba(0, 0, 0, 0.25);
  `,
  ButtonAble: css`
    /* background-color: ${MAIN_COLOR}; */
    /* border: solid 1px ${MAIN_COLOR}; */
    background-color: ${BLACK_COLOR};
    color: #ffffff;
  `,
  ButtonDisable: css`
    border: solid 1px rgba(109, 114, 120, 0.1);
    background-color: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.25);
  `,
  ButtonOutline: css`
    /* color: ${MAIN_COLOR_DARK}; */
    /* border: solid 1px ${MAIN_COLOR_DARK}; */
    color: ${BLACK_COLOR};
    border: solid 1px ${BLACK_COLOR};
  `,
  ButtonChecked: css`
    border: solid 1px ${MAIN_COLOR_DARK};
    color: black;
  `,
  ButtonStrong: css`
    border: solid 1px #342e19;
    color: #342e19;
  `,
  // ButtonDark: css`
  //   background-color: ${BLACK_COLOR};
  //   color: #ffffff;
  // `,
  // ButtonDarkOutline: css`
  //   color: ${BLACK_COLOR};
  //   border: solid 1px ${BLACK_COLOR};
  // `,
  ButtonAbleMainColor: css`
    color: white;
    background-color: ${MAIN_COLOR};
    border: solid 1px ${MAIN_COLOR};
  `,
  ButtonOutlineMainColor: css`
    color: ${MAIN_COLOR_DARK};
    border: solid 1px ${MAIN_COLOR_DARK};
  `,
  ButtonOutlineOnlyMainColor: css`
    border: solid 1px ${MAIN_COLOR_DARK};
  `,
  ButtonGrey: css`
    background-color: #c9c9c9;
    color: #ffffff;
  `,
  TextInputNormal: css`
    border: solid 1px rgba(109, 114, 120, 0.1);
  `,
  TextInputAble: css`
    background-color: ${MAIN_COLOR};
    border: solid 1px ${MAIN_COLOR};
    color: white;
  `,
  TextInputDisable: css`
    border: solid 1px rgba(109, 114, 120, 0.1);
    background-color: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.25);
  `,
  TextInputOutline: css`
    color: ${MAIN_COLOR_DARK};
    border: solid 1px ${MAIN_COLOR_DARK};
  `,
  LevelBadgeDefault: css`
    color: #ffffff;
    font-size: 14px;
    font-weight: 900;
    border-radius: 11.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 20px;
    width: 44px;
    height: 24px;
  `,
  LevelBadgeAble: css`
    background-color: ${MAIN_COLOR};
  `,
  LevelBadgeDisable: css`
    background-color: #e4e4e4;
  `,
};

const Theme = {
  whiteColor: `${WHITE_COLOR}`,
  blackColor: `${BLACK_COLOR}`,
  lightBrownColor: `${LIGHT_BRWON_COLOR}`,
  brownColor: `${BRWON_COLOR}`,
  darkBrownColor: `${DARK_BROWN_COLOR}`,

  grAyColor: `${GRAY_COLOR}`,

  borderBrownTransparent: `2px solid transparent`,
  borderBrown: `2px solid ${BRWON_COLOR};`,
  borderBrownDefault: `4px solid transparent;`,
  borderBrownHover: `4px solid ${GERY_BROWN_COLOR};`,
  borderBrownStrong: `4px solid ${BRWON_COLOR};`,

  borderBrownDefault1px: `1px solid transparent;`,
  borderBrownHover1px: `1px solid ${GERY_BROWN_COLOR};`,
  borderBrownStrong1px: `1px solid ${BRWON_COLOR};`,

  yellowColor: `${YELLOW_COLOR}`,
  hoverGrAyColor: `${HOVER_GRAY_COLOR}`,

  /* custom Color */

  // study master ==================== used ====================

  // colors
  RedColor: `${RED_COLOR}`,

  MainColor1: `${MAIN_COLOR_LIGHT}`,
  MainColor2: `${MAIN_COLOR}`,
  MainColor3: `${MAIN_COLOR_DARK}`,

  OrangeColor1: `${ORANGE_COLOR_LIGHT}`,
  OrangeColor2: `${ORANGE_COLOR}`,
  OrangeColor3: `${ORANGE_COLOR_DARK}`,

  BlueColor1: `${BLUE_COLOR_LIGHT}`,
  BlueColor2: `${BLUE_COLOR}`,
  BlueColor3: `${BLUE_COLOR_DARK}`,

  GrayColor1: `${GRAY_COLOR_LIGHT}`,
  GrayColorText1: `${GRAY_COLOR_TEXT_LIGHT}`,
  GrayColor2: `${GRAY_COLOR}`,
  GrayColor3: `${GRAY_COLOR_DARK}`,
  ColorPlaceHolder: `#bbbbbb`,

  /* study master theme color */
  orangeColor: `${ORANGE_COLOR}`,
  blueColor: `${BLUE_COLOR}`,

  /**shadow */
  boxShadow: `box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);`,

  //border
  borderMain: `1px solid ${MAIN_COLOR};`,
  borderDefault: `solid 1px rgba(0, 0, 0, 0.1);`,
  BorderDefault: `solid 1px rgba(0, 0, 0, 0.1);`,
  // layout

  /*breakpoints */
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

const FTheme = {
  ...Theme,
  ...FontMixin,
  ...InputMixin,
  ...ColorMixin,
  ...LayoutMixin,
  ...BoxMixin,
  ...ComponentMixin,
};

export default FTheme;
