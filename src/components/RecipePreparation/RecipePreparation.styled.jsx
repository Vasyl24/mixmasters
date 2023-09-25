import styled from 'styled-components';
import recipeImgMob1x from '../../assets/recipe-img-mob.png';
import recipeImgMob2x from '../../assets/recipe-img-mob@2x.png';
import recipeImgTab1x from '../../assets/recipe-img-tabl.png';
import recipeImgTab2x from '../../assets/recipe-img-tabl@2x.png';
import recipeImgDesk1x from '../../assets/recipe-img-desk.png';
import recipeImgDesk2x from '../../assets/recipe-img-desk@2x.png';

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

export const ContainerImage = styled.div`
  margin-bottom: 80px;
  width: 335px;
  height: 430px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${recipeImgMob1x});
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${recipeImgMob2x});
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 140px;
    width: 704px;
    height: 430px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${recipeImgTab1x});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${recipeImgTab2x});
    }
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 631px;
    height: 480px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${recipeImgDesk1x});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${recipeImgDesk2x});
    }
  }
`;