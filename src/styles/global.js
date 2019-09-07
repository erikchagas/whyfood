import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
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
`;
