import React, { useState, useEffect } from 'react';
import { Drinks } from 'components/Drinks/Drinks';
import { DrinksSearch } from 'components/DrinksSearch/DrinksSearch';
import { PageTitle } from 'components/PageTitle/PageTitle';
import Paginator from 'components/Paginator/Paginator';
import { StyledMainContainer } from './DrinksPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectDrinks } from 'redux/drinks/drinksSelectors';
import { fetchAllDrinks } from 'redux/drinks/drinksOperations';
import { selectSearchQuery } from 'redux/filters/filtersSelectors';
import {
  setSelectedCategory,
  setSelectedIngredient,
} from 'redux/filters/filtersSlice';

export const DrinksPage = () => {
  const dispatch = useDispatch();

  const drinks = useSelector(selectDrinks);
  const searchQuery = useSelector(selectSearchQuery);
  const selectedCategory = useSelector(state => state.filters.selectedCategory);
  const selectedIngredient = useSelector(
    state => state.filters.selectedIngredient
  );

  const [filteredDrinks, setFilteredDrinks] = useState([]);

  useEffect(() => {
    dispatch(setSelectedCategory(selectedCategory));
    dispatch(setSelectedIngredient(selectedIngredient));

    dispatch(
      fetchAllDrinks({
        page: 1,
        limit: 9,
        filters: {
          searchQuery: searchQuery,
          selectedCategory: selectedCategory || null,
          selectedIngredient: selectedIngredient || null,
        },
      })
    );
  }, [dispatch, searchQuery, selectedCategory, selectedIngredient]);

  useEffect(() => {
    const filtered = drinks.filter(drink => {
      return (
        drink.drink.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!selectedCategory || drink.category === selectedCategory) &&
        (!selectedIngredient ||
          drink.ingredients.some(ingredient =>
            ingredient.title.includes(selectedIngredient)
          ))
      );
    });

    setFilteredDrinks(filtered);
  }, [drinks, searchQuery, selectedCategory, selectedIngredient]);

  return (
    <StyledMainContainer>
      <PageTitle title="Drinks" />
      <DrinksSearch />
      <Drinks drinks={filteredDrinks} />
      {filteredDrinks.length > 0 && <Paginator />}
    </StyledMainContainer>
  );
};

export default DrinksPage;
