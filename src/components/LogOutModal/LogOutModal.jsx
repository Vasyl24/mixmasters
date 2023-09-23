import icons from '../../assets/sprite.svg';
import {
  Container,
  Text,
  CloseButton,
  Icon,
  ButtonWrap,
  StyledCancelBtn,
} from './LogOutModal.styled';
import { StyledLogoutBtn } from '../Butttons/LogoutBtn/LogoutBtn.styled';

export const LogOutModal = ({ setModalComponent, toggleModal }) => {
  const handleLogOut = () => {
    setModalComponent('LogOutModal');
  };
  const handleClose = () => {
    toggleModal();
  };
  return (
    <Container>
      <CloseButton type="button" onClick={handleClose}>
        <Icon>
          <use xlinkHref={`${icons}#icon-close`} />
        </Icon>
      </CloseButton>
      <Text>Are you sure you want to log out?</Text>
      <ButtonWrap>
        <StyledLogoutBtn type="button" onClick={handleLogOut}>
          Log out
        </StyledLogoutBtn>
        <StyledCancelBtn type="button" onClick={handleClose}>
          Cancel
        </StyledCancelBtn>
      </ButtonWrap>
    </Container>
  );
};
