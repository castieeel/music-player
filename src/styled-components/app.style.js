import { createGlobalStyle } from "styled-components";
import StratosSkyeng from "../assets/fonts/Stratos-Regular.woff";
import StratosSkyeng2 from "../assets/fonts/Stratos-Regular.woff2";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

//-------------------------------//

// ========== fonts ========
@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url(${StratosSkyeng2}) format("woff2"),
    url(${StratosSkyeng}) format("woff");
  font-weight: 400;
  font-style: normal;
}

//--------------------------

html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: ${(props) => props.theme.color};
}

.wrapper {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background: ${(props) => props.theme.background};
}

.container {
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.theme.backgroundContainer};
}

// ========== hover ========
._btn-text:hover {
  border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;
}

._btn-icon:hover svg {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}

// ========== activ ========

._btn-text:active {
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
}

._btn-icon:active svg {
  fill: transparent;
  stroke:  ${(props) => props.theme.color};
  cursor: pointer;
}

._btn-icon:active .track-play__like-svg,
._btn-icon:active .track-play__dislike-svg {
  fill: #696969;
  stroke:  ${(props) => props.theme.color};
  cursor: pointer;
}
`;
