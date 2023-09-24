import { Drinks } from 'components/Drinks/Drinks';
import { DrinksSearch } from 'components/DrinksSearch/DrinksSearch';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { useState } from 'react';
import drinks from '../../temporary/recipes.json';

export const DrinksPage = () => {
  const [filteredDrinks, setFilteredDrinks] = useState(drinks);

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

  return (
    <>
      <PageTitle title="Drinks" />
      <DrinksSearch
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onIngredientChange={handleIngredientChange}
      />
      <Drinks drinks={filteredDrinks} />
      {/* <Paginator /> */}
    </>
  );
};
