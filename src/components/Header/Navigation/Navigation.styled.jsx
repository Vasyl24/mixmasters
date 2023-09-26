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
  animation: ${props => (props.closing ? slideOut : slideIn)} 0.8s
    cubic-bezier(0.42, 0, 0.58, 1) forwards;

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
    background-color: #0a0a11;
    z-index: 200;
  }

  @media (min-width: 1440px) {
    margin-right: 190px;
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
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: var(--accent-color);
    border-color: transparent;
  }
  &.active {
    background: var(--accent-color);
    border-color: transparent;
  }
`;
