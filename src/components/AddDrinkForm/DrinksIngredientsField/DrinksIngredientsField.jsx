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
// import { nanoid } from 'nanoid';

const DrinkIngredientsFields = ({ values, setFieldValue }) => {
  const dispatch = useDispatch();
  const listIngredients = useSelector(selectIngredients);

  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const ingredientsSelect = listIngredients.map(ingredient => {
    return { value: ingredient.title, label: ingredient.title };
  });

  const plusButtonHandler = () => {
    setCount(count + 1);
    setFieldValue('ingredients', [
      ...values.ingredients,
      {
        title: '',
        amount: '',
        measure: '',
        ingredientId: '',
      },
    ]);
  };

  const minusButtonHandler = () => {
    setCount(count - 1);
    if (count === 1) {
      setCount(1);
      return;
    }

    // setFieldValue('ingredients', [...values.ingredients]);
  };

  const handleDeleteIngredient = id => {
    if (count !== 1) {
      setCount(count - 1);

      // const idxOfIngredient = allIngredients.findIndex(
      //   ingredientId => ingredientId.id === id
      // );
      // allIngredients.splice(idxOfIngredient, 1);
    }
  };

  // const handleIngredientChange = evt => {
  //   setFieldValue('ingredients', [
  //     ...values.ingredients,
  //     {
  //       title: evt.value,
  //     },
  //   ]);

  // setFieldValue('glass', evt.value);
  // };

  // const deleteContact = contactId => {
  //   if (count !== 1) {
  //     setCount(count - 1);
  //     setallIngredients(prevState =>
  //       prevState.filter(contact => contact.id !== contactId)
  //     );
  //   }
  // };
  console.log('values', values);
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
        {values.ingredients.map((ingredient, index) => (
          <li key={ingredient.id}>
            <SelectWraper>
              <FlexWraper>
                <Select
                  options={ingredientsSelect}
                  name={`ingredients[${index}].name`}
                  placeholder={'Select ingredient...'}
                  onChange={e => {
                    const newIngredients = [...values.ingredients];
                    newIngredients[index].title = e.value;
                    setFieldValue('ingredients', newIngredients);
                  }}
                  unstyled
                  required
                  styles={styles}
                />

                <MeasureWraper>
                  <FieldStyle
                    name={`ingredients[${index}].amount`}
                    type="number"
                    placeholder="0"
                    value={ingredient.amount}
                    min={0}
                    required
                  />
                  <Select
                    name={`ingredients[${index}].measure`}
                    options={optionsIngredientUnit}
                    placeholder={''}
                    onChange={e => {
                      const newIngredients = [...values.ingredients];
                      newIngredients[index].measure = e.value;
                      setFieldValue('ingredients', newIngredients);
                    }}
                    unstyled
                    styles={stylesMeasure}
                    required
                  />
                </MeasureWraper>
              </FlexWraper>

              <DeleteBtn
                // onClick={() => deleteContact(ingredient.id)}
                onClick={() => handleDeleteIngredient(ingredient.id)}
                type="button"
              >
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
