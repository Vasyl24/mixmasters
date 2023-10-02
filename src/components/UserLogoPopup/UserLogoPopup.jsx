import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import icons from '../../assets/sprite.svg';
import { lock } from 'tua-body-scroll-lock';
import {
  ModalStyles,
  BackdropStyles,
  EditProfileWrap,
  Text,
  Icon,
} from './UserLogoPopup.styled';
import { StyledLogoutBtn } from '../Butttons/LogoutBtn/LogoutBtn.styled';

export const UserLogoPopup = ({
  setModalComponent,
  modalIsOpen,
  toggleModal,
}) => {
  const handleLogOut = () => {
    setModalComponent('LogOutModal');
  };
  const handleEdit = () => {
    setModalComponent('UserInfoModal');
  };
  return (
    <Rodal
      visible={modalIsOpen}
      onClose={toggleModal}
      closeOnEsc={true}
      animation={'zoom'}
      showCloseButton={false}
      customStyles={ModalStyles}
      customMaskStyles={BackdropStyles}
      onAnimationEnd={lock()}
    >
      <EditProfileWrap onClick={handleEdit}>
        <Text>Edit profile</Text>
        <Icon>
          <use xlinkHref={`${icons}#icon-edit`} />
        </Icon>
      </EditProfileWrap>
      <StyledLogoutBtn type="button" onClick={handleLogOut}>
        Log out
      </StyledLogoutBtn>
    </Rodal>
  );
};
