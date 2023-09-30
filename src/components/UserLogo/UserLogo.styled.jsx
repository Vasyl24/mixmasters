import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(500%);
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

export const UserMenu = styled.div`
  /* padding: 20px 0px; */
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-right: 14px;
  transition: transform;
  cursor: pointer;
  animation: ${props => (props.closing ? slideOut : slideIn)} 0.8s
    cubic-bezier(0.42, 0, 0.58, 1) forwards;

  @media (min-width: 768px) {
    margin-right: 24px;
    gap: 14px;
  }
  @media (min-width: 1440px) {
    margin-right: 0;
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const UserIcon = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
