import foto from "../../assets/recipe-img.jpg";
import { Title, Recipe, Image } from './RecipePreparation.styled';

export function RecipePreparation({ recipe }) {
    return (
      <>
        <Title>Recipe Preparation</Title>
        <Recipe>{recipe}</Recipe>
        <Image src={foto} alt="foto" />
      </>
    );
}
 