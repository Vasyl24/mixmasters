import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { useWindowWidth } from '../../hooks/useWindowWidth';
import icons from '../../assets/sprite.svg';
import { signoutUser } from '../../redux/auth/authOperations';
import {
  ModalStyles,
  BackdropStyles,
  Text,
  CloseButton,
  Icon,
  ButtonWrap,
  StyledCancelBtn,
  StyledLogoutBtn,
} from './LogOutModal.styled';

export const LogOutModal = ({ toggleModal, modalIsOpen }) => {
  const dispatch = useDispatch();
  const [modalSize, setModalSize] = useState([335, 193]);
  const windowWidth = useWindowWidth();
  useEffect(() => {
    if (windowWidth >= 768) setModalSize([500, 215]);
    else if (windowWidth < 768) setModalSize([335, 193]);
  }, [windowWidth]);
  useEffect(() => {
    modalIsOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalIsOpen]);

  const handleLogOut = () => {
    dispatch(signoutUser());
  };
  const handleClose = () => {
    toggleModal();
  };
  return (
    <Rodal
      width={modalSize[0]}
      height={modalSize[1]}
      visible={modalIsOpen}
      onClose={handleClose}
      closeOnEsc={true}
      animation={'zoom'}
      showCloseButton={false}
      customStyles={ModalStyles}
      customMaskStyles={BackdropStyles}
    >
      <CloseButton type="button" onClick={handleClose}>
        <Icon style={{ stroke: '#f3f3f3' }}>
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
    </Rodal>
  );
};
