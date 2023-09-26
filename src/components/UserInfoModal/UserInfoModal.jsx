import { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import icons from '../../assets/sprite.svg';
import {
  Container,
  CloseButton,
  Icon,
  UserAvatar,
  InputFile,
  StyledField,
  StyledBtn,
  AvatarWrap,
  AddButton,
} from './UserInfoModal.styled';
import { yupSchema } from './yupSchema';
import { selectUser } from '../../redux/selectors';
import { updateUser } from '../../redux/auth/authOperations';

export const UserInfoModal = ({ toggleModal }) => {
  //   const hiddenFileInput = useRef();
  const { name, avatarURL } = useSelector(selectUser);
  const dispatch = useDispatch();
  const initialValues = { name: name };
  const [addFile, setAddFile] = useState(false);
  const handleClose = () => {
    toggleModal();
  };

  const handleAddFile = () => {
    setAddFile(!addFile);
  };
  //   const click = () => hiddenFileInput.current.click();
  //   const handleClick = () => {
  //     console.log(hiddenFileInput);
  //     hiddenFileInput.current.click();
  //   };
  const handleSubmit = values => {
    // console.log(values);
    dispatch(updateUser(values));
    toggleModal();
  };
  return (
    <Container>
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
        <Form>
          {addFile && (
            <InputFile
              type="file"
              name="avatarURL"
              id="avatar"
              // ref={hiddenFileInput}
              // style={{ display: 'none' }}
            />
          )}

          <StyledField type="text" name="name" id="name" />
          <ErrorMessage name="name" />

          <StyledBtn type="submit">Save changes</StyledBtn>
        </Form>
      </Formik>
    </Container>
  );
};
