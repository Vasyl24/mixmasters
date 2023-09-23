import styled from 'styled-components';

export const Title = styled.p`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.1;
  color: #f3f3f3;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 60px;
  }
`;

export const ContainerRecipe = styled.div`

  @media screen and (min-width: 1440px) {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 140px;
  }
`;

export const Recipe = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: #f3f3f3;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 549px;
  }
`;

export const Image = styled.img`
  margin-bottom: 80px;
  width: 335px;
  height: 430px;
  @media screen and (min-width: 768px) {
    margin-bottom: 140px;
    width: 704px;
    height: 430px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 631px;
    height: 480px;
  }
`;