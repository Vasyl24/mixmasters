import { useDispatch, useSelector } from 'react-redux';
import {
  StyledFilterContainer,
  StyledSelectInput,
  StyledTextInput,
} from './DrinksSearch.styled';
import {
  selectCategories,
  selectIngredients,
  selectSearchQuery,
} from 'redux/filters/filtersSelectors';
import { useEffect } from 'react';
import { getCategories, getIngredients } from 'redux/filters/filtersOperations';
import {
  setSearchQuery,
  setSelectedCategory,
  setSelectedIngredient,
} from 'redux/filters/filtersOperations';

export const DrinksSearch = () => {
  const dispatch = useDispatch();

  const  categories  = useSelector(selectCategories);
  const  ingredients  = useSelector(selectIngredients);
  const searchQuery = useSelector(selectSearchQuery);

  const handleTextChange = e => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleCategoryChange = e => {
    dispatch(setSelectedCategory(e.target.value));
  };

  const handleIngredientChange = e => {
    dispatch(setSelectedIngredient(e.target.value));
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <StyledFilterContainer>
      <StyledTextInput
        type="text"
        placeholder="Enter the text"
        value={searchQuery}
        onChange={handleTextChange}
      />
      <StyledSelectInput
        value={categories.selectCategories}
        onChange={handleCategoryChange}
      >
        <option value="">All categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </StyledSelectInput>
      <StyledSelectInput
        value={ingredients.title}
        onChange={handleIngredientChange}
      >
        <option value="">Ingredients</option>
        {ingredients.map((ingredient, index) => (
          <option key={index} value={ingredient.title}>
            {ingredient.title}
          </option>
        ))}
      </StyledSelectInput>
    </StyledFilterContainer>
  );
};
