import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding-top: ${({ theme }) =>
      theme.spacing.headerHeight};
    margin: 0;
  }

  div, section {
    box-sizing: border-box;
  }
  h1{
    margin: 0;
  }
`;
