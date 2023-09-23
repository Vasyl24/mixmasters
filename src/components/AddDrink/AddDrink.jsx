import { Link } from 'react-router-dom';
import coctail from '../../assets/blue-iced-tea.png';

import {
  SectionContainer,
  Container,
  Header,
  Text,
  Picture,
} from './AddDrink.styled';

export const AddDrink = () => {
  return (
    <SectionContainer>
      <Container>
        <Header>Craft Your Perfect Drink with Drink Master</Header>
        <Text>
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the world's finest
          beverages.
        </Text>
        <Link to="/add">Add drinks</Link>
      </Container>
      <Picture src={coctail} alt="phonebook" />
    </SectionContainer>
  );
};
