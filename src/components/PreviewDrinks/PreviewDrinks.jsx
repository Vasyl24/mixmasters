import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  SectionContainer,
  Container,
  CategoryItem,
  CategoryDrinksList,
  Category,
} from './PreviewDrinks.styled';

import DrinksItem from './DrinkItem/DrinksItem';
import { fetchMainpage } from '../../redux/drinks/drinksOperations';
import { selectDrinks } from '../../redux/drinks/drinksSelectors';
// import { selectDrinks, selectError } from '../../redux/drinks/drinksSelectors';
import { useWindowWidth } from '../../hooks/useWindowWidth';

export const PreviewDrinks = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const drinks = useSelector(selectDrinks);
  // const error = useSelector(selectError);
  const windowWidth = useWindowWidth();

  const categories = drinks
    .map(drink => drink.category)
    .filter((category, index, arr) => arr.indexOf(category) === index);

  useEffect(() => {
    if (windowWidth > 0 && windowWidth < 768) setCount(1);
    else if (windowWidth >= 768 && windowWidth < 1440) {
      setCount(2);
    } else if (windowWidth >= 1440) {
      setCount(3);
    }
    if (count) dispatch(fetchMainpage(count));
  }, [dispatch, count, windowWidth]);

  return (
    <SectionContainer>
      <Container>
        {categories.map((category, index) => {
          return (
            <CategoryItem key={index}>
              <Category>{category}</Category>
              <CategoryDrinksList>
                {drinks
                  .filter(item => item.category === category)
                  .map(item => (
                    <DrinksItem drinkItem={item} key={item._id} />
                  ))}
              </CategoryDrinksList>
            </CategoryItem>
          );
        })}
      </Container>
      <Link to="/drinks">Other drinks</Link>
    </SectionContainer>
  );
};
