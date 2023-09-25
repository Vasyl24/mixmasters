import React from 'react';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { AddDrinkForm } from 'components/AddDrinkForm/AddDrinkForm';
import { PopularDrinks } from 'components/PopularDrinks/PopularDrinks';
import { AllPageWraper } from './AddDrinkPage.styled'

const AddDrinkPage = () => {
    return (
        <>
            <PageTitle title={"Add recipe"}></PageTitle>
            <AllPageWraper>
                <AddDrinkForm />
                <div>
                <PopularDrinks />
                </div>
            </AllPageWraper>

        </>
        )
};

export default AddDrinkPage;