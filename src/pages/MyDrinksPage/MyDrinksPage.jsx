import DrinksList from 'components/DrinksList/DrinksList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchMyDrinks, deleteMyDrink } from 'redux/drinks/drinksOperations';
import {
  selectDrinks,
  selectError,
  selectIsLoading,
} from 'redux/drinks/drinksSelectors';

import {
  StyledPageContainer,
  StyledDefaultContainer,
  StyledNotFoundImg,
  StyledDescr,
} from './MyDrinksPage.styled';
import { toast } from 'react-hot-toast';
import defaultImg from '../../assets/blue-iced-tea.png';
import { PageTitle } from 'components/PageTitle/PageTitle';
import MyPaginator from 'components/MyPaginator/MyPaginator';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectDrinks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [currentPage, setCurrentPage] = useState(1);
  const [drinksPerPage, setDrinksPerPage] = useState(9);
  const [pageNumbersToShow, setPageNumbersToShow] = useState(8);

  const updateDrinksPerPageAndPageNumbers = () => {
    if (window.innerWidth < 768) {
      setDrinksPerPage(10);
      setPageNumbersToShow(5);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      setDrinksPerPage(10);
      setPageNumbersToShow(8);
    } else if (window.innerWidth >= 1440) {
      setDrinksPerPage(9);
      setPageNumbersToShow(8);
    }
  };

  useEffect(() => {
    updateDrinksPerPageAndPageNumbers();
    window.addEventListener('resize', updateDrinksPerPageAndPageNumbers);
    return () => {
      window.removeEventListener('resize', updateDrinksPerPageAndPageNumbers);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchMyDrinks());
  }, [dispatch]);

  const onDelete = id => {
    const drink = { id };
    dispatch(deleteMyDrink(drink));
  };

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastDrink = currentPage * drinksPerPage;
  const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
  const currentDrinks = drinks.slice(indexOfFirstDrink, indexOfLastDrink);

  return (
    <StyledPageContainer>
      <PageTitle title={'My drinks'} />
      {error &&
        toast.error('Something went wrong please try later.', {
          position: 'top-center',
        })}
      {drinks.length !== 0 || isLoading ? (
        <DrinksList drinks={currentDrinks} handleDel={onDelete} />
      ) : (
        <StyledDefaultContainer>
          <StyledNotFoundImg src={`${defaultImg}`} alt="blue-iced-tea" />
          <StyledDescr>You haven't added any cocktails yet</StyledDescr>
        </StyledDefaultContainer>
      )}
      {drinks.length > 8 && (
        <MyPaginator
          drinksPerPage={drinksPerPage}
          totalDrinks={drinks.length}
          onPageChange={onPageChange}
          pageNumbersToShow={pageNumbersToShow}
        />
      )}
    </StyledPageContainer>
  );
};

export default MyDrinksPage;
