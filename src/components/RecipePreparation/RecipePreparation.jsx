
import {
  Title,
  Recipe,
  ContainerRecipe,
  ContainerImage,
} from './RecipePreparation.styled';

export function RecipePreparation({ recipe }) {
  return (
    <>
      <Title>Recipe Preparation</Title>
      <ContainerRecipe>
        <Recipe>{recipe}</Recipe>
        <ContainerImage />
      </ContainerRecipe>
    </>
  );
}
