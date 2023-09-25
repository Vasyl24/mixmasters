import DrinksList from 'components/DrinksList/DrinksList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMyDrinks, deleteMyDrink } from 'redux/drinks/drinksOperations';
import {
  selectDrinks,
  selectError,
  // selectIsLoading,
} from 'redux/drinks/drinksSelectors';
import {
  StyledPageContainer,
  StyledTitle,
  StyledDefaultContainer,
  StyledNotFoundImg,
  StyledDescr,
} from './MyDrinksPage.styled';
import { toast } from 'react-toastify';
import defaultImg from '../../assets/blue-iced-tea.png';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectDrinks);
  //   const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const onDelete = id => {
    dispatch(deleteMyDrink(id));
  };

  useEffect(() => {
    dispatch(fetchMyDrinks());
  }, [dispatch]);

  return (
    <StyledPageContainer>
      <StyledTitle>My drinks</StyledTitle>
      {/* {isLoading && Поставити лоадер} */}
      {/* {!isLoading && Прибрати лоадер} */}
      {error &&
        toast.error('Something went wrong please try later.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })}
      {drinks.length !== 0 ? (
        <DrinksList handleDel={onDelete} />
      ) : (
        <StyledDefaultContainer>
          <StyledNotFoundImg src={`${defaultImg}`} alt="blue-iced-tea" />
          <StyledDescr>You haven't added any cocktails yet</StyledDescr>
        </StyledDefaultContainer>
      )}
    </StyledPageContainer>
  );
};

export default MyDrinksPage;
