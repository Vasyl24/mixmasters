import { useEffect } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import icons from '../../assets/sprite.svg';

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
  useEffect(() => {
    modalIsOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalIsOpen]);

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
