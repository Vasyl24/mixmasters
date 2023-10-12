import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { Drinks } from 'components/Drinks/Drinks';
import { DrinksSearch } from 'components/DrinksSearch/DrinksSearch';
import { PageTitle } from 'components/PageTitle/PageTitle';
import Paginator from 'components/Paginator/Paginator';
import { StyledMainContainer } from './DrinksPage.styled';
import { fetchDrinks } from '../../components/DrinksSearch/DrinkSearchApi';
import { useWindowWidth } from 'hooks/useWindowWidth';

export const DrinksPage = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(0);
  const [restPages, setRestPages] = useState(0);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const totalPages = Math.ceil(count / limit);
  // const [searchParams, setSearchParams] = useSearchParams();
  const windowWidth = useWindowWidth();

  // useEffect(() => {
  //   setSearchParams({ q: query, category: category, ingredient: ingredient });
  // }, [setSearchParams, query, category, ingredient]);
  useEffect(() => {
    if (windowWidth > 0 && windowWidth < 1440 && limit !== 10) {
      setLimit(10);
    } else if (windowWidth >= 1440 && limit !== 9) {
      setLimit(9);
    }
  }, [windowWidth, limit]);

  useEffect(() => {
    async function loadDrinks() {
      try {
        const response = await fetchDrinks({
          params: {
            q: query,
            category: category,
            ingredient: ingredient,
            page: page,
            limit: limit,
          },
        });
        if (!response.result.length) {
          return toast.error(
            `Sorry, there are no drinks matching your search query. Please try again.`
          );
        }
        setFilteredDrinks(response.result);
        setCount(response.count);
        setRestPages(response.restPages);
      } catch (error) {
        if (error.code) {
          return toast.error(`Oops, something went wrong.`);
        }
      }
    }
    loadDrinks();
  }, [query, category, ingredient, page, limit]);

  return (
    <StyledMainContainer>
      <PageTitle title="Drinks" />
      <DrinksSearch
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
        ingredient={ingredient}
        setIngredient={setIngredient}
        setPage={setPage}
      />
      <Drinks drinks={filteredDrinks} />
      {totalPages > 1 && (
        <Paginator
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          restPages={restPages}
        />
      )}
    </StyledMainContainer>
  );
};

export default DrinksPage;
