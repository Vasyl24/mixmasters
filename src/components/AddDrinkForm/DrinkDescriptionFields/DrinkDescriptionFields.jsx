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
  RadioLabel,
  RadioButton,
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
  const hiddenFileInput = useRef(null);
  const [selectedAlcoholic, setSelectedAlcoholic] = useState('alcoholic');
  const [img, setImg] = useState(null);

  const handleOptionChange = changeEvent => {
    setSelectedAlcoholic(changeEvent.target.value);
  };

  const handleImgClick = () => {
    hiddenFileInput.current.click();
  };

  const handleImgUpload = evt => {
    if (evt.target.files.length > 0) {
      setImg({
        src: URL.createObjectURL(evt.target.files[0]),
      });
    }
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
        {img === null ? (
          <>
            <Image style={{ display: 'none' }} />
            <BtnContainer>
              <svg width="50" height="50">
                <use xlinkHref={`${icons}#icon-plus`} />
              </svg>
            </BtnContainer>
            <div>
              <BtnText>Add image</BtnText>
            </div>
          </>
        ) : (
          <Image src={img.src} alt={img.src} />
        )}

        <ImageInput
          type="file"
          name="file"
          accept="image/*"
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
          <RadioLabel>
            <RadioButton
              id="option1"
              stroke="#F3F3F3"
              type="radio"
              value="alcoholic"
              checked={selectedAlcoholic === 'alcoholic'}
              onChange={handleOptionChange}
            />
            Alcoholic
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              id="option2"
              type="radio"
              value="nonAlcoholic"
              checked={selectedAlcoholic === 'nonAlcoholic'}
              onChange={handleOptionChange}
            />
            Non-alcoholic
          </RadioLabel>
        </RadioWrapper>
      </FlexContainer>
    </Wrapper>
  );
};
