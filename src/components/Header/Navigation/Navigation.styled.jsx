import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
  
`;

export const Nav = styled.nav`
  @media (max-width: 1023.98px) {
    position: fixed;
    z-index: 100;
    top: 72.8px;
    left: 0;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    background-color: #0a0a11;

    transform: translateX(100%);
    animation: ${props => (props.closing ? slideOut : slideIn)} 0.8s
      cubic-bezier(0.42, 0, 0.58, 1) forwards;
  }
`;

export const List = styled.ul`
  margin: 20% auto 0 auto;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
    gap: 16px;
    flex-direction: row;
    margin: 0;
  }
`;

export const Item = styled.li``;
export const Div = styled.div`
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    background: #161f37;
    border-color: transparent;
  }
`;
export const NavigationLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  line-height: calc(22.4 / 14);
  }
`;
