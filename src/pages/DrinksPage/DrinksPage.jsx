import React, { useState, useEffect } from 'react';
import { Drinks } from 'components/Drinks/Drinks';
import { DrinksSearch } from 'components/DrinksSearch/DrinksSearch';
import { PageTitle } from 'components/PageTitle/PageTitle';
import Paginator from 'components/Paginator/Paginator';
import { StyledMainContainer } from './DrinksPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectDrinks } from 'redux/drinks/drinksSelectors';
import { fetchAllDrinks } from 'redux/drinks/drinksOperations';
import {
  selectCategories,
  selectIngredients,
  selectSearchQuery,
} from 'redux/filters/filtersSelectors';

export const DrinksPage = () => {
  const dispatch = useDispatch();

  const drinks = useSelector(selectDrinks);
  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);
  const searchQuery = useSelector(selectSearchQuery);

  // const [drinksPerPage, setDrinksPerPage] = useState(9);
  // const [pageNumbersToShow, setPageNumbersToShow] = useState(8);
  const [filteredDrinks, setFilteredDrinks] = useState([]);

  // const updateDrinksPerPageAndPageNumbers = () => {
  //   if (window.innerWidth < 768) {
  //     setDrinksPerPage(10);
  //     setPageNumbersToShow(5);
  //   } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
  //     setDrinksPerPage(10);
  //     setPageNumbersToShow(8);
  //   } else if (window.innerWidth >= 1440) {
  //     setDrinksPerPage(9);
  //     setPageNumbersToShow(8);
  //   }
  // };

  useEffect(() => {
    dispatch(
      fetchAllDrinks({
        page: 1,
        limit: 9,
        filters: {
          searchQuery: searchQuery,
          selectedCategory: categories.selectedCategory || null,
          selectedIngredient: ingredients.selectedIngredient || null,
        },
      })
    );

    // updateDrinksPerPageAndPageNumbers();

    // window.addEventListener('resize', updateDrinksPerPageAndPageNumbers);

    // return () => {
    //   window.removeEventListener('resize', updateDrinksPerPageAndPageNumbers);
    // };
  }, [
    dispatch,
    searchQuery,
    categories.selectedCategory,
    ingredients.selectedIngredient,
    categories,
  ]);

  useEffect(() => {
    const filtered = drinks.filter(drink => {
      return (
        drink.drink.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!categories.selectedCategory ||
          drink.category === categories.selectedCategory) &&
        (!ingredients.selectedIngredient ||
          drink.ingredients.some(ingredient =>
            ingredient.title.includes(ingredients.selectedIngredient)
          ))
      );
    });

    setFilteredDrinks(filtered);
  }, [
    drinks,
    searchQuery,
    categories.selectedCategory,
    ingredients.selectedIngredient,
  ]);

  return (
    <StyledMainContainer>
      <PageTitle title="Drinks" />
      <DrinksSearch />
      <Drinks drinks={filteredDrinks} />
      {filteredDrinks.length > 8 && (
        <Paginator
        // drinksPerPage={drinksPerPage}
        // totalDrinks={filteredDrinks.length}
        // pageNumbersToShow={pageNumbersToShow}
        />
      )}
    </StyledMainContainer>
  );
};

export default DrinksPage;
