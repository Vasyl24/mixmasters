import {
  StyledItem,
  StyledContainer,
  StyledImg,
  StyledName,
  StyledType,
  StyledDescr,
} from './DrinksItem.styled';
import defaultImg from 'assets/rectangle-2.jpg';
import { DeleteBtn } from 'components/Butttons/DeleteBtn/DeleteBtn';
import { SeeButton } from 'components/Butttons/SeeMoreBtn/SeeMoreBtn';

const DrinksItem = props => {
  const { _id, drink, alcoholic, description, drinkThumb } = props.drink;
  const id = _id.$oid;
  const { onDelete } = props;

  return (
    <StyledItem key={id}>
      <StyledImg src={drinkThumb ? drinkThumb : defaultImg} alt={drink} />
      <StyledName>{drink}</StyledName>
      <StyledType>{alcoholic}</StyledType>
      <StyledDescr>{description}</StyledDescr>
      <StyledContainer>
        <SeeButton id={id} />
        <DeleteBtn type="button" onDelete={onDelete} id={id} />
      </StyledContainer>
    </StyledItem>
  );
};
export default DrinksItem;
