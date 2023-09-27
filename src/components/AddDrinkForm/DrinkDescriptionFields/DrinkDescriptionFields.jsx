import React from 'react';
// import React, { useState } from 'react';
import {
  ImageContainer,
  Wrapper,
  Image,
  BtnContainer,
  BtnText,
  ImageInput,
  FlexContainer,
  InputWraper,
  FieldStyle,
  Validate,
  Margin,
  SelectWrapper,
  LabelSelect,
  RadioWrapper,
} from './DrinkDescriptionFields.styled';
import Select from 'react-select';
import icons from '../../../assets/sprite.svg';
import { styles } from './selectStyle';

export const DrinkDescriptionFields = () => {
  // const [categories, setCategories] = useState([]);
  // const [glasses, setGlasses] = useState([]);
  // const [title, setTitle] = useState({});
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedGlass, setSelectedGlass] = useState('');
  // const [selectedIngredients, setSelectedIngredients] = useState([]);

  // const handleCategorySelect = category => {
  //   setSelectedCategory(category);
  // };

  // const handleGlassSelect = glass => {
  //   setSelectedGlass(glass);
  // };

  return (
    <Wrapper>
      <ImageContainer>
        <Image />
        <>
          <BtnContainer>
            <svg width="28" height="28">
              <use xlinkHref={`${icons}#icon-plus`} />
            </svg>
          </BtnContainer>
          <div>
            <BtnText>Add image</BtnText>
          </div>
        </>
        <ImageInput />
      </ImageContainer>
      <FlexContainer>
        <InputWraper>
          <FieldStyle placeholder="Enter item title" type="text" />
          <Validate></Validate>
          <FieldStyle placeholder="Enter about recipe" type="text" />
          <Validate></Validate>
        </InputWraper>
        <Margin>
          <SelectWrapper>
            <LabelSelect>Category</LabelSelect>
            <Select
              // onSelect={handleCategorySelect}
              defaultValue={{ value: 'Cocktail', label: 'Cocktail' }}
              unstyled
              styles={styles}
              required
            />
          </SelectWrapper>
          <SelectWrapper>
            <LabelSelect>Glass</LabelSelect>
            <Select
              // onSelect={handleGlassSelect}
              defaultValue={{
                value: 'Highball glass',
                label: 'Highball glass',
              }}
              unstyled
              styles={styles}
              required
            />
          </SelectWrapper>
        </Margin>
        <RadioWrapper>
          <label>
            <input stroke="#F3F3F3" type="radio" value="alcoholic" checked />
            Alcoholic
          </label>
          <label>
            <input type="radio" value="nonAlcoholic" />
            Non-alcoholic
          </label>
        </RadioWrapper>
      </FlexContainer>
    </Wrapper>
  );
};
