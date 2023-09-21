import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import icons from '../../assets/sprite.svg';


export const LogoGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-right: auto;

  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    gap: 14px;
  }

  @media screen and (min-width: 1024px) {
    margin-right: 0;
  }
`;

export const Icon = styled.svg`
  width: 22px;
  height: 22px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const Name = styled.span`
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    display: flex;
    align-items: center;
  }
`;

const Logo = () => {
  return (
    <NavLink to="/">
      <LogoGroup>
        <Icon>
          <use href={`${icons}#logo`} />
        </Icon>
        <Name>Drink Master</Name>
      </LogoGroup>
    </NavLink>
  );
};

export default Logo;
