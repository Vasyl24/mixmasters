import { useSelector } from 'react-redux';
import DrinksItem from 'components/DrinksItem/DrinksItem';
import { StyledList } from './DrinksList.styled';
import { selectDrinks } from 'redux/drinks/drinksSelectors';

const DrinksList = onDelete => {
  const drinks = useSelector(selectDrinks);
  return (
    <StyledList>
      {drinks.map(drink => (
        <DrinksItem drink={drink} onDelete={onDelete} />
      ))}
    </StyledList>
  );
};

export default DrinksList;
