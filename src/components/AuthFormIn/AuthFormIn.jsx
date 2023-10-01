import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
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
  ContainerLayout,
  ValidContainer,
  ValidMessage,
  IconDone,
  IconError,
} from './AuthFormIn.styled';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email address is required'),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .max(30, ({ max }) => `Password must be no more than ${max} characters`)
    .required('Password is required'),
});

const AuthFormIn = () => {
  const [textPassword, setTextPassword] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

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

  const handleEmailBlur = e => {
    formik.handleBlur(e);
    const email = e.target.value;
    const isValid = validationSchema.fields.email.isValidSync(email);
    setIsEmailValid(isValid);

    e.target.style.borderColor = isValid ? '#3cbc81' : '#da1414';
  };

  const handlePasswordBlur = e => {
    formik.handleBlur(e);
    const password = e.target.value;
    const isValid = validationSchema.fields.password.isValidSync(password);
    setIsPasswordValid(isValid);

    e.target.style.borderColor = isValid ? '#3cbc81' : '#da1414';
  };

  const onSubmit = async values => {
    if (isLoggedIn) {
      navigate('/home', { replace: true });
      return;
    }
    const response = await dispatch(signinUser({ ...values }));

    if (response && response.error) {
      toast.error('Edit your details');
    } else {
      resetForm();
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnSubmit: true,
  });

  return (
    <ContainerLayout>
      <LoginContainer onSubmit={formik.handleSubmit}>
        <Title>Sign In</Title>
        <InputBlock>
          <label htmlFor="email">
            <StyledInput
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={handleEmailBlur}
              value={formik.values.email}
            />

            {isEmailValid ? (
              <ValidContainer>
                <ValidMessage>This is a correct email</ValidMessage>
              </ValidContainer>
            ) : (
              <ErrorContainer>
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
              </ErrorContainer>
            )}

            {formik.touched.email &&
              (formik.errors.email ? (
                <IconError>
                  <use href={`${sprite}#icon-error`} />
                </IconError>
              ) : (
                <IconDone>
                  <use href={`${sprite}#icon-done`} />
                </IconDone>
              ))}
          </label>

          <label htmlFor="password">
            <StyledInput
              name="password"
              type={textPassword ? 'password' : 'text'}
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={handlePasswordBlur}
              value={formik.values.password}
            />

            {isPasswordValid ? (
              <ValidContainer>
                <ValidMessage>This is a correct password</ValidMessage>
              </ValidContainer>
            ) : (
              <ErrorContainer>
                <ErrorMessage>{formik.errors.password}</ErrorMessage>
              </ErrorContainer>
            )}

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
        </InputBlock>

        <StyledBtn
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          Sign In
        </StyledBtn>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </LoginContainer>
    </ContainerLayout>
  );
};

export default AuthFormIn;
