import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSeeMoreBtn = styled(NavLink)`
  border-radius: 42px;
  background-color: var(--btn-background-color);
  color: var(--btn-text-color);
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
  padding: 14px 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid transparent;
  transition: background-color 400ms ease, border-color 400ms ease,
    color 400ms ease;

  &:hover {
    background-color: var(--hover-btn-color);
    color: var(--hover-txt-color);
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;
