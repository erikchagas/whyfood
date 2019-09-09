import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: -moz-none;
    -o-user-select: none;
    user-select: none;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #f0f0f0;
    -webkit-font-smoothing: antialised!important;
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  ul > li {
    list-style: none;
  }

  p {
      -webkit-user-select: text;
      -khtml-user-select: text;
      -moz-user-select: text;
      -o-user-select: text;
      user-select: text;
  }
`;
