import React, { useState } from 'react';
// import React, { useState, useRef } from 'react';
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
import ingredientsList from '../../../temporary/ingredients.json';
// import drinksData from '../../../temporary/recipes.json';
import { ingredientsOption } from '../SelectCategories/IngredientsOptions';

const DrinkIngredientsFields = () => {
  // const ref = useRef(null);

  const [ingredients, setIngredients] = useState(ingredientsList);
  const [count, setCount] = useState(1);
  const [amountIngredientUnit, setAmountIngredientUnit] = useState('');
  // const [input, setInput] = useState('');
  // const [amountIngredient, setAmountIngredient] = useState([]);
  // const [drinks] = useState(drinksData);
  // const [filteredDrinks, setFilteredDrinks] = useState(drinks);

  // ingredientsList.map((arr, index) => console.log(arr));

  // function handleChangeInput(e) {
  //   setInput(e.target.value);
  // }

  const handleAmountUnitChange = e => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      setAmountIngredientUnit(e.target.value);
    }
  };

  const plusButtonHandler = () => {
    setCount(count + 1);
    // setAmountIngredient([...amountIngredient, input]);
    // setInput('');
    // ref.current.focus();
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
  //     // console.log(drinks);
  //   } else {
  //     const filtered = drinks.filter(drink => {
  //       console.log(drink);
  //       const ingredients = drink.ingredients.map(item => item.title);
  //       return ingredients.includes(ingredient);
  //     });
  //     setFilteredDrinks(filtered);
  //   }
  // };

  // const handleDeleteIngredient = () => {
  //   ingredients.map((item, index) => {
  //     if (count !== 1) {
  //       setIngredients(() => {
  //         const newIngredients = [...ingredients];
  //         const idxOfIngredient = newIngredients.indexOf(item);
  //         newIngredients.splice(idxOfIngredient, 1);
  //         setCount(count - 1);

  //         return newIngredients;
  //       });
  //     }
  //   });
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
        {/* {amountIngredient.map(ingredient => ( */}
        {/* <li key={count + 1}> */}
        <li>
          {/* {ingredient} */}
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
            <DeleteBtn
              // onClick={handleDeleteIngredient}
              type="button"
            >
              <svg>
                <use xlinkHref={`${icons}#icon-close`} />
              </svg>
            </DeleteBtn>
          </SelectWraper>
        </li>
        {/* ))} */}
      </IngredientsList>
    </Wrapper>
  );
};
export default DrinkIngredientsFields;
