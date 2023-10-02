import { useState, useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { lock } from 'tua-body-scroll-lock';

import icons from '../../assets/sprite.svg';
import {
  ModalStyles,
  BackdropStyles,
  CloseButton,
  Icon,
  UserAvatar,
  InputFile,
  StyledForm,
  StyledField,
  StyledBtn,
  AvatarWrap,
  AddButton,
  IconEdit,
} from './UserInfoModal.styled';
import { yupSchema } from './yupSchema';
import { selectUser } from '../../redux/selectors';
import { updateUser } from '../../redux/auth/authOperations';
import { useWindowWidth } from '../../hooks/useWindowWidth';

export const UserInfoModal = ({ toggleModal, modalIsOpen }) => {
  const hiddenFileInput = document.getElementById('avatar');
  const dispatch = useDispatch();
  const { name, avatarURL } = useSelector(selectUser);
  const [modalSize, setModalSize] = useState(['335', '345']);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth >= 768) setModalSize(['500', '426']);
  }, [windowWidth]);

  const initialValues = { name: name };
  const handleClose = () => {
    toggleModal();
  };

  // const MAX_SIZE = 500000; // 500KB
  // const validateImage = (values: { image?: File }) => {
  //   if (values.image && values.image.size > MAX_SIZE) {
  //     return { image: 'Max file size exceeded.' };
  //   }
  // };
  const handleAddFile = () => {
    hiddenFileInput.click();
  };

  const handleSubmit = values => {
    console.log(values);
    dispatch(updateUser(values));
    toggleModal();
  };

  return (
    <Rodal
      width={modalSize[0]}
      height={modalSize[1]}
      visible={modalIsOpen}
      onClose={toggleModal}
      closeOnEsc={true}
      animation={'zoom'}
      showCloseButton={false}
      customStyles={ModalStyles}
      customMaskStyles={BackdropStyles}
      onAnimationEnd={lock()}
    >
      <CloseButton type="button" onClick={handleClose}>
        <Icon>
          <use xlinkHref={`${icons}#icon-close`} />
        </Icon>
      </CloseButton>
      <AvatarWrap>
        <UserAvatar src={avatarURL} alt="User photo" />
        <AddButton type="button" onClick={handleAddFile}>
          <Icon>
            <use xlinkHref={`${icons}#icon-add-photo`} />
          </Icon>
        </AddButton>
      </AvatarWrap>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={yupSchema}
      >
        <StyledForm>
          <InputFile
            type="file"
            name="avatar"
            id="avatar"
            style={{ display: 'none' }}
          />

          <StyledField type="text" name="name" id="name" />
          <ErrorMessage name="name" />

          <IconEdit>
            <use xlinkHref={`${icons}#icon-edit`} />
          </IconEdit>

          <StyledBtn type="submit">Save changes</StyledBtn>
        </StyledForm>
      </Formik>
    </Rodal>
  );
};
