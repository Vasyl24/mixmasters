import { useDispatch } from 'react-redux';
import {
  addFavoriteDrink,
  deleteFavoriteDrink,
} from 'redux/drinks/drinksOperations';
import {
  ContainerHero,
  ContainerDescription,
  Button,
  Description,
  GlassAlcohol,
  PageTitle,
  ContainerImage,
} from './DrinkPageHero.styled';
import defaultImage from '../../assets/rectangle-1.png';
import { useAuth } from 'useAuth';
// import { useEffect, useState } from 'react';

export function DrinkPageHero({ drinkInfo }) {
  
  const dispatch = useDispatch();
  const { _id, drink, alcoholic, glass, shortDescription, drinkThumb, favorite } =
    drinkInfo;
  // const [isFavorite, setIsFavorite] = useState(null);
  const { user } = useAuth();
  const isFavorite = favorite.includes(user._id);
  console.log(user._id);
  console.log(favorite);

  // useEffect(() => {
  //   function isFavorite () {favorite.includes(user._id);
  //   if (isFavorite) {
  //     setIsFavorite(true);
  //   }
  //   setIsFavorite(false)}
  // }, [favorite, user._id]);

  const onDeleteDrink = id => {
    const drink = { id };
    dispatch(deleteFavoriteDrink(drink));
  };

  const onAddDrink = id => {
    const drink = { id };
    dispatch(addFavoriteDrink(drink));
  };

  return (
    <ContainerHero>
      <ContainerDescription>
        <PageTitle>{drink}</PageTitle>
        <GlassAlcohol>
          {glass} / {alcoholic}
        </GlassAlcohol>
        <Description>{shortDescription}</Description>
        {isFavorite ? (
          <Button type="button" onClick={() => onDeleteDrink(_id)}>
            Delete from favorite drinks
          </Button>
        ) : (
          <Button type="button" onClick={() => onAddDrink(_id)}>
            Add to favorite drinks
          </Button>
        )}
      </ContainerDescription>
      {drinkThumb ? (
        <ContainerImage img={drinkThumb} />
      ) : (
        <ContainerImage img={defaultImage} />
      )}
    </ContainerHero>
  );
}
