import icons from '../../assets/sprite.svg';
import {
  Container,
  EditProfileWrap,
  Text,
  Icon,
  Button,
} from './UserLogoPopup.styled';
export const UserLogoPopup = () => {
  return (
    <Container>
      <EditProfileWrap>
        <Text>Edit profile</Text>
        <Icon>
          <use xlinkHref={`${icons}#icon-edit`} />
        </Icon>
      </EditProfileWrap>
      <Button type="button">Log out</Button>
    </Container>
  );
};
