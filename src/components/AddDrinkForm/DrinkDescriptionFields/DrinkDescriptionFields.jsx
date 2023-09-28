import React, { useState } from 'react';
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
  // Validate,
  Margin,
  SelectWrapper,
  LabelSelect,
  RadioWrapper,
} from './DrinkDescriptionFields.styled';
import { optionsGlass } from '../Glass/Glass';
import { optionsCoctail } from '../CoctailCategory/CoctailCategory';
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
  const [selectedAlcoholic, setselectedAlcoholic] = useState('alcoholic');

  const handleOptionChange = changeEvent => {
    setselectedAlcoholic(changeEvent.target.value);
  };

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
            <svg width="50" height="50">
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
          {/* <Validate></Validate> */}
          <FieldStyle placeholder="Enter about recipe" type="text" />
          {/* <Validate></Validate> */}
        </InputWraper>
        <Margin>
          <SelectWrapper>
            <LabelSelect>Category</LabelSelect>
            <Select
              // onSelect={handleCategorySelect}
              defaultValue={[{ value: 'Cocktail', label: 'Cocktail' }]}
              options={optionsCoctail}
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
              options={optionsGlass}
              unstyled
              styles={styles}
              required
            />
          </SelectWrapper>
        </Margin>
        <RadioWrapper>
          <label>
            <input
              id="option1"
              stroke="#F3F3F3"
              type="radio"
              value="alcoholic"
              checked={selectedAlcoholic === 'alcoholic'}
              onChange={handleOptionChange}
            />
            Alcoholic
          </label>
          <label>
            <input
              id="option2"
              type="radio"
              value="nonAlcoholic"
              checked={selectedAlcoholic === 'nonAlcoholic'}
              onChange={handleOptionChange}
            />
            Non-alcoholic
          </label>
        </RadioWrapper>
      </FlexContainer>
    </Wrapper>
  );
};
