import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionContainer = styled.section`
  padding-top: 80px;
  margin-bottom: 112px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    padding-top: 120px;
    margin-bottom: 123px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    padding-top: 128px;
    margin-bottom: 160px;
  }
`;
export const Container = styled.div`
  margin-bottom: 47px;
  @media screen and (min-width: 768px) {
    margin-bottom: 54px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;

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
    margin-bottom: 40px;
    width: 500px;
  }
`;
export const Picture = styled.img`
  width: 252px;
  @media screen and (min-width: 768px) {
    width: 359px;
  }
`;
export const Button = styled(Link)`
  z-index: 2000;
  display: inline-block;
  border-radius: 42px;
  background-color: var(--btn-color);
  padding: 14px 40px;
  color: var(--text-btn-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--hover-btn-color);
    color: var(--hover-txt-color);
  }
  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
  }
`;
