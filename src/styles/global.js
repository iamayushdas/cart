import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    font-family: Montserrat, sans-serif
  }

  body, html, #root {
    width: 100%;
    height: 100%;
    scroll-behavior: smooth
  }

  h1, h2 {
    color: red;
  }

  h1 {
    font-size: 4.5rem;
    font-weight: 300;
    line-height: 1.2;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
  }

  h3 {
    font-weight: bolder
  }

  a, a:hover {
    text-decoration: none
  }

  @media (max-width:768px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default Global;
