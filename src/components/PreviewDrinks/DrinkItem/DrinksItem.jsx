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

  return (
    <li key={_id.$oid}>
      <StyledImg src={src} alt={drink} />
      <StyledContainer>
        <StyledName>{drink}</StyledName>
        <StyledBtn to={`/drinks/${_id.$oid}`}>See more</StyledBtn>
      </StyledContainer>
    </li>
  );
};
export default DrinksItem;
