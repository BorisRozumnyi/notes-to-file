import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import { Routes } from './Routes';
import { GlobalStyle } from './globalStyle';
import { Store } from './state';

export const App = () => {
  useEffect(() => {
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    fetch('/data/reade', config)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.message) {
            throw result;
          }
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Store>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Store>
  );
};
