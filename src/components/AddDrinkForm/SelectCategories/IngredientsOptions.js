import ingredientsList from '../../../temporary/ingredients.json';

export const ingredientsOption = [];

ingredientsList.map((arr) =>
  ingredientsOption.push({
    value: arr.title,
    label: arr.title,
    id: arr._id.$oid,
  })
);
