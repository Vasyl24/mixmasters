import React from 'react';
import Select from 'react-select';
import Counter from './Counter/Counter';
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
  Wrapper
} from './DrinksIngredientsField.styled';
import { optionsIngredientUnit } from "./optionsIngredientUnit";
import { styles } from "./selectStyle";
import { stylesMeasure } from "./selectStyleMeasure";


const DrinkIngredientsFields = () => {
  
return (
  
  <Wrapper>
    <CounterWrapper>
      <IngredientsText>Ingredients</IngredientsText>
      <Counter />
    </CounterWrapper>
    <IngredientsList>
      <li>
        <SelectWraper>
          <FlexWraper>
            <Select
              placeholder={"Select ingredient..."}
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
                required/>
              <Select
                options={optionsIngredientUnit}
                placeholder={""}
                unstyled
                styles={stylesMeasure}
                required
              />
            </MeasureWraper>
          </FlexWraper>
          <DeleteBtn>
            <svg>
              <use xlinkHref={`${icons}#icon-close`} />
            </svg>
          </DeleteBtn>
        </SelectWraper>
      </li>
    </IngredientsList>
</Wrapper>

  );
};
export default DrinkIngredientsFields;