import {
  Subtitle,
  IngredientsContainer,
  IngredientItem,
  ContainerImage,
  CaptionContainer,
  IngredientName,
  IngredientAmount,
} from './DrinkIngredientsList.styled';
import defaultImage from '../../assets/rectangle-2.png';

export function DrinkIngredientsList({ ingredients }) {
  return (
    <>
      <Subtitle>Ingredients</Subtitle>
      <IngredientsContainer>
        {ingredients.map(({ _id, title, ingredientId, measure }) => {
 const { ingredientThumb } = ingredientId;
          return (
            <IngredientItem key={_id}>
              {ingredientThumb ? (
                <ContainerImage img={ingredientThumb} />
              ) : (
                <ContainerImage img={defaultImage} />
              )}
              <CaptionContainer>
                <IngredientName>{title}</IngredientName>
                <IngredientAmount>{measure}</IngredientAmount>
              </CaptionContainer>
            </IngredientItem>
          );
        })}
      </IngredientsContainer>
    </>
  );
}
