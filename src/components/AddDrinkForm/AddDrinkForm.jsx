// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Formik, Form } from 'formik';
import { DrinkDescriptionFields } from 'components/AddDrinkForm/DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from 'components/AddDrinkForm/DrinksIngredientsField/DrinksIngredientsField';
import RecipePreparationFields from 'components/AddDrinkForm/RecipePreparationFields/RecipePreparationFields';
import { StyledForm } from './AddDrinkForm.styled';
import { AddBtn } from 'components/Butttons/AddBtn/AddDrinksBtn';
import axios from 'axios';

export const AddDrinkForm = () => {
  const initialValues = {
    _id: '',
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
        ingredientId: '',
      },
    ],
  };

  const handleSubmit = (values, { resetForm }) => {
    let file = values.drinkThumb;
    const formData = new FormData();

    // values.ingredients.map(ingredient => {
    //   ingredient.measure = [ingredient.amount, ingredient.measure].join(' ');
    //   delete ingredient.amount;
    // });

    console.log(values.ingredients);
    formData.append('recipe', JSON.stringify(values));

    formData.append('cocktail', file);

    Object.entries(values).forEach(([key, value]) => {
      if (key === 'ingredients') {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    });

    axios.post('/drinks/own/add', formData);

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
