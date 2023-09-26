import { Formik } from 'formik';
import { DrinkDescriptionFields } from 'components/AddDrinkForm/DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from 'components/AddDrinkForm/DrinksIngredientsField/DrinksIngredientsField';
import RecipePreparationFields from 'components/AddDrinkForm/RecipePreparationFields/RecipePreparationFields'
import { StyledForm } from './AddDrinkForm.styled';
import { AddBtn } from 'components/Butttons/AddBtn/AddDrinksBtn';


export const AddDrinkForm = () => {
    return (
        <>
            <Formik>
                <StyledForm>
                    <DrinkDescriptionFields />
                    <DrinkIngredientsFields />
                    <RecipePreparationFields
                    // name="textareaRecipe"
                    />
                    <AddBtn
                      type="submit"
                      title="Add"
                    />
                </StyledForm>
            </Formik>
        </>
    )
};


