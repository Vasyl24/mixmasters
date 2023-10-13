import React from 'react';
import { Formik, Form, useFormik } from 'formik';
import { DrinkDescriptionFields } from 'components/AddDrinkForm/DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from 'components/AddDrinkForm/DrinksIngredientsField/DrinksIngredientsField';
import RecipePreparationFields from 'components/AddDrinkForm/RecipePreparationFields/RecipePreparationFields';
import { StyledForm } from './AddDrinkForm.styled';
import { AddBtn } from 'components/Butttons/AddBtn/AddDrinksBtn';
import axios from 'axios';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const ValidationSchema = Yup.object().shape({
  drink: Yup.string()
    .min(2, 'Too Short')
    .max(25, 'Too Long')
    .required('Required'),
  description: Yup.string().min(10, 'Too Short').required('Required'),
  shortDescription: Yup.string().min(10, 'Too Short').required('Required'),
  instructions: Yup.string().min(10, 'Too Short').required('Required'),
  drinkThumb: Yup.mixed().required('Required'),
});

export const AddDrinkForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    drink: '',
    category: 'Cocktail',
    alcoholic: 'Non alcoholic',
    glass: 'Highball glass',
    description: '',
    shortDescription: '',
    instructions: '',
    drinkThumb: '',
    ingredients: [
      {
        title: '',
        amount: '',
        measure: '',
        ingredientId: nanoid(),
      },
    ],
  };

  const handleSubmit = (values, { resetForm }) => {
    let file = values.drinkThumb;
    const formData = new FormData();

    values.ingredients.map(ingredient => {
      ingredient.measure = [ingredient.amount, ingredient.measure].join(' ');
      return delete ingredient.amount;
    });

    formData.append('recipe', JSON.stringify(values));
    formData.append('cocktail', file);

    axios.post('/drinks/own/add', formData);
    navigate('/my', { replace: true });
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    handleSubmit,
    ValidationSchema,
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
        validateOnBlur={ValidationSchema}
      >
        {props => (
          <StyledForm>
            <Form>
              <DrinkDescriptionFields
                values={props.values}
                setFieldValue={props.setFieldValue}
                touched={props.touched}
                errors={props.errors}
              />

              <DrinkIngredientsFields
                values={props.values}
                setFieldValue={props.setFieldValue}
                resetForm={props.resetForm}
                touched={props.touched}
                error={props.errors}
              />

              <RecipePreparationFields
                values={props.values}
                setFieldValue={props.setFieldValue}
                touched={formik.touched}
                errors={formik.errors}
              />

              <AddBtn type="submit" title="Add" />
            </Form>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
