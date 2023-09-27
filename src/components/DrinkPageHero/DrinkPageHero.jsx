// import { PageTitle } from 'components/PageTitle/PageTitle';
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

export function DrinkPageHero({ drinkInfo }) {
  const { drink, alcoholic, glass, shortDescription, drinkThumb } = drinkInfo;
  return (
    <ContainerHero>
      <ContainerDescription>
        <PageTitle>{drink}</PageTitle>
        <GlassAlcohol>
          {glass} / {alcoholic}
        </GlassAlcohol>
        <Description>{shortDescription}</Description>
        <Button type="button">Add to favorite drinks</Button>
      </ContainerDescription>
      {drinkThumb ? (
        <ContainerImage img={drinkThumb} />
      ) : (
        <ContainerImage img={defaultImage} />
      )}
    </ContainerHero>
  );
}
