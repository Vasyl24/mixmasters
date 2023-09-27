import styled from 'styled-components';
export const SectionContainer = styled.section`
  padding-top: 32px;
  padding-bottom: 80px;
`;
export const Container = styled.ul``;
export const CategoryItem = styled.li`
  margin: 0 auto 40px auto;

  @media (min-width: 768px) {
    margin: 0 auto 80px auto;
    width: 704px;
  }
  @media (min-width: 1440px) {
    width: 1240px;
    margin: 0 auto 80px auto;
  }
`;

export const CategoryDrinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 40px;
  justify-content: center;
  align-items: center;
`;
export const Category = styled.p`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.1;
`;
