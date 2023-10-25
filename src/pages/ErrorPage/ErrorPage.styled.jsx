import React from 'react';
import styled from 'styled-components';
import DrinkDefault from '../../assets/blue-iced-tea.png';
import DrinkImage2 from '../../assets/blue-iced-tea@2x.png';
import DrinkImg1 from '../../assets/blue-iced-tea.png';
import DrinkImg2 from '../../assets/blue-iced-tea@2x.png';

// Оновлений імпорт для використання унікальних імен
export const ImgBoxStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 260px;
  padding-top: 200px;

  @media screen and (max-width: 768px) {
    padding-bottom: 170px;
  }
  @media screen and (max-width: 1440px) {
    padding-bottom: 140px;
  }
`;

export const NotFoundImgStyled = styled.img`
  width: 123px;
  height: 156px;

  @media (min-width: 768px) {
    width: 158px;
    height: 200px;
  }
`;

export const NotFoundTextStyled = styled.span`
  color: var(--error-text-color);
  font-size: 120px;
  font-weight: 600;
  line-height: calc(123 / 120);
  font-style: normal;

  @media (min-width: 768px) {
    font-size: 150px;
    line-height: calc(123 / 150);
  }

  @media (min-width: 1440px) {
    font-size: 200px;
    line-height: calc(200 / 200);
  }
`;

export default function ErrorPage404() {
  return (
    <ImgBoxStyled>
      <source srcSet={`${DrinkImg1}, ${DrinkImg2} 2x`} type="image/webp" />
      <source srcSet={`${DrinkDefault}, ${DrinkImage2} 2x`} type="image/jpeg" />
      <NotFoundImgStyled
        className="notFoundImg"
        src={DrinkDefault}
        alt="Not Found"
      />
      <NotFoundTextStyled>4</NotFoundTextStyled>
      <NotFoundTextStyled>4</NotFoundTextStyled>
    </ImgBoxStyled>
  );
}
