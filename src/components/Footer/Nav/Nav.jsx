import React from 'react';
import { NavWrapper, NavLink } from './Nav.styled'

export const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/drinks" activeClassName="active">
            Drinks
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">
            Add drink
          </NavLink>
        </li>
        <li>
          <NavLink to="/my" activeClassName="active">
            My drink
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorite" activeClassName="active">
            Favorites
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
