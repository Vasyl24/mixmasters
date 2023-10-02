import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../../redux/selectors';
import { UserMenu, UserIcon, UserName } from './UserLogo.styled';
import { UserLogoPopup } from 'components/UserLogoPopup/UserLogoPopup';
import { LogOutModal } from '../LogOutModal/LogOutModal';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';

export const UserLogo = () => {
  const { name, avatarURL } = useSelector(selectUser);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalComponet, setModalComponent] = useState(null);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const handleUserMenuShow = () => {
    toggleModal();
    setModalComponent('UserLogoPopup');
  };

  return (
    <>
      <UserMenu onClick={handleUserMenuShow}>
        <UserIcon src={avatarURL} alt="User photo" />
        <UserName>{name}</UserName>
      </UserMenu>
      {modalComponet === 'UserLogoPopup' && (
        <UserLogoPopup
          setModalComponent={setModalComponent}
          modalIsOpen={modalIsOpen}
          toggleModal={toggleModal}
        />
      )}

      {modalComponet === 'LogOutModal' && (
        <LogOutModal toggleModal={toggleModal} modalIsOpen={modalIsOpen} />
      )}
      {modalComponet === 'UserInfoModal' && (
        <UserInfoModal toggleModal={toggleModal} modalIsOpen={modalIsOpen} />
      )}
    </>
  );
};
