import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 8px;
  padding-top: 80px;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    padding-top: 140px;
    font-size: 56px;
    line-height: 1.1;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 160px;
    width: 715px;
    font-size: 64px;
  }
`;