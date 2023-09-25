import { PageTitle } from 'components/PageTitle/PageTitle';
import {
  ContainerHero,
  ContainerDescription,
  Button,
  Description,
  GlassAlcohol,
  Picture,
} from './DrinkPageHero.styled';
import defaultImage from '../../assets/rectangle-2.jpg';

export function DrinkPageHero({ drink }) {
  return (
    <ContainerHero>
      <ContainerDescription>
        <PageTitle title={'Title'} />
        <GlassAlcohol>Highball glass / Non alcoholic</GlassAlcohol>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          labore! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Placeat consequatur harum odit
        </Description>
        <Button type="button">Add to favorite drinks</Button>
      </ContainerDescription>

      <Picture src={defaultImage} alt="foto" />
    </ContainerHero>
  );
}
