import styled from 'styled-components';

export const ContainerHero = styled.div`
 
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    margin-bottom:100px;
    padding-top: 132px;
  }
`;

export const ContainerDescription = styled.div`
  padding-top: 80px;
  @media screen and (min-width: 768px) {
    padding-top: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 10px;
    width: 600px;
  }
`;

export const GlassAlcohol = styled.p`
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  color: rgba(243, 243, 243, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Description = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: rgb(243, 243, 243);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Button = styled.button`
  padding: 14px 40px;
  margin-bottom: 80px;
  font-size: 14px;
  line-height: calc(18 / 14);
  font-weight: 600;
  background: #f3f3f3;
  color: #161f37;
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  cursor: pointer;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }

  &:hover {
    background: transparent;
    color: #f3f3f3;
  }
`;

export const Picture = styled.img`
  margin-bottom: 18px;
  width: 335px;
  height: 400px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
    width: 704px;
    height: 400px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 400px;
    height: 400px;
  }
`;