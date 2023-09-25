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
import { StyledTitle, StyledDescr } from './MyDrinksPage.styled';
import { ToastContainer, toast } from 'react-toastify';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectDrinks);
  //   const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  console.log(error);
  console.log(drinks);
  const onDelete = id => {
    dispatch(deleteMyDrink(id));
  };

  useEffect(() => {
    dispatch(fetchMyDrinks());
  }, [dispatch]);

  return (
    <>
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
        <StyledDescr>You haven't added any cocktails yet</StyledDescr>
      )}
      <DrinksList handleDel={onDelete} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default MyDrinksPage;
