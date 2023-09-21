import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  SectionContainer,
  Container,
  CategoryItem,
  CategoryDrinksList,
  Category,
} from './PreviewDrinks.styled';
import data from '../../temporary/recipes.json';
import DrinksItem from './DrinkItem/DrinksItem';

export const PreviewDrinks = () => {
  const [numberOfItems, setNumberOfItems] = useState(1);

  useEffect(() => {
    if (window.screen.width >= 768 && window.screen.width < 1440) {
      setNumberOfItems(2);
    } else if (window.screen.width >= 1440) {
      setNumberOfItems(3);
    }
  }, []);

  return (
    <SectionContainer>
      <Container>
        <CategoryItem>
          <Category>Ordinary Drink</Category>
          <CategoryDrinksList>
            {data
              .filter(item => item.category === 'Ordinary Drink')
              .slice(0, numberOfItems)
              .map(item => (
                <DrinksItem drinkItem={item} />
              ))}
          </CategoryDrinksList>
        </CategoryItem>
        <CategoryItem>
          <Category>Cocktail</Category>
          <CategoryDrinksList>
            {data
              .filter(item => item.category === 'Cocktail')
              .slice(0, numberOfItems)
              .map(item => (
                <DrinksItem drinkItem={item} />
              ))}
          </CategoryDrinksList>
        </CategoryItem>
      </Container>
      <Link to="/drinks">Other drinks</Link>
    </SectionContainer>
  );
};
