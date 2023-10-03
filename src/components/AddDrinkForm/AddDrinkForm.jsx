// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Formik, Form } from 'formik';
import { DrinkDescriptionFields } from 'components/AddDrinkForm/DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from 'components/AddDrinkForm/DrinksIngredientsField/DrinksIngredientsField';
import RecipePreparationFields from 'components/AddDrinkForm/RecipePreparationFields/RecipePreparationFields';
import { StyledForm } from './AddDrinkForm.styled';
import { AddBtn } from 'components/Butttons/AddBtn/AddDrinksBtn';
import { nanoid } from 'nanoid';

export const AddDrinkForm = () => {
  const initialValues = {
    _id: nanoid(),
    drink: '',
    category: 'Cocktail',
    alcoholic: '',
    glass: 'Highball glass',
    shortDescription: '',
    instructions: '',
    drinkThumb: null,
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
    console.log(values);
    const formData = new FormData(initialValues);
    formData.append('initialValues', JSON.stringify(initialValues));

    fetch('/add', {
      method: 'POST',
      body: formData,
    });
    // resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {props => (
          <StyledForm>
            <Form>
              <DrinkDescriptionFields
                values={props.values}
                setFieldValue={props.setFieldValue}
              />
              <DrinkIngredientsFields
                values={props.values}
                setFieldValue={props.setFieldValue}
                resetForm={props.resetForm}
              />
              <RecipePreparationFields
                values={props.values}
                setFieldValue={props.setFieldValue}
              />
              <AddBtn type="submit" title="Add" />
            </Form>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
