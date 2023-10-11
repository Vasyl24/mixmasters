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
  Validate,
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
import { ErrorMessage } from 'formik';
// import { ErrorMessage } from 'formik';

export const DrinkDescriptionFields = ({
  setFieldValue,
  touched,
  errors,
  validate,
}) => {
  const dispatch = useDispatch();
  const hiddenFileInput = useRef(null);
  const glasses = useSelector(selectGlasses);
  const categories = useSelector(selectCategories);

  const [selectedAlcoholic, setSelectedAlcoholic] = useState('Non alcoholic');
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

      setFieldValue('drinkThumb', evt.target.files[0]);
    }
  };

  // const handleBlur = evt => {
  //   if (!evt.target.value) {
  //     console.log('Please enter a value');
  //   }
  // };

  const handleDescInput = evt => {
    setFieldValue('description', evt.target.value);
    setFieldValue('shortDescription', evt.target.value);
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

            <BtnText>Add image</BtnText>
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
          <div style={{ position: 'relative' }}>
            <FieldStyle
              name="drink"
              placeholder="Enter item title"
              type="text"
              border={
                touched.drink &&
                (errors.drink
                  ? '1px solid #da1414'
                  : '1px solid rgba(243, 243, 243, 0.5)')
              }
            />
          </div>

          <ErrorMessage name="drink" component={Validate} />
          {/* {touched.drink && errors.drink ? (
            <Validate>{errors.drink}</Validate>
          ) : null} */}

          {/* <ErrorMessage name="drink" />
          </Validate> */}
          <div style={{ position: 'relative' }}>
            <FieldStyle
              name="shortDescription"
              placeholder="Enter about recipe"
              type="text"
              // onBlur={handleBlur}
              onChange={handleDescInput}
            />
          </div>
          {touched.shortDescription && errors.shortDescription ? (
            <Validate>{errors.shortDescription}</Validate>
          ) : null}

          {/* {touched.ingredients && errors.ingredients ? (
            <ErrorMessage>{errors.ingredients}</ErrorMessage>
          ) : null} */}
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
              value="Alcoholic"
              checked={selectedAlcoholic === 'Alcoholic'}
              onChange={handleOptionChange}
            />
            Alcoholic
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              name="alcoholic"
              id="option2"
              type="radio"
              value="Non alcoholic"
              checked={selectedAlcoholic === 'Non alcoholic'}
              onChange={handleOptionChange}
            />
            Non-alcoholic
          </RadioLabel>
        </RadioWrapper>
      </FlexContainer>
    </Wrapper>
  );
};
