import React from 'react';
import { BrowserRouter as Router, Routes as RoutesRRD, Route } from 'react-router-dom';
import { Data, Home } from './pages';
import { Container, Header } from './components';
import { frontend } from './urls';

export const Routes = () => {
  return (
    <Router>
      <Header />
      <Container>
        <RoutesRRD>
          <Route path={frontend.home} element={<Home />} />
          <Route path={frontend.data} element={<Data />} />
        </RoutesRRD>
      </Container>
      
    </Router>
  );
};
