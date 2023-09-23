import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledItem = styled.li`
  width: 335px;
  margin-bottom: 40px;
`;

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
  margin-top: 18px;
`;

export const StyledName = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;
`;

export const StyledType = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-top: 4px;
`;

export const StyledDescr = styled.p`
  height: 74px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-top: 18px;
`;

export const StyledBtn = styled(Link)`
  border: none;
  background: #161f37;
  padding: 14px 40px;
  font-weight: 500;
  line-height: 1.13;
  border-radius: 42px;
`;

export const StyledBtnDel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 40px;
  border: none;
  background: #161f37;
  margin-left: 8px;
`;

export const StyledDelIcon = styled.svg`
  width: 24px;
  height: 24px;
`;
