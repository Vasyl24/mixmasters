
import foto from '../../assets/recipe-img-desk.png';
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
 