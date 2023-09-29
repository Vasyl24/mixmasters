import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DrinkPageHero } from 'components/DrinkPageHero/DrinkPageHero';
import { DrinkIngredientsList } from 'components/DrinkIngredientsList/DrinkIngredientsList';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';
import { useDispatch } from 'react-redux';
import { getDrinkById } from 'redux/drinks/drinksOperations';
import { toast } from 'react-toastify';

const DrinkPage = () => {
  const [drinkInfo, setDrinkInfo] = useState({});
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  console.log(drinkInfo);

  const errorToast = text =>
    toast.error(text, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  useEffect(() => {
    async function getDrinkInfo() {
      try {
        setIsLoading(true);
        const info = await dispatch(getDrinkById(drinkId));
        if (info) {
          setDrinkInfo(info.payload);
        } else {
          errorToast('Something went wrong please try later.');
        }
      } catch (error) {
        errorToast(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getDrinkInfo();
  }, [dispatch, drinkId]);

  return (
    <div>
      {!isLoading && drinkInfo.drink && (
        <>
          <DrinkPageHero drinkInfo={drinkInfo} />
          <DrinkIngredientsList ingredients={drinkInfo.ingredients} />
          <RecipePreparation
            instructions={drinkInfo.instructions}
            description={drinkInfo.description}
          />
        </>
      )}
    </div>
  );
};

export default DrinkPage;
