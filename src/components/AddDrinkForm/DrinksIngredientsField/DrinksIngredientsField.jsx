import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { getIngredients } from 'redux/filters/filtersOperations';
import { selectIngredients } from 'redux/filters/filtersSelectors';
import { optionsIngredientUnit } from '../optionsIngredientUnit';
import { styles } from './selectStyle';
import { stylesMeasure } from './selectStyleMeasure';
import { nanoid } from 'nanoid';

const DrinkIngredientsFields = ({ values, setFieldValue }) => {
  const dispatch = useDispatch();
  const listIngredients = useSelector(selectIngredients);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const ingredientsSelect = listIngredients.map(ingredient => {
    return {
      value: ingredient.title,
      label: ingredient.title,
      _id: ingredient._id,
    };
  });

  const plusButtonHandler = () => {
    setCount(count + 1);
    setFieldValue('ingredients', [
      ...values.ingredients,
      {
        title: '',
        amount: '',
        measure: '',
        ingredientId: nanoid(),
      },
    ]);
  };

  const handleDeleteIngredient = id => {
    if (count !== 1) {
      setCount(count - 1);

      setFieldValue(
        'ingredients',
        [...values.ingredients].filter(
          ingredient => ingredient.ingredientId !== id
        )
      );
    }
  };

  const handleSelectIngredient = (e, index) => {
    const newIngredients = [...values.ingredients];
    newIngredients[index].title = e.value;
    newIngredients[index].ingredientId = e._id;
    setFieldValue('ingredients', newIngredients);

    setSelectedOptions(prevOptions => {
      const newOptions = [...prevOptions];
      newOptions[index] = e;
      return newOptions;
    });
  };

  const handleAmountChange = (e, index) => {
    const updatedIngredients = [...values.ingredients];
    updatedIngredients[index].amount = e.target.value;
    setFieldValue('ingredients', updatedIngredients);
  };

  const handleMeasureChange = (e, index) => {
    const updatedIngredients = [...values.ingredients];
    updatedIngredients[index].measure = e.value;
    setFieldValue('ingredients', updatedIngredients);
  };

  const minusButtonHandler = () => {
    setCount(prevCount => {
      if (prevCount === 1) return prevCount;

      setFieldValue('ingredients', values.ingredients.slice(0, -1));
      return prevCount - 1;
    });
  };

  return (
    <Wrapper>
      <CounterWrapper>
        <IngredientsText>Ingredients</IngredientsText>
        <CounterWrp>
          <StyledButton onClick={minusButtonHandler} disabled={count === 1}>
            <svg width={16} height={16}>
              <use xlinkHref={`${icons}#icon-minus`} />
            </svg>
          </StyledButton>
          <p>{count}</p>

          <StyledButton onClick={plusButtonHandler}>
            <svg width={16} height={16}>
              <use xlinkHref={`${icons}#icon-plus-plus`} />
            </svg>
          </StyledButton>
        </CounterWrp>
      </CounterWrapper>

      <IngredientsList>
        {values.ingredients.map((ingredient, index) => (
          <li key={ingredient.ingredientId}>
            <SelectWraper>
              <FlexWraper>
                <Select
                  options={ingredientsSelect}
                  name={`ingredients[${index}].title`}
                  value={selectedOptions[index]}
                  placeholder={'Select ingredient...'}
                  onChange={e => handleSelectIngredient(e, index)}
                  unstyled
                  styles={styles}
                  required
                />

                <MeasureWraper>
                  <FieldStyle
                    name={`ingredients[${index}].amount`}
                    type="number"
                    placeholder="0"
                    value={ingredient.amount}
                    onChange={e => handleAmountChange(e, index)}
                    min={0}
                    required
                  />

                  <Select
                    name={`ingredients[${index}].measure`}
                    options={optionsIngredientUnit}
                    placeholder={''}
                    onChange={e => handleMeasureChange(e, index)}
                    unstyled
                    styles={stylesMeasure}
                    required
                  />
                </MeasureWraper>
              </FlexWraper>

              <DeleteBtn
                onClick={() => handleDeleteIngredient(ingredient.ingredientId)}
                type="button"
              >
                <svg width={20} height={20}>
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
