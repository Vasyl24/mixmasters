import { PageTitle } from 'components/PageTitle/PageTitle';
import {
  ContainerHero,
  ContainerDescription,
  Button,
  Description,
  GlassAlcohol,
  Picture,
} from './DrinkPageHero.styled';
// import defaultImage from '../../assets/rectangle-2.jpg';

export function DrinkPageHero({ drinkInfo }) {
  const { drink, alcoholic, glass, category, drinkThumb } = drinkInfo;
  return (
    <ContainerHero>
      <ContainerDescription>
        <PageTitle title={drink} />
        <GlassAlcohol>
          {glass} / {alcoholic}
        </GlassAlcohol>
        <Description>{category}</Description>
        <Button type="button">Add to favorite drinks</Button>
      </ContainerDescription>

      <Picture src={drinkThumb} alt="foto" />
    </ContainerHero>
  );
}
