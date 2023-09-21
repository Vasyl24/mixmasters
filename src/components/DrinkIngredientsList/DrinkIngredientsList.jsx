export function DrinkIngredientsList({ ingredients }) {
  return (
    <>
      <p>Ingredients</p>
      <ul>
        {ingredients.map(({ id, name, foto, amount }) => {
          return (
            <li key={id}>
              <img src={foto} alt="{name}" width={'100px'} />
              <p>{name}</p>
              <p>Amount: {amount}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
