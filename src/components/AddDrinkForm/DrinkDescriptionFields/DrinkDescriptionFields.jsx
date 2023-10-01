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

export const DrinkDescriptionFields = () => {
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
              defaultValue={[{ value: 'Cocktail', label: 'Cocktail' }]}
              options={categoriesSelect}
              unstyled
              styles={styles}
              required
            />
          </SelectWrapper>
          <SelectWrapper>
            <LabelSelect>Glass</LabelSelect>
            <Select
              defaultValue={{
                value: 'Highball glass',
                label: 'Highball glass',
              }}
              options={glassesSelect}
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
