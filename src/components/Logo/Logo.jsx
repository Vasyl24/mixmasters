import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogoGroup, Icon, Name } from './Logo.styled';
import icons from '../../assets/sprite.svg'

export default function Logo() {
  return (
    <NavLink to="/">
      <LogoGroup>
        <Icon>
         <svg>
        <use xlinkHref={`${icons}#icon-logo`} />
      </svg>
        </Icon>
        <Name>Drink Master</Name>
      </LogoGroup>
    </NavLink>
  );
}


