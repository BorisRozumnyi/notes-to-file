import React from 'react';
import { StyledHeader, List, NavItem, StyledLink } from '.';
import { frontend } from '../../urls';

export const Header = () => (
  <StyledHeader>
    <List>
      <NavItem>
        <StyledLink to={frontend.home}>
          Home
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to={frontend.data}>
          data
        </StyledLink>
      </NavItem>
    </List>
  </StyledHeader>
);
