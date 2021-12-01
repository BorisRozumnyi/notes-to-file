import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import { Routes } from './Routes';
import { GlobalStyle } from './globalStyle';
import { Store } from './state';

export const App = () => (
  <Store>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Store>
);
