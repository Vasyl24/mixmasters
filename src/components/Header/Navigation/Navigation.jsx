import React, { forwardRef } from 'react';

import { Nav, List, Item, NavigationLink, Div } from './Navigation.styled';

const Navigation = forwardRef((_, ref) => {
  return (
    <Nav ref={ref}>
      <List id="navigation">
        <Item>
          <Div>
            <NavigationLink to="/home" className="link">
              Home
            </NavigationLink>
          </Div>
        </Item>
        <Item>
          <Div>
            <NavigationLink to="/drinks" className="link">
              Drinks
            </NavigationLink>
          </Div>
        </Item>
        <Item>
          <Div>
            <NavigationLink to="/add" className="link">
              Add drink
            </NavigationLink>
          </Div>
        </Item>
        <Item>
          <Div>
            <NavigationLink to="/my" className="link">
              My drink
            </NavigationLink>
          </Div>
        </Item>
        <Item>
          <Div>
            <NavigationLink to="/favorite" className="link">
              Favorites
            </NavigationLink>
          </Div>
        </Item>
      </List>
    </Nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
