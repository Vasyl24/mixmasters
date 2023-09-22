import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledAddDrinksBtn = styled(NavLink)`
 padding: 14px 40px;
  font-size: 14px;
  line-height: calc(18 / 16);
  font-weight: 600;
  background: transparent;
  color: #f3f3f3;
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  cursor: pointer;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
  }

  &:hover {
    background: #f3f3f3;
    color: #161f37;
  }
  }
`;
