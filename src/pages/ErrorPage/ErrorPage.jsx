import React from 'react';
import DrinkDefault from '../../assets/blue-iced-tea.png';
import DrinkImage2 from '../../assets/blue-iced-tea@2x.png';
import DrinkImg1 from '../../assets/blue-iced-tea.png';
import DrinkImg2 from '../../assets/blue-iced-tea@2x.png';

// Оновлений імпорт для використання унікальних імен
import {
  ImgBoxStyled,
  NotFoundImgStyled,
  NotFoundTextStyled,
} from './ErrorPage.styled';

export default function ErrorPage404() {
  return (
    <ImgBoxStyled>
      <source srcSet={`${DrinkImg1}, ${DrinkImg2} 2x`} type="image/webp" />
      <source srcSet={`${DrinkDefault}, ${DrinkImage2} 2x`} type="image/jpeg" />
      <NotFoundTextStyled>4</NotFoundTextStyled>

      <NotFoundImgStyled
        className="notFoundImg"
        src={DrinkDefault}
        alt="Not Found"
      />

      <NotFoundTextStyled>4</NotFoundTextStyled>
    </ImgBoxStyled>
  );
}
