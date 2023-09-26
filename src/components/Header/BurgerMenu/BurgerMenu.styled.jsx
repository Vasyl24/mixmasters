import React from 'react';
import icons from '../../../assets/sprite.svg';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  stroke: #f3f3f3;

  @media (min-width: 768px) {
    width: 38px;
    height: 38px;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const Icon = styled.svg`
  width: 100%;
  height: 100%;
`;

const BurgerMenuWrapper = styled.div`
  display: block; /* Always show the burger menu button */
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

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
            <use href={`${icons}#close`} />
          ) : (
            <use href={`${icons}#burger`} />
          )}
        </Icon>
      </IconWrapper>

      <BurgerMenuWrapper isOpen={isOpenBurgerMenu && !isDesktop}>
        <Navigation />
      </BurgerMenuWrapper>
    </>
  );
}

BurgerMenu.propTypes = {
  toggleMenu: PropTypes.func,
  isOpenBurgerMenu: PropTypes.bool,
  isDesktop: PropTypes.bool,
};
