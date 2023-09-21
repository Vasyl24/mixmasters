import {
  StyledItem,
  StyledContainer,
  StyledBtn,
  StyledImg,
  StyledName,
} from './DrinksItem.styled';
import defaultImg from '../../../assets/rectangle-2.jpg';

const DrinksItem = props => {
  const { _id, drink, drinkThumb } = props.drinkItem;
  // const src = drinkThumb || defaultImg;

  return (
    <StyledItem key={_id}>
      <StyledImg src={defaultImg} alt={drink} />
      <StyledContainer>
        <StyledName>{drink}</StyledName>
        <StyledBtn to={`/drink/${_id}`}>See more</StyledBtn>
      </StyledContainer>
    </StyledItem>
  );
};
export default DrinksItem;
