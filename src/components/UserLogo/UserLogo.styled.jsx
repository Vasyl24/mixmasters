import styled, { keyframes } from 'styled-components';

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

export const UserMenu = styled.div`
  /* padding: 20px 0px; */
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  transition: transform;
  cursor: pointer;
  animation: ${props => (props.closing ? slideOut : slideIn)} 0.8s
    cubic-bezier(0.42, 0, 0.58, 1) forwards;

  @media (min-width: 768px) {
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
