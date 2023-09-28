import DrinksItem from 'components/DrinksItem/DrinksItem';
import { StyledList } from './DrinksList.styled';

const DrinksList = ({ drinks, handleDel }) => {
  return (
    <StyledList>
      {drinks.map(drink => (
        <DrinksItem key={drink._id} drink={drink} onDelete={handleDel} />
      ))}
    </StyledList>
  );
};

export default DrinksList;
