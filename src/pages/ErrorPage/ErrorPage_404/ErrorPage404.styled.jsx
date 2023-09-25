import React from 'react';
import styled from 'styled-components';
import DrinkDefault from '../../../assets/blue-iced-tea.png';
import DrinkImage2 from '../../../assets/blue-iced-tea@2x.png';
import DrinkImg1 from '../../../assets/blue-iced-tea.png';
import DrinkImg2 from '../../../assets/blue-iced-tea@2x.png';

// Оновлений імпорт для використання унікальних імен
export const ImgBoxStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: inherit;
`;

export const NotFoundImgStyled = styled.img`
  position: relative;
  width: 158px;
  height: 201px;
  top: 130px;

  @media (max-width: 768px) {
  width: 123px;
  height: 156px;
  top: 110px;
  }

  @media (min-width: 768px) {
    width: 158px;
    height: 201px;
    top: 120px;
  }

  @media (min-width: 1024px) {
  top: 130px;
}
`;

export const NotFoundTextStyled = styled.p`
  position: absolute;
  display: flex;
  gap: 120px;
  top: 130px;
  color: rgba(243, 243, 243, 0.1);
  text-align: center;
  font-size: 200px;
  font-weight: 600;
  line-height: calc(200 / 200);
  margin-right: 20px;

  @media (max-width: 768px) {
    font-size: 120px;
    font-style: normal;
    line-height: calc(123 / 120);
  }

  @media (min-width: 768px) {
    font-size: 150px;
    font-weight: 600;
    line-height: calc(150 / 123);
  }

  @media (min-width: 1024px) {
    font-size: 200px;
    font-weight: 600;
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

      <NotFoundTextStyled>
        <span>4</span> <span>4</span>
      </NotFoundTextStyled>
    </ImgBoxStyled>
  );
}
