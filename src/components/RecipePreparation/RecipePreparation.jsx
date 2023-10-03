
import {
  Title,
  Description,
  Recipe,
  ContainerRecipe,
  ContainerImage,
  ContainerDescription,
} from './RecipePreparation.styled';

export function RecipePreparation({ description, instructions }) {
  return (
    <>
      <Title>Recipe Preparation</Title>
      <ContainerRecipe>
        <ContainerDescription>
          <Description>{description}</Description>
          <Recipe>{instructions}</Recipe>
        </ContainerDescription>
        <ContainerImage/>
      </ContainerRecipe>
    </>
  );
}
