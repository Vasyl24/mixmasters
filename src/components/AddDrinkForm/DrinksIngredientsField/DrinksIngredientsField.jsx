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
import { optionsIngredientUnit } from '../SelectCategories/optionsIngredientUnit';
import { styles } from './selectStyle';
import { stylesMeasure } from './selectStyleMeasure';
import { ingredientsOption } from '../SelectCategories/IngredientsOptions';
import { nanoid } from 'nanoid';

const DrinkIngredientsFields = () => {
  const ingredientInput = { id: nanoid() };

  const [count, setCount] = useState(3);
  const [allIngredients, setallIngredients] = useState([
    { id: nanoid() },
    { id: nanoid() },
    { id: nanoid() },
  ]);
  const [amountIngredientUnit, setAmountIngredientUnit] = useState([]);

  const handleAmountUnitChange = e => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      setAmountIngredientUnit(e.target.value);
    }
  };

  const plusButtonHandler = () => {
    setCount(count + 1);
    setallIngredients([...allIngredients, ingredientInput]);
  };

  const minusButtonHandler = () => {
    setCount(count - 1);
    if (count === 1) {
      setCount(1);
      return;
    }

    allIngredients.pop();
  };

  const handleDeleteIngredient = evt => {
    if (count !== 1) {
      setCount(count - 1);

      const idxOfIngredient = allIngredients.findIndex(
        ingredientId => ingredientId.id === ingredientInput.id
      );
      allIngredients.splice(idxOfIngredient, 1);
    }
  };

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
        {allIngredients.map(ingredient => (
          <li key={ingredient.id}>
            <SelectWraper>
              <FlexWraper>
                <Select
                  options={ingredientsOption}
                  name="ingredients"
                  placeholder={'Select ingredient...'}
                  unstyled
                  required
                  styles={styles}
                />

                <MeasureWraper>
                  <FieldStyle
                    name="amountIngredient"
                    type="number"
                    placeholder="0"
                    value={amountIngredientUnit}
                    onChange={handleAmountUnitChange}
                    min={0}
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
              <DeleteBtn onClick={handleDeleteIngredient} type="button">
                <svg>
                  <use xlinkHref={`${icons}#icon-close`} />
                </svg>
              </DeleteBtn>
            </SelectWraper>
            {ingredient.component}
          </li>
        ))}
      </IngredientsList>
    </Wrapper>
  );
};
export default DrinkIngredientsFields;
