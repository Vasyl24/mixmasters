import DrinksList from 'components/DrinksList/DrinksList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchFavoriteDrinks,
  deleteFavoriteDrink,
} from 'redux/drinks/drinksOperations';
import {
  selectDrinks,
  selectError,
  selectIsLoading,
} from 'redux/drinks/drinksSelectors';
import { StyledTitle, StyledDescr } from './FavoriteDrinksPage.styled';
import { toast } from 'react-toastify';

const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectDrinks);
  //   const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const onDelete = id => {
    dispatch(deleteFavoriteDrink(id));
  };

  useEffect(() => {
    dispatch(fetchFavoriteDrinks());
  }, [dispatch]);

  return (
    <>
      <StyledTitle>Favorites</StyledTitle>
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
        <StyledDescr>You haven't added any cocktails yet</StyledDescr>
      )}
    </>
  );
};

export default FavoriteDrinksPage;
