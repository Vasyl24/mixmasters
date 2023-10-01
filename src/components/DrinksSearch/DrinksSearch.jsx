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

  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);
  const searchQuery = useSelector(selectSearchQuery);

  const handleTextChange = e => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleCategoryChange = e => {
    dispatch(setSelectedCategory(e.value));
  };

  const handleIngredientChange = e => {
    dispatch(setSelectedIngredient(e.value));
  };

  const categoryOptions = [
    { value: '', label: 'All categories' },
    ...categories.map(category => ({
      value: category,
      label: category,
    })),
  ];

  const ingredientOptions = [
    { value: '', label: 'Ingredients' },
    ...ingredients.map((ingredient, index) => ({
      key: index,
      value: ingredient.title,
      label: ingredient.title,
    })),
  ];

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <label htmlFor="categorySelect">
      <StyledFilterContainer>
        <StyledTextInput
          type="text"
          placeholder="Enter the text"
          value={searchQuery}
          onChange={handleTextChange}
        />
        <StyledSelectInput
          classNamePrefix="Select"
          onChange={handleCategoryChange}
          placeholder="All categories"
          options={categoryOptions}
        />
        <StyledSelectInput
          onChange={handleIngredientChange}
          classNamePrefix="Select"
          placeholder="Ingredients"
          options={ingredientOptions}
        ></StyledSelectInput>
      </StyledFilterContainer>
    </label>
  );
};
