import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

export const Nav = styled.nav`
  animation: ${props => (props.closing ? slideOut : slideIn)};

  @media (max-width: 767.98px) {
    top: 72.8px;
  }

  @media (min-width: 768px) {
    top: 84.8px;
  }
  @media (max-width: 1439.98px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--background-color);
    z-index: 200;
  }

  @media (min-width: 1440px) {
    transform: translateX(0);
    z-index: 400;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 1000;

  @media (max-width: 1439.98px) {
    margin: 20% auto 0 auto;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const Item = styled.li``;
export const NavigationLink = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  border: 1px solid var(--border-icon-color);
  white-space: nowrap;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: var(--image-wrapper-color);
    border-color: var(--image-wrapper-color);
    color: ${props =>
      props.dataTheme === 'light' ? 'var(--background-color)' : '#f3f3f3'};
  }
  &.active {
    color: ${props =>
      props.dataTheme === 'light' ? 'var(--background-color)' : '#f3f3f3'};

    background: var(--image-wrapper-color);
    border-color: var(--image-wrapper-color);
  }
`;
