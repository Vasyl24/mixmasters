import { StyledList } from './Drinks.styled';
import drinks from '../../temporary/recipes.json';
import DrinksItem from 'components/PreviewDrinks/DrinkItem/DrinksItem';

export const Drinks = () => {
  return (
    <StyledList>
      {drinks.map(drink => (
        <DrinksItem drinkItem={drink} key={drink._id.$oid} />
      ))}
    </StyledList>
  );
};
