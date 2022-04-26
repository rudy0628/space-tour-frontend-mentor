import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Barlow Condensed', sans-serif;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    height: 100vh;
  }

  html {
    font-size: 62.5%;
  }
`;
