import { useDispatch, useSelector } from 'react-redux';
import {
  StyledFilterContainer,
  StyledSelectInput,
  StyledTextInput,
} from './DrinksSearch.styled';
import {
  selectCategories,
  selectIngredients,
} from 'redux/filters/filtersSelectors';
import { useEffect } from 'react';
import { getCategories, getIngredients } from 'redux/filters/filtersOperations';

export const DrinksSearch = ({
  onSearch,
  onCategoryChange,
  onIngredientChange,
}) => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <StyledFilterContainer>
      <StyledTextInput
        type="text"
        placeholder="Enter the text"
        onChange={e => onSearch(e.target.value)}
      />
      <StyledSelectInput onChange={e => onCategoryChange(e.target.value)}>
        <option value="">All categories</option>
        {categories.map(category => (
          <option value={category}>{category}</option>
        ))}
      </StyledSelectInput>
      <StyledSelectInput onChange={e => onIngredientChange(e.target.value)} >
        <option value="">
          Ingredients
        </option>
        {ingredients.map(ingredient => (
          <option value={ingredient.title}>{ingredient.title}</option>
        ))}
      </StyledSelectInput>
    </StyledFilterContainer>
  );
};
