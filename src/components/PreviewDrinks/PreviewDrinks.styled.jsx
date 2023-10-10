import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionContainer = styled.section`
  margin-bottom: 80px;
  @media (min-width: 768px) {
    margin-bottom: 140px;
  }
`;
export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  justify-content: center;
  margin-bottom: 60px;
  @media (min-width: 768px) {
    width: 704px;
    row-gap: 80px;
    margin-bottom: 80px;
  }
  @media (min-width: 1440px) {
    width: 1240px;
  }
`;
export const CategoryItem = styled.li``;

export const CategoryDrinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 40px;
  justify-content: center;
  align-items: center;
`;
export const Category = styled.h3`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.1;
  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;
export const Button = styled(Link)`
  z-index: 2000;
  display: block;
  text-align: center;
  width: 170px;
  margin: 0px auto;
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
    width: 186px;
  }
  @media (min-width: 1440px) {
  }
`;
