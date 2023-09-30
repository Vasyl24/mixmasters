import { StyledList } from './Drinks.styled';
import DrinksItem from 'components/PreviewDrinks/DrinkItem/DrinksItem';

export const Drinks = ({ drinks }) => {
  return (
    <StyledList>
      {drinks.map(drink => (
        <DrinksItem drinkItem={drink} key={drink._id} />
      ))}
    </StyledList>
  );
};
