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
  ValidateImg,
  InputContainer,
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
import { useAuth } from 'useAuth';
import toast from 'react-hot-toast';

export const DrinkDescriptionFields = ({ setFieldValue, touched, errors }) => {
  const dispatch = useDispatch();
  const hiddenFileInput = useRef(null);
  const glasses = useSelector(selectGlasses);
  const categories = useSelector(selectCategories);
  const { user } = useAuth();

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

  const handleDescInput = evt => {
    setFieldValue('description', evt.target.value);
    setFieldValue('shortDescription', evt.target.value);
  };

  return (
    <Wrapper>
      <ImageContainer
        onClick={handleImgClick}
        border={
          touched.drinkThumb &&
          (errors.drinkThumb
            ? '1px solid #da1414'
            : '1px solid rgba(243, 243, 243, 0.5)')
        }
      >
        <ErrorMessage name={`drinkThumb`} component={ValidateImg} />

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
          <InputContainer>
            <FieldStyle
              name="drink"
              placeholder="Enter item title"
              type="text"
              border={
                touched.drink &&
                (errors.drink
                  ? '1px solid #da1414'
                  : '1px solid var(--accent-text-color)')
              }
            />

            <ErrorMessage name="drink" component={Validate} />
          </InputContainer>

          <InputContainer>
            <FieldStyle
              name="shortDescription"
              placeholder="Enter about recipe"
              type="text"
              onChange={handleDescInput}
              border={
                touched.shortDescription &&
                (errors.shortDescription
                  ? '1px solid #da1414'
                  : '1px solid var(--accent-text-color)')
              }
            />
            <ErrorMessage name="shortDescription" component={Validate} />
          </InputContainer>
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
          {user.isAdult === false ? (
            <div
              onClick={() => {
                toast.error('You are under 18 years old');
              }}
            >
              <RadioLabel>
                <RadioButton
                  name="alcoholic"
                  id="option1"
                  type="radio"
                  value="Alcoholic"
                  disabled={user.isAdult === false}
                />
                Alcoholic
              </RadioLabel>
            </div>
          ) : (
            <RadioLabel>
              <RadioButton
                name="alcoholic"
                id="option1"
                type="radio"
                value="Alcoholic"
                checked={selectedAlcoholic === 'Alcoholic'}
                onChange={handleOptionChange}
              />
              Alcoholic
            </RadioLabel>
          )}

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
