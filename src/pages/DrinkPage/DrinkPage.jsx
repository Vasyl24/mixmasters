import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DrinkPageHero } from 'components/DrinkPageHero/DrinkPageHero';
import { DrinkIngredientsList } from 'components/DrinkIngredientsList/DrinkIngredientsList';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';

const DrinkPage = () => {
  const [drinkInfo, setDrinkInfo] = useState({});
  const { drinkId } = useParams();
  const [error, setError] = useState(null);


//   useEffect(() => {
//     async function getDrinkInfo() {
//       try {
//         setError(null);
//         setIsLoading(true);
//         const info = await getDrinkById(drinkId);
//         if (info) {
//           setDrinkInfo(info);
//         } else {
//           setError(`Oops, something went wrong, please try again`);
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     getDrinkInfo();
//   }, [drinkId]);

  return (
    <>
      <DrinkPageHero drink={null} />
          <DrinkIngredientsList ingredients={[]} />
          <RecipePreparation recipe={ null} />
    </>
  );
};

export default DrinkPage;
