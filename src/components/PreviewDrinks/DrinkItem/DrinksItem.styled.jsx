import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledImg = styled.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 14px;
`;

export const StyledName = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const StyledBtn = styled(Link)`
  border: none;
  background-color: inherit;
  color: var(--text-color);
  opacity: 0.5;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
