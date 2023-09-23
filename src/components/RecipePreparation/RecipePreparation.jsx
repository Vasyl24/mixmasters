import foto from '../../assets/recipe-img-desk.png';

export function RecipePreparation({ recipe }) {
  return (
    <>
      <p>Recipe Preparation</p>
      <p>{recipe}</p>
      <img src={foto} alt="foto" />
    </>
  );
}
