import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  StyledFilterContainer,
  StyledSelectInput,
  StyledTextInput,
} from './DrinksSearch.styled';

import { fetchCategories, fetchIngerients } from './DrinkSearchApi';

export const DrinksSearch = ({ setQuery, setCategory, setIngredient }) => {
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
  };

  const handleCategoryChange = e => {
    setCategory(e.value);
  };

  const handleIngredientChange = e => {
    setIngredient(e.value);
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
          options={categoryOptions}
        />
        <StyledSelectInput
          onChange={handleIngredientChange}
          classNamePrefix="Select"
          name="ingredient"
          placeholder="Ingredients"
          options={ingredientOptions}
        ></StyledSelectInput>
      </StyledFilterContainer>
    </label>
  );
};
