import React from 'react';
import { NavWrapper, NavLink } from './Nav.styled';

export const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/drinks">Drinks</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add drink</NavLink>
        </li>
        <li>
          <NavLink to="/my">My drinks</NavLink>
        </li>
        <li>
          <NavLink to="/favorite">Favorites</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
