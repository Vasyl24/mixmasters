import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledOtherWrapper = styled.div`
display:flex;
justify-content:center;`

export const StyledOtherDrinksBtn = styled(NavLink)`
  border-radius: 42px;
  background-color: #F3F3F3;
  color: #161F37;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
  padding: 14px 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid transparent;
  margin-bottom: 92px;
  transition: background-color 400ms ease, border-color 400ms ease, color 400ms ease;
  
  &:hover {
	background-color: #161F37;
    color: #F3F3F3;
	}

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: calc(18 / 16);
    margin-bottom: 118px;
  }
`;