import { useDispatch } from 'react-redux';
// import { toast, ToastContainer } from 'react-toastify';
// import { selectError } from 'redux/drinks/drinksSelectors';
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
import { useState } from 'react';

export function DrinkPageHero({ drinkInfo }) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const {
    _id,
    drink,
    alcoholic,
    glass,
    shortDescription,
    drinkThumb,
    favorite,
  } = drinkInfo;
  const [isFavorite, setIsFavorite] = useState(() =>
    favorite.includes(user._id)
  );

  const onDeleteDrink = async id => {
    const drink = { id };
    try {
      const deletedDrink = await dispatch(deleteFavoriteDrink(drink));
      if (!deletedDrink.error) {
        setIsFavorite(false);
      }
    } catch (error) {}
  };

  const onAddDrink = async id => {
    const drink = { id };
    try {
      const addDrink = await dispatch(addFavoriteDrink(drink));
      if (!addDrink.error) {
        setIsFavorite(true);
      }
    } catch (error) {}
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
