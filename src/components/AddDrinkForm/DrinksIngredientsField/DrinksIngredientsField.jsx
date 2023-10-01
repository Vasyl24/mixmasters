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

const DrinkIngredientsFields = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(selectIngredients);

  const [count, setCount] = useState(1);
  const [allIngredients, setallIngredients] = useState([{ id: nanoid() }]);
  const [amountIngredientUnit, setAmountIngredientUnit] = useState([]);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const ingredientsSelect = ingredients.map(ingredient => {
    return { value: ingredient.title, label: ingredient.title };
  });

  const handleAmountUnitChange = e => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      setAmountIngredientUnit(e.target.value);
    }
  };

  const plusButtonHandler = () => {
    setCount(count + 1);
    setallIngredients([...allIngredients, { id: nanoid() }]);
  };

  const minusButtonHandler = () => {
    setCount(count - 1);
    if (count === 1) {
      setCount(1);
      return;
    }

    allIngredients.pop();
  };


  const handleDeleteIngredient = id => {
    if (count !== 1) {
      setCount(count - 1);

      const idxOfIngredient = allIngredients.findIndex(
        ingredientId => ingredientId.id === id
      );
      allIngredients.splice(idxOfIngredient, 1);
    }

    // deleteContact = contactId => {
    //   this.setState(prevState => ({
    //     contacts: prevState.contacts.filter(
    //       contact => contact.id !== contactId
    //     ),
    //   }));
    // };
  };

  // const deleteContact = contactId => {
  //   setallIngredients(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
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
        {allIngredients.map(ingredient => (
          <li key={ingredient.id}>
            <SelectWraper>
              <FlexWraper>
                <Select
                  options={ingredientsSelect}
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
