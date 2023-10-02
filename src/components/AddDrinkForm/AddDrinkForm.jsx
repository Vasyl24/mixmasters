// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Formik, Form } from 'formik';
import { DrinkDescriptionFields } from 'components/AddDrinkForm/DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from 'components/AddDrinkForm/DrinksIngredientsField/DrinksIngredientsField';
import RecipePreparationFields from 'components/AddDrinkForm/RecipePreparationFields/RecipePreparationFields';
import { StyledForm } from './AddDrinkForm.styled';
import { AddBtn } from 'components/Butttons/AddBtn/AddDrinksBtn';

export const AddDrinkForm = () => {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{
          _id: '',
          drink: '',
          category: '',
          alcoholic: '',
          glass: '',
          shortDescription: '',
          instructions: '',
          drinkThumb: null,
          ingredients: [
            {
              title: '',
              amount: '',
              measure: '',
              ingredientId: '',
            },
          ],
        }}
        onSubmit={handleSubmit}
      >
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
