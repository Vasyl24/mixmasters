import {
  StyledItem,
  StyledContainer,
  StyledBtn,
  StyledImg,
  StyledName,
  StyledType,
  StyledDescr,
  StyledBtnDel,
  StyledDelIcon,
} from './DrinksItem.styled';
import defaultImg from 'assets/rectangle-2.jpg';
import sprite from 'assets/sprite.svg';

const DrinksItem = props => {
  const { _id, drink, alcoholic, description, drinkThumb } = props.drink;
  const id = _id.$oid;
  const { onDeleteFunction } = props.onDelete;

  return (
    <StyledItem key={id}>
      <StyledImg src={drinkThumb ? drinkThumb : defaultImg} alt={drink} />
      <StyledName>{drink}</StyledName>
      <StyledType>{alcoholic}</StyledType>
      <StyledDescr>{description}</StyledDescr>
      <StyledContainer>
        <StyledBtn to={`/drink/${id}`}>See more</StyledBtn>
        <StyledBtnDel type="button" onClick={() => onDeleteFunction(id)}>
          <StyledDelIcon>
            <use href={sprite + '#icon-trash'} />
          </StyledDelIcon>
        </StyledBtnDel>
      </StyledContainer>
    </StyledItem>
  );
};
export default DrinksItem;
