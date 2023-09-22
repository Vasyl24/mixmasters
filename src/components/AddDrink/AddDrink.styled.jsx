import styled from 'styled-components';
export const SectionContainer = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    padding-top: 128px;
    padding-bottom: 160px;
  }
`;
export const Container = styled.div``;

export const Header = styled.h1`
  margin-bottom: 16px;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    font-size: 56px;
    line-height: 1.1;
  }
  @media screen and (min-width: 1440px) {
    width: 715px;
    font-size: 64px;
  }
`;
export const Text = styled.p`
  margin-bottom: 32px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    font-size: 18px;
    line-height: 1.3;
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
  }
`;
export const Picture = styled.img`
  width: 252px;
`;
