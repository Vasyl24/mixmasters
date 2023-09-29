import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { AddDrinkForm } from 'components/AddDrinkForm/AddDrinkForm';
import { PopularDrinks } from 'components/PopularDrinks/PopularDrinks';
import { AllPageWraper, StyledPageContainer } from './AddDrinkPage.styled';
import FollowUs from '../../components/FollowUs/FollowUs';

// import { fetchPopularDrinks } from '../../redux/drinks/drinksOperations';
// import { selectDrinks } from '../../redux/drinks/drinksSelectors';

const AddDrinkPage = () => {
  //   const dispatch = useDispatch();
  //   const drinks = useSelector(selectDrinks);

  //   const categories = drinks.map(drink => console.log(drink));

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
