import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import {
  SectionContainer,
  Container,
  CategoryItem,
  CategoryDrinksList,
  Category,
  Button,
} from './PreviewDrinks.styled';

import DrinksItem from './DrinkItem/DrinksItem';
import { fetchMainpage } from '../../redux/drinks/drinksOperations';
import { selectDrinks, selectError } from '../../redux/drinks/drinksSelectors';
import { useWindowWidth } from '../../hooks/useWindowWidth';

export const PreviewDrinks = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const drinks = useSelector(selectDrinks);
  const categoriesToShow = [
    'Ordinary Drink',
    'Cocktail',
    'Shake',
    'Other/Unknown',
  ];
  const error = useSelector(selectError);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth > 0 && windowWidth < 768 && count !== 1) {
      setCount(1);
    } else if (windowWidth >= 768 && windowWidth < 1440 && count !== 2) {
      setCount(2);
    } else if (windowWidth >= 1440 && count !== 3) {
      setCount(3);
    }
  }, [count, windowWidth]);

  useEffect(() => {
    if (count) dispatch(fetchMainpage(count));
    if (error) toast.error('Something went wrong please try later!');
  }, [dispatch, count, error]);

  return (
    <SectionContainer>
      <Container>
        {categoriesToShow.map((category, index) => {
          return (
            <CategoryItem key={index}>
              <Category>{category}</Category>
              <CategoryDrinksList>
                {drinks
                  .filter(
                    item =>
                      item.category.toLowerCase() === category.toLowerCase()
                  )
                  .map(item => (
                    <DrinksItem drinkItem={item} key={item._id} />
                  ))}
              </CategoryDrinksList>
            </CategoryItem>
          );
        })}
      </Container>
      <Button to="/drinks">Other drinks</Button>
    </SectionContainer>
  );
};
