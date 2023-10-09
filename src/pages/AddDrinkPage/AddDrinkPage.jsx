import { useEffect } from 'react';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { AddDrinkForm } from 'components/AddDrinkForm/AddDrinkForm';
import { PopularDrinks } from 'components/PopularDrinks/PopularDrinks';
import { AllPageWraper, StyledPageContainer } from './AddDrinkPage.styled';
import FollowUs from '../../components/FollowUs/FollowUs';

const AddDrinkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledPageContainer>
      <PageTitle title={'Add recipe'}></PageTitle>
      <AllPageWraper>
        <AddDrinkForm />
        <div>
          <FollowUs />
          <PopularDrinks />
        </div>
      </AllPageWraper>
    </StyledPageContainer>
  );
};

export default AddDrinkPage;
