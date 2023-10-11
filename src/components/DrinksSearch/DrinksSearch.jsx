import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  StyledFilterContainer,
  StyledSelectInput,
  StyledTextInput,
} from './DrinksSearch.styled';

import { fetchCategories, fetchIngerients } from './DrinkSearchApi';

export const DrinksSearch = ({
  query,
  setQuery,
  category,
  setCategory,
  ingredient,
  setIngredient,
  setPage,
}) => {
  const [categories, setCategories] = useState([]);
  const categoryOptions = categories.map(category => {
    return { value: category, label: category };
  });
  const [ingredients, setIngredients] = useState([]);
  const ingredientOptions = ingredients.map(ingredient => {
    return { value: ingredient.title, label: ingredient.title };
  });

  const handleTextChange = e => {
    setQuery(e.target.value);
    setPage(1);
  };

  const handleCategoryChange = e => {
    !e ? setCategory('') : setCategory(e.value);
    setPage(1);
  };

  const handleIngredientChange = e => {
    !e ? setIngredient('') : setIngredient(e.value);
    setPage(1);
  };

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await fetchCategories();
        setCategories(response);
      } catch (error) {
        if (error.code) {
          return toast.error(`Oops, something went wrong.`);
        }
      }
    }
    async function loadIngredients() {
      try {
        const response = await fetchIngerients();
        setIngredients(response);
      } catch (error) {
        if (error.code) {
          return toast.error(`Oops, something went wrong.`);
        }
      }
    }
    loadCategories();
    loadIngredients();
  }, []);

  return (
    <label htmlFor="categorySelect">
      <StyledFilterContainer>
        <StyledTextInput
          type="text"
          placeholder="Enter the text"
          name="query"
          // value={searchQuery}
          onChange={handleTextChange}
        />
        <StyledSelectInput
          classNamePrefix="Select"
          onChange={handleCategoryChange}
          placeholder="All categories"
          name="category"
          defaultValue={category}
          isClearable
          options={categoryOptions}
        />
        <StyledSelectInput
          onChange={handleIngredientChange}
          classNamePrefix="Select"
          name="ingredient"
          placeholder="Ingredients"
          defaultValue={ingredient}
          isClearable
          options={ingredientOptions}
        ></StyledSelectInput>
      </StyledFilterContainer>
    </label>
  );
};
