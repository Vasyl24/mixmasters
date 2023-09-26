
import {
  Title,
  Recipe,
  ContainerRecipe,
  ContainerImage,
} from './RecipePreparation.styled';

export function RecipePreparation({ description }) {
  return (
    <>
      <Title>Recipe Preparation</Title>
      <ContainerRecipe>
        <Recipe>{description}</Recipe>
        <ContainerImage />
      </ContainerRecipe>
    </>
  );
}
