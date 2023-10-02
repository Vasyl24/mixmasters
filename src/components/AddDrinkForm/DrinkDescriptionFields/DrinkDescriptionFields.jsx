import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import Select from 'react-select';
import icons from '../../../assets/sprite.svg';
import { styles } from './selectStyle';
import { getGlasses, getCategories } from 'redux/filters/filtersOperations';
import {
  selectCategories,
  selectGlasses,
} from 'redux/filters/filtersSelectors';

export const DrinkDescriptionFields = ({ values, setFieldValue }) => {
  const dispatch = useDispatch();
  const hiddenFileInput = useRef(null);
  const glasses = useSelector(selectGlasses);
  const categories = useSelector(selectCategories);

  const [selectedAlcoholic, setSelectedAlcoholic] = useState('alcoholic');
  const [img, setImg] = useState(null);

  useEffect(() => {
    dispatch(getGlasses());
    dispatch(getCategories());
  }, [dispatch]);

  const categoriesSelect = categories.map(category => {
    return { value: category, label: category };
  });

  const glassesSelect = glasses.map(glass => {
    return { value: glass, label: glass };
  });

  const handleOptionChange = evt => {
    setSelectedAlcoholic(evt.target.value);
    setFieldValue('alcoholic', evt.target.value);
    // console.log(changeEvent.target.value);
  };

  const handleCategoryChange = evt => {
    setFieldValue('category', evt.value);
  };

  const handleGlassChange = evt => {
    setFieldValue('glass', evt.value);
  };

  const handleImgClick = () => {
    hiddenFileInput.current.click();
  };

  const handleImgUpload = evt => {
    if (evt.target.files.length > 0) {
      setImg({
        src: URL.createObjectURL(evt.target.files[0]),
      });
      setFieldValue('drinkThumb', URL.createObjectURL(evt.target.files[0]));
      // console.log(URL.createObjectURL(evt.target.files[0]));
    }
  };

  const handleBlur = evt => {
    if (!evt.target.value) {
      console.log('Please enter a value');
    }
  };

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
          name={`drinkThumb`}
          type="file"
          accept="image/*"
          ref={hiddenFileInput}
          onChange={handleImgUpload}
        />
      </ImageContainer>
      <FlexContainer>
        <InputWraper>
          <FieldStyle
            name="drink"
            placeholder="Enter item title"
            type="text"
            onBlur={handleBlur}
          />
          {/* <Validate></Validate> */}
          <FieldStyle
            name="shortDescription"
            placeholder="Enter about recipe"
            type="text"
            onBlur={handleBlur}
          />
          {/* <Validate></Validate> */}
        </InputWraper>
        <Margin>
          <SelectWrapper>
            <LabelSelect>Category</LabelSelect>
            <Select
              name="category"
              defaultValue={[{ value: 'Cocktail', label: 'Cocktail' }]}
              options={categoriesSelect}
              unstyled
              styles={styles}
              required
              onChange={handleCategoryChange}
            />
          </SelectWrapper>
          <SelectWrapper>
            <LabelSelect>Glass</LabelSelect>
            <Select
              name="glass"
              defaultValue={{
                value: 'Highball glass',
                label: 'Highball glass',
              }}
              options={glassesSelect}
              unstyled
              styles={styles}
              required
              onChange={handleGlassChange}
            />
          </SelectWrapper>
        </Margin>
        <RadioWrapper>
          <RadioLabel>
            <RadioButton
              name="alcoholic"
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
              name="alcoholic"
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
