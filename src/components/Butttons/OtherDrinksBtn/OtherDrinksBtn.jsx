import { StyledOtherWrapper, StyledOtherDrinksBtn } from './OtherDrinksBtn.styled'

export const OtherDrinksBtn = () => {
  return (
    <StyledOtherWrapper>
      <StyledOtherDrinksBtn to={''}> 
        Other Drinks
      </StyledOtherDrinksBtn>
    </StyledOtherWrapper>
  );
};
// <StyledOtherDrinksBtn to={''}> //користувач переадресований на DrinksPage
// '' - маршрут