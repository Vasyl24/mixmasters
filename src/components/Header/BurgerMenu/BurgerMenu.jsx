import React from 'react';
import icons from '../../../assets/sprite.svg';
import { IconWrapper, Icon } from './BurgerMenu.styled';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';


export default function BurgerMenu({
  toggleMenu,
  isOpenBurgerMenu,
  isDesktop,
}) {
  return (
    <>
      <IconWrapper onClick={toggleMenu} id="burger_menu">
  <Icon className="icon">
    {isOpenBurgerMenu ? (
      <svg>
        <use xlinkHref={`${icons}#burger-close`} />
      </svg>
    ) : (
      <svg>
        <use xlinkHref={`${icons}#icon-burger`} />
      </svg>
    )}
  </Icon>
</IconWrapper>


      {isOpenBurgerMenu && !isDesktop && <Navigation />}
    </>
  );
}

BurgerMenu.propTypes = {
  toggleMenu: PropTypes.func,
  isOpenBurgerMenu: PropTypes.bool,
  isDesktop: PropTypes.bool,
};