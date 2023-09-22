// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { DrinkPageHero } from 'components/DrinkPageHero/DrinkPageHero';
import { DrinkIngredientsList } from 'components/DrinkIngredientsList/DrinkIngredientsList';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';

const DrinkPage = () => {
  // const [drinkInfo, setDrinkInfo] = useState({});
  // const { drinkId } = useParams();
  // const [error, setError] = useState(null);

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
  const recipe =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium ipsa reprehenderit cumque dolorum nisi accusamus nemo laborum dolore minima? Error incidunt illo inventore in dolorum veniam quae ullam consequuntur? Reprehenderit est officiis doloremque aspernatur eos, exercitationem at modi. Odit.';
  return (
    <>
      <DrinkPageHero drink={null} />
      <DrinkIngredientsList ingredients={[]} />
      <RecipePreparation recipe={recipe} />
    </>
  );
};

export default DrinkPage;
