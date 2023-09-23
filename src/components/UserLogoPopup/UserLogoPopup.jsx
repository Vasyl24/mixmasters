import icons from '../../assets/sprite.svg';
import {
  Container,
  EditProfileWrap,
  Text,
  Icon,
  Button,
} from './UserLogoPopup.styled';
export const UserLogoPopup = () => {
  const handleEditProfile = () => {
    window.alert('Edit profile modal');
  };
  const handleLogout = () => {
    window.alert('Log out modal');
  };

  return (
    <Container>
      <EditProfileWrap onClick={handleEditProfile}>
        <Text>Edit profile</Text>
        <Icon>
          <use xlinkHref={`${icons}#icon-edit`} />
        </Icon>
      </EditProfileWrap>
      <Button type="button" onClick={handleLogout}>
        Log out
      </Button>
    </Container>
  );
};
