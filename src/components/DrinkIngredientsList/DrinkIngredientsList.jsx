import {
  Subtitle,
  IngredientsContainer,
  IngredientItem,
  IngredientImage,
  CaptionContainer,
  IngredientName,
  IngredientAmount,
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
                <IngredientName>{name}</IngredientName>
                <IngredientAmount>Amount: {amount}</IngredientAmount>
              </CaptionContainer>
            </IngredientItem>
          );
        })} */}
        <IngredientItem key={'1'}>
          <IngredientImage src={defaultImage} alt="" />
          <CaptionContainer>
            <IngredientName>Coctail</IngredientName>
            <IngredientAmount>Amount: 2</IngredientAmount>
          </CaptionContainer>
        </IngredientItem>
        <IngredientItem key={'2'}>
          <IngredientImage src={defaultImage} alt="" />
          <CaptionContainer>
            <IngredientName>Coctail</IngredientName>
            <IngredientAmount>Amount: 2</IngredientAmount>
          </CaptionContainer>
        </IngredientItem>
        <IngredientItem key={'3'}>
          <IngredientImage src={defaultImage} alt="" />
          <CaptionContainer>
            <IngredientName>Coctail</IngredientName>
            <IngredientAmount>Amount: 2</IngredientAmount>
          </CaptionContainer>
        </IngredientItem>
        <IngredientItem key={'4'}>
          <IngredientImage src={defaultImage} alt="" />
          <CaptionContainer>
            <IngredientName>Coctail</IngredientName>
            <IngredientAmount>Amount: 2</IngredientAmount>
          </CaptionContainer>
        </IngredientItem>
        <IngredientItem key={'5'}>
          <IngredientImage src={defaultImage} alt="" />
          <CaptionContainer>
            <IngredientName>Coctail</IngredientName>
            <IngredientAmount>Amount: 2</IngredientAmount>
          </CaptionContainer>
        </IngredientItem>
      </IngredientsContainer>
    </>
  );
}
