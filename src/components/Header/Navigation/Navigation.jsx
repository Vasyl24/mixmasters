import React, { forwardRef, useState } from 'react';
import { Nav, List, Item, NavigationLink } from './Navigation.styled';
import { motion } from 'framer-motion';

const Navigation = forwardRef((props, ref) => {
  const [isMenuOpen, ] = useState(true);

  const navAnimation = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    hiddenForExit: { opacity: 0, y: 100 },
  };

  return (
    <Nav>
      <motion.div
        initial="hidden"
        animate={isMenuOpen ? 'visible' : 'hidden'}
        exit="hiddenForExit"
        variants={navAnimation}
        transition={{ ease: 'easeOut', duration: 0.5, delay: 0.2 }}
        ref={ref}
      >
        <List id="navigation">
          <Item>
            <NavigationLink to="/home">Home</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to="/drinks">Drinks</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to="/add">Add drink</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to="/my">My drinks</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to="/favorite">Favorites</NavigationLink>
          </Item>
        </List>
      </motion.div>
    </Nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
