import React, { useState } from 'react';
import Select from 'react-select';
import icons from '../../../assets/sprite.svg';
import {
  CounterWrapper,
  DeleteBtn,
  FieldStyle,
  FlexWraper,
  IngredientsList,
  IngredientsText,
  MeasureWraper,
  SelectWraper,
  Wrapper,
  CounterWrp,
  StyledButton,
} from './DrinksIngredientsField.styled';
import { optionsIngredientUnit } from './optionsIngredientUnit';
import { styles } from './selectStyle';
import { stylesMeasure } from './selectStyleMeasure';
import ingredientsList from '../../../temporary/ingredients.json';
// import drinksData from '../../../temporary/recipes.json';

const DrinkIngredientsFields = () => {
  const [ingredients, setIngredients] = useState(ingredientsList);
  const [count, setCount] = useState(1);
  // const [drinks] = useState(drinksData);
  // const [filteredDrinks, setFilteredDrinks] = useState(drinks);
  // console.log(ingredients);

  const plusButtonHandler = () => {
    setCount(count + 1);
    setIngredients(prevState => [...prevState, [...ingredientsList]]);
  };

  const minusButtonHandler = () => {
    setCount(count - 1);
    if (count === 1) {
      setCount(1);
      return;
    }

    setIngredients(() => {
      const newIngredients = [...ingredients];
      newIngredients.pop();
      return newIngredients;
    });
  };

  // const handleIngredientChange = ingredient => {
  //   if (ingredient === '') {
  //     setFilteredDrinks(drinks);
  //   } else {
  //     const filtered = drinks.filter(drink => {
  //       const ingredients = drink.ingredients.map(item => item.title);
  //       return ingredients.includes(ingredient);
  //     });
  //     setFilteredDrinks(filtered);
  //   }
  // };

  return (
    <Wrapper>
      <CounterWrapper>
        <IngredientsText>Ingredients</IngredientsText>
        <CounterWrp>
          <StyledButton onClick={minusButtonHandler}>
            <svg>
              <use xlinkHref={`${icons}#icon-minus`} />
            </svg>
          </StyledButton>
          <p>{count}</p>
          <StyledButton onClick={plusButtonHandler}>
            <svg>
              <use xlinkHref={`${icons}#icon-plus-plus`} />
            </svg>
          </StyledButton>
        </CounterWrp>
      </CounterWrapper>
      <IngredientsList>
        {ingredients.map((arr, index) => (
          <li key={index}>
            <SelectWraper>
              <FlexWraper>
                <Select
                  // key={index}
                  //   options={arr.map(ingredients => {
                  //      return { value: ingredients.title, label: ingredients.title, id: ingredients._id  };
                  //  })}
                  name="ingredients"
                  // onIngredientChange={handleIngredientChange}
                  placeholder={'Select ingredient...'}
                  unstyled
                  required
                  styles={styles}
                />
                <MeasureWraper>
                  <FieldStyle
                    name="amountIngredien"
                    type="number"
                    step="0.1"
                    placeholder="0"
                    required
                  />
                  <Select
                    options={optionsIngredientUnit}
                    placeholder={''}
                    unstyled
                    styles={stylesMeasure}
                    required
                  />
                </MeasureWraper>
              </FlexWraper>
              <DeleteBtn
                onClick={() => {
                  console.log('delete element');
                  // if (count === 1) {
                  //   return;
                  // }
                  setIngredients(() => {
                    const newIngredients = [...ingredients];
                    console.log(newIngredients);
                    const idxOfIngredient = newIngredients.indexOf(arr);
                    console.log(idxOfIngredient);
                    newIngredients.splice(idxOfIngredient, 1);
                    setCount(count - 1);

                    return newIngredients;
                  });
                }}
                type="button"
              >
                <svg>
                  <use xlinkHref={`${icons}#icon-close`} />
                </svg>
              </DeleteBtn>
            </SelectWraper>
          </li>
        ))}
      </IngredientsList>
    </Wrapper>
  );
};
export default DrinkIngredientsFields;
