import React, { forwardRef } from 'react';

import { Nav, List, Item, NavigationLink } from './Navigation.styled';

const Navigation = forwardRef((_, ref) => {
  return (
    <Nav ref={ref}>
      <List id="navigation">
        <Item>
          <NavigationLink to="/home" className="link">
            Home
          </NavigationLink>
        </Item>
        <Item>
          <NavigationLink to="/drinks" className="link">
            Drinks
          </NavigationLink>
        </Item>
        <Item>
          <NavigationLink to="/add" className="link">
            Add drink
          </NavigationLink>
        </Item>
        <Item>
          <NavigationLink to="/my" className="link">
            My drink
          </NavigationLink>
        </Item>
        <Item>
          <NavigationLink to="/favorite" className="link">
            Favorites
          </NavigationLink>
        </Item>
      </List>
    </Nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
