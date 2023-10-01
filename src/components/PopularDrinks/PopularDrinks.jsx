import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPopularDrinks } from 'redux/drinks/drinksOperations';
import toast from 'react-hot-toast';
import {
  Wrapper,
  Title,
  List,
  Image,
  TextWrapper,
  Subtitle,
  Text,
  DrinkItem,
} from 'components/PopularDrinks/PopularDrinks.styled';
import defaultImage from '../../assets/rectangle-3.png';

export const PopularDrinks = () => {
  const dispatch = useDispatch();
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getPopularDrinks() {
      try {
        const drinks = await dispatch(fetchPopularDrinks());
        if (drinks) {
          setDrinks(drinks.payload);
        } else {
          toast.error('Popular drinks not found');
        }
      } catch (error) {
        toast.error(`${error.message}`);
      }
    }
    getPopularDrinks();
  }, [dispatch]);

  const favoriteDrinks = drinks.slice(0, 4);

  return (
    <Wrapper>
      <Title>Popular drinks</Title>
      <List>
        {favoriteDrinks.map(({ _id, drinkThumb, drink, shortDescription }) => {
          return (
            <li key={_id}>
              <DrinkItem to={`/drinks/${_id}`}>
                {drinkThumb ? (
                  <Image src={drinkThumb} alt={drink} />
                ) : (
                  <Image src={defaultImage} alt={drink} />
                )}
                <TextWrapper>
                  <Subtitle>{drink}</Subtitle>
                  <Text>{shortDescription}</Text>
                </TextWrapper>
              </DrinkItem>
            </li>
          );
        })}
      </List>
    </Wrapper>
  );
};
