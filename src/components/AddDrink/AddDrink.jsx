import coctail from '../../assets/blue-iced-tea.png';
import coctail2x from '../../assets/blue-iced-tea@2x.png';

import {
  SectionContainer,
  Container,
  Header,
  Text,
  Picture,
  Button,
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
        <Button to="/add">Add drinks</Button>
      </Container>
      <Picture src={coctail} alt="coctail" srcSet={`${coctail2x} 2x`} />
    </SectionContainer>
  );
};
