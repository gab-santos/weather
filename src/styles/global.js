import { createGlobalStyle } from "styled-components";

import { fonts } from "./index";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    font: 400 14px "Open Sans", sans-serif;
    background-color: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased
  }

  input,
  button,
  textarea {
    font: 400 ${fonts.regular} "Open Sans", sans-serif;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }
`;
