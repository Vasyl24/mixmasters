import React, { useState, useEffect } from 'react';
import { Drinks } from 'components/Drinks/Drinks';
import { DrinksSearch } from 'components/DrinksSearch/DrinksSearch';
import { PageTitle } from 'components/PageTitle/PageTitle';
import Paginator from 'components/Paginator/Paginator';
import { StyledMainContainer } from './DrinksPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDrinks,
  selectLimit,
  selectPage,
} from 'redux/drinks/drinksSelectors';
import { fetchAllDrinks, setLimitValue } from 'redux/drinks/drinksOperations';
import { selectSearchQuery } from 'redux/filters/filtersSelectors';
import {
  setSelectedCategory,
  setSelectedIngredient,
} from 'redux/filters/filtersSlice';
import { useSearchParams } from 'react-router-dom';

export const DrinksPage = () => {
  const dispatch = useDispatch();

  const drinks = useSelector(selectDrinks);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const allDrinks = drinks.result;
  const count = drinks.count;

  const searchQuery = useSelector(selectSearchQuery);
  const selectedCategory = useSelector(state => state.filters.selectedCategory);
  const selectedIngredient = useSelector(
    state => state.filters.selectedIngredient
  );

  const [filteredDrinks, setFilteredDrinks] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ page, limit });
  }, [page, limit, setSearchParams]);

  const [pageNumbersToShow, setPageNumbersToShow] = useState(8);

  const updateDrinksPerPageAndPageNumbers = () => {
    if (window.innerWidth < 768) {
      dispatch(setLimitValue(10));
      setPageNumbersToShow(5);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      dispatch(setLimitValue(10));
      setPageNumbersToShow(8);
    } else if (window.innerWidth >= 1440) {
      dispatch(setLimitValue(9));
      setPageNumbersToShow(8);
    }
  };

  useEffect(() => {
    updateDrinksPerPageAndPageNumbers();
    window.addEventListener('resize', updateDrinksPerPageAndPageNumbers);
    return () => {
      window.removeEventListener('resize', updateDrinksPerPageAndPageNumbers);
    };
  }, []);

  useEffect(() => {
    dispatch(setSelectedCategory(selectedCategory));
    dispatch(setSelectedIngredient(selectedIngredient));

    dispatch(
      fetchAllDrinks({
        page: Number(searchParams.get('page')),
        limit: Number(searchParams.get('limit')),
        filters: {
          searchQuery: searchQuery,
          selectedCategory: selectedCategory || null,
          selectedIngredient: selectedIngredient || null,
        },
      })
    );
  }, [
    dispatch,
    limit,
    page,
    searchParams,
    searchQuery,
    selectedCategory,
    selectedIngredient,
  ]);

  useEffect(() => {
    if (allDrinks) {
      const filtered = allDrinks.filter(drink => {
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
    }
  }, [allDrinks, drinks, searchQuery, selectedCategory, selectedIngredient]);

  return (
    <StyledMainContainer>
      <PageTitle title="Drinks" />
      <DrinksSearch />
      <Drinks drinks={filteredDrinks} />
      {filteredDrinks.length > 0 && (
        <Paginator
          page={page}
          limit={limit}
          count={count}
          pageNumbersToShow={pageNumbersToShow}
        />
      )}
    </StyledMainContainer>
  );
};

export default DrinksPage;
