import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    color: #2c3e50;
  }

  section {
    padding: 2rem;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
  }
`;
