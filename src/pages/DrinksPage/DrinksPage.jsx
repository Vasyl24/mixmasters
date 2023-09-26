import React, { useState, useEffect } from 'react';
import { Drinks } from 'components/Drinks/Drinks';
import { DrinksSearch } from 'components/DrinksSearch/DrinksSearch';
import { PageTitle } from 'components/PageTitle/PageTitle';
import Paginator from 'components/Paginator/Paginator';
import drinksData from '../../temporary/recipes.json';

export const DrinksPage = () => {
  const [drinks] = useState(drinksData);
  const [filteredDrinks, setFilteredDrinks] = useState(drinks);
  const [currentPage, setCurrentPage] = useState(1);
  const [drinksPerPage, setDrinksPerPage] = useState(9);
  const [pageNumbersToShow, setPageNumbersToShow] = useState(8);

  const updateDrinksPerPageAndPageNumbers = () => {
    if (window.innerWidth >= 768) {
      setDrinksPerPage(9);
      setPageNumbersToShow(8);
    } else {
      setDrinksPerPage(10);
      setPageNumbersToShow(4);
    }
  };

  useEffect(() => {
    updateDrinksPerPageAndPageNumbers();
    window.addEventListener('resize', updateDrinksPerPageAndPageNumbers);
    return () => {
      window.removeEventListener('resize', updateDrinksPerPageAndPageNumbers);
    };
  }, []);

  const handleSearch = text => {
    const filtered = drinks.filter(drink =>
      drink.drink.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredDrinks(filtered);
  };

  const handleCategoryChange = category => {
    if (category === '') {
      setFilteredDrinks(drinks);
    } else {
      const filtered = drinks.filter(drink => drink.category === category);
      setFilteredDrinks(filtered);
    }
  };

  const handleIngredientChange = ingredient => {
    if (ingredient === '') {
      setFilteredDrinks(drinks);
    } else {
      const filtered = drinks.filter(drink => {
        const ingredients = drink.ingredients.map(item => item.title);
        return ingredients.includes(ingredient);
      });
      setFilteredDrinks(filtered);
    }
  };

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastDrink = currentPage * drinksPerPage;
  const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
  const currentDrinks = filteredDrinks.slice(
    indexOfFirstDrink,
    indexOfLastDrink
  );

  return (
    <>
      <PageTitle title="Drinks" />
      <DrinksSearch
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onIngredientChange={handleIngredientChange}
      />
      <Drinks drinks={currentDrinks} />
      {filteredDrinks.length > 8 && (
        <Paginator
          drinksPerPage={drinksPerPage}
          totalDrinks={filteredDrinks.length}
          onPageChange={onPageChange}
          pageNumbersToShow={pageNumbersToShow}
        />
      )}
    </>
  );
};

export default DrinksPage;
