import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding-top: ${({ theme }) => theme.spacing.headerHeight};
    margin: 0;
  }
  div, section {
    box-sizing: border-box;
  }
  ul {
    padding-left: 0;
    margin: 0;
  }
  li {
    list-style: none
  }
  a {
    color: ${({ theme }) => theme.color.secondary};
    text-decoration: none;
  }
  h1{
    margin: 0;
  }
`;
