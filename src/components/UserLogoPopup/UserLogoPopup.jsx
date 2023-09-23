import icons from '../../assets/sprite.svg';
import { Container, EditProfileWrap, Text, Icon } from './UserLogoPopup.styled';
import { StyledLogoutBtn } from '../Butttons/LogoutBtn/LogoutBtn.styled';

export const UserLogoPopup = ({ setModalComponent }) => {
  const handleLogOut = () => {
    setModalComponent('LogOutModal');
  };
  return (
    <Container>
      <EditProfileWrap>
        <Text>Edit profile</Text>
        <Icon>
          <use xlinkHref={`${icons}#icon-edit`} />
        </Icon>
      </EditProfileWrap>
      <StyledLogoutBtn type="button" onClick={handleLogOut}>
        Log out
      </StyledLogoutBtn>
    </Container>
  );
};
