import { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import { lock, unlock } from 'tua-body-scroll-lock';

import { selectUser } from '../../redux/selectors';
import { UserMenu, UserIcon, UserName, ModalStyles } from './UserLogo.styled';
import { UserLogoPopup } from 'components/UserLogoPopup/UserLogoPopup';
import { LogOutModal } from '../LogOutModal/LogOutModal';

Modal.setAppElement('#root');
export const UserLogo = () => {
  const { name, avatarURL } = useSelector(selectUser);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalComponet, setModalComponent] = useState(null);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const handleUserMenuShow = () => {
    setModalIsOpen(true);
    setModalComponent('UserLogoPopup');
  };
  // const handleEditProfile = () => {
  //   window.alert('Edit profile modal');
  // };
  // const handleLogout = () => {
  //   window.alert('Log out modal');
  // };

  return (
    <>
      <UserMenu onClick={handleUserMenuShow}>
        <UserIcon src={avatarURL} alt="User photo" />
        <UserName>{name}</UserName>
      </UserMenu>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={ModalStyles}
        onAfterOpen={lock}
        onAfterClose={unlock}
      >
        {modalComponet === 'UserLogoPopup' && (
          <UserLogoPopup setModalComponent={setModalComponent} />
        )}
        {modalComponet === 'LogOutModal' && (
          <LogOutModal
            setModalComponent={setModalComponent}
            toggleModal={toggleModal}
          />
        )}
      </Modal>
    </>
  );
};
