import {
  Subtitle,
  IngredientsContainer,
  IngredientItem,
  IngredientImage,
  CaptionContainer,
  CaptionText,
} from './DrinkIngredientsList.styled';
import defaultImage from '../../assets/rectangle-2.jpg';

export function DrinkIngredientsList({ ingredients }) {
  return (
    <>
      <Subtitle>Ingredients</Subtitle>
      <IngredientsContainer>
        {/* {ingredients.map(({ id, name, foto, amount }) => {
          return (
            <IngredientItem key={id}>
              <IngredientImage src={foto} alt="{name}" width={'100px'} />
              <CaptionContainer>
                <CaptionText>{name}</CaptionText>
                <CaptionText>Amount: {amount}</CaptionText>
              </CaptionContainer>
            </IngredientItem>
          );
        })} */}
        <IngredientItem key={'1'}>
          <IngredientImage src={defaultImage} alt="" />
          <CaptionContainer>
            <CaptionText>Coctail</CaptionText>
            <CaptionText>Amount: 2</CaptionText>
          </CaptionContainer>
        </IngredientItem>
        <IngredientItem key={'2'}>
          <IngredientImage src={defaultImage} alt="" />
          <CaptionContainer>
            <CaptionText>Coctail</CaptionText>
            <CaptionText>Amount: 2</CaptionText>
          </CaptionContainer>
        </IngredientItem>
        <IngredientItem key={'3'}>
          <IngredientImage src={defaultImage} alt="" />
          <CaptionContainer>
            <CaptionText>Coctail</CaptionText>
            <CaptionText>Amount: 2</CaptionText>
          </CaptionContainer>
        </IngredientItem>
      </IngredientsContainer>
    </>
  );
}
