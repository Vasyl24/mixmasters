import {
  StyledContainer,
  StyledBtn,
  StyledImg,
  StyledName,
} from './DrinksItem.styled';
import defaultImg from '../../../assets/rectangle-2.jpg';

const DrinksItem = props => {
  const { _id, drink, drinkThumb } = props.drinkItem;
  const src = drinkThumb || defaultImg;
  const title = drink.length >= 25 ? drink.slice(0, 23) + '...' : drink;

  return (
    <li key={_id}>
      <StyledImg src={src} alt={drink} />
      <StyledContainer>
        <StyledName>{title}</StyledName>
        <StyledBtn to={`/drinks/${_id}`}>See more</StyledBtn>
      </StyledContainer>
    </li>
  );
};
export default DrinksItem;
