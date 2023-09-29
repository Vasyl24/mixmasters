import React, { useState, useRef } from 'react';
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
import { optionsGlass } from '../SelectCategories/Glass';
import { optionsCoctail } from '../SelectCategories/CoctailCategory';
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
  // const [imgUpload, setImgUpload] = useState();
  const [selectedAlcoholic, setSelectedAlcoholic] = useState('alcoholic');
  const hiddenFileInput = useRef(null);

  const handleOptionChange = changeEvent => {
    setSelectedAlcoholic(changeEvent.target.value);
  };

  const handleImgClick = evt => {
    hiddenFileInput.current.click();
    // setImgUpload(evt.target.files[0]);
    // console.log(imgUpload);
  };

  const handleImgUpload = evt => {
    // const imgUploaded = evt.target.files[0];
    // handleFile(fileUploaded);
  };
  // const handleCategorySelect = category => {
  //   setSelectedCategory(category);
  // };

  // const handleGlassSelect = glass => {
  //   setSelectedGlass(glass);
  // };

  return (
    <Wrapper>
      <ImageContainer onClick={handleImgClick}>
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
        <ImageInput
          type="file"
          name="file"
          ref={hiddenFileInput}
          onChange={handleImgUpload}
        />
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
