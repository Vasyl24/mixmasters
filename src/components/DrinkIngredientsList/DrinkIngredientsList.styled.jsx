import styled from 'styled-components';

export const Subtitle = styled.p`
  margin-bottom: 42px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: rgba(243, 243, 243, 0.5);
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const IngredientsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 80px;
  column-gap: 21px;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    column-gap: 22px;
    row-gap: 22px;
  }
  @media screen and (min-width: 1440px) {
    column-gap: 35px;
    row-gap: 35px;
    margin-bottom: 100px;
  }
`;

export const IngredientItem = styled.li`
  width:157px;

  @media screen and (min-width: 768px) {
    width:220px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const IngredientImage = styled.img`
  margin-bottom: 8px;
  width: 220px;

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const CaptionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const IngredientName = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
   
  }
`;

export const IngredientAmount = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: rgba(243, 243, 243, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
  @media screen and (min-width: 1440px) {
  }
`;