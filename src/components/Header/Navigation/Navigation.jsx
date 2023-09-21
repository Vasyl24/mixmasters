import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, List, Item } from './Navigation.styled';

const Navigation = forwardRef((_, ref) => {
  return (
    <Nav ref={ref}>
      <List id="navigation">
        <Item>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/drinks" className="link">
            Drinks
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/add" className="link">
            Add drink
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/my" className="link">
            My drink
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/favorite" className="link">
            Favorites
          </NavLink>
        </Item>
      </List>
    </Nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
