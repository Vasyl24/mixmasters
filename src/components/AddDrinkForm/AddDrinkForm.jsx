// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Formik } from 'formik';
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
              measure: '',
              ingredientId: '',
            },
          ],
        }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <DrinkDescriptionFields />
          <DrinkIngredientsFields />
          <RecipePreparationFields />
          <AddBtn type="submit" title="Add" />
        </StyledForm>
      </Formik>
    </>
  );
};
