import foto from "../../assets/recipe-img.jpg";
import { Title, Recipe, Image, ContainerRecipe } from './RecipePreparation.styled';

export function RecipePreparation({ recipe }) {
    return (
      <>
        <Title>Recipe Preparation</Title>
        <ContainerRecipe>
          <Recipe>{recipe}</Recipe>
          <Image src={foto} alt="foto" />
        </ContainerRecipe>
      </>
    );
}
 