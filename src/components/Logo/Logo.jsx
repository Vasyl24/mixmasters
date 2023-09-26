import React from 'react';
import { LogoGroup, Icon, Name, LogoLink } from './Logo.styled';
import icons from '../../assets/sprite.svg';

export default function Logo() {
  return (
    <LogoLink to="/home">
      <LogoGroup>
        <Icon>
          <use xlinkHref={`${icons}#icon-logo`} />
        </Icon>
        <Name>Drink Master</Name>
      </LogoGroup>
    </LogoLink>
  );
}
