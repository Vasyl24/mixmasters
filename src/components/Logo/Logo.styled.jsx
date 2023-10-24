import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import icons from '../../assets/sprite.svg';

const slideInFromTop = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const LogoLink = styled(NavLink)`
  margin-right: auto;
  z-index: 400;

  @media screen and (min-width: 1440px) {
  }
`;

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  animation: ${slideInFromTop} 0.8s ease-in-out forwards;
  transform: translateX(-200%);

  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const Icon = styled.svg`
  width: 22px;
  height: 22px;
  fill: var(--btn-color);

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const Name = styled.span`
  font-weight: 600;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    display: flex;
    align-items: center;
  }
`;

const Logo = () => {
  return (
    <NavLink to="/home" style={{ zIndex: 400 }}>
      <LogoGroup>
        <Icon>
          <a href="/home">
            <use xlinkHref={`${icons}#icon-logo`} />
          </a>
        </Icon>
        <Name>Drink Master</Name>
      </LogoGroup>
    </NavLink>
  );
};

export default Logo;
