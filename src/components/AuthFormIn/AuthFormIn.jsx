import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sprite from 'assets/sprite.svg';

import { signinUser } from 'redux/auth/authOperations';
import { selectIsLoggedIn } from '../../redux/selectors';
import {
  LoginContainer,
  Title,
  InputBlock,
  StyledInput,
  ErrorContainer,
  ErrorMessage,
  StyledBtn,
  StyledLink,
  IconPasswordHidden,
  IconPasswordShow,
} from './AuthFormIn.styled';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email address is required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .max(30, ({ max }) => `Password must be no more than ${max} characters`)
    .required('Password is required'),
});

const AuthFormIn = () => {
  const [textPassword, setTextPassword] = useState(true);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const resetForm = () => {
    formik.resetForm({
      values: initialValues,
    });
  };

  const onSubmit = async values => {
    if (isLoggedIn) {
      // toast.error('User is already logged in');
      navigate('/home', { replace: true });
      return;
    } else if (dispatch(signinUser({ ...values }))) {
      resetForm();
      navigate('/home', { replace: true });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <LoginContainer onSubmit={formik.handleSubmit}>
      <ToastContainer />
      <Title>Sign In</Title>

      <InputBlock>
        <label htmlFor="email">
          <StyledInput
            name="email"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </label>
        {formik.touched.email && formik.errors.email && (
          <ErrorContainer>
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          </ErrorContainer>
        )}

        <label htmlFor="password">
          <StyledInput
            name="password"
            type={textPassword ? 'password' : 'text'}
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            style={{ color: textPassword ? 'inherit' : '#f3f3f3' }}
          />
          <div onClick={() => setTextPassword(prevState => !prevState)}>
            {textPassword ? (
              <IconPasswordHidden>
                <use href={`${sprite}#icon-eye-off`} />
              </IconPasswordHidden>
            ) : (
              <IconPasswordShow>
                <use href={`${sprite}#icon-eye`} />
              </IconPasswordShow>
            )}
          </div>
        </label>
        {formik.touched.password && formik.errors.password && (
          <ErrorContainer>
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          </ErrorContainer>
        )}
      </InputBlock>

      <StyledBtn
        type="submit"
        disabled={!formik.isValid || formik.isSubmitting}
      >
        Sign In
      </StyledBtn>
      <StyledLink to="/signup">Sign Up</StyledLink>
    </LoginContainer>
  );
};

export default AuthFormIn;
