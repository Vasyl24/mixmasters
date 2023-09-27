import { useSelector } from 'react-redux';
import DrinksItem from 'components/DrinksItem/DrinksItem';
import { StyledList } from './DrinksList.styled';
import { selectDrinks } from 'redux/drinks/drinksSelectors';

const DrinksList = onDelete => {
  const drinks = useSelector(selectDrinks);
  console.log(drinks);
  const { handleDel } = onDelete;

  return (
    <StyledList>
      {drinks.map(drink => (
        <DrinksItem drink={drink} onDelete={handleDel} />
      ))}
    </StyledList>
  );
};

export default DrinksList;
