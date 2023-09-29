import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from 'redux/auth/authOperations';
import { useFormik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import * as yup from 'yup';
import sprite from 'assets/sprite.svg';
import {
  RegisterContainer,
  Title,
  InputBlock,
  StyledInput,
  StyledDatePicker,
  StyledIconСalendar,
  IconСalendar,
  ErrorContainer,
  ErrorMessage,
  StyledBtn,
  StyledLink,
  IconPasswordHidden,
  IconPasswordShow,
  IconDone,
  IconError,
  ValidContainer,
  ValidMessage,
} from './AuthForm.styled';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ({ min }) => `Name must be at least ${min} characters`)
    .max(12, ({ max }) => `Name must be at least ${max} characters`)
    .required('Name is required')
    .label('Name'),
  birthdate: yup.date().nullable().required('Your age is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required'),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .max(30, ({ max }) => `Password must be no more than ${max} characters`)
    .required('Password is required'),
});

const formatDate = date => {
  return format(date, 'dd/MM/yyyy');
};

const AuthForm = () => {
  const [textPassword, setTextPassword] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const birthdateInputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    birthdate: null,
    email: '',
    password: '',
  };

  const resetForm = () => {
    formik.resetForm({
      values: initialValues,
    });
  };

  const openCalendar = () => {
    if (birthdateInputRef.current) {
      birthdateInputRef.current.setOpen(true);
    }
  };

  const handleEmailBlur = e => {
    formik.handleBlur(e);
    const email = e.target.value;
    const isValid = validationSchema.fields.email.isValidSync(email);
    setIsEmailValid(isValid);
  };

  const handlePasswordBlur = e => {
    formik.handleBlur(e);
    const password = e.target.value;
    const isValid = validationSchema.fields.password.isValidSync(password);
    setIsPasswordValid(isValid);
  };

  const onSubmit = values => {
    const formattedValues = {
      ...values,
      birthdate: values.birthdate ? formatDate(values.birthdate) : null,
    };

    dispatch(signupUser({ ...formattedValues }));

    resetForm();
    navigate('/home', { replace: true });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnSubmit: true,
  });

  return (
    <RegisterContainer onSubmit={formik.handleSubmit}>
      <Title>Sign up</Title>
      <InputBlock>
        <label htmlFor="name">
          <StyledInput
            name="name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <ErrorContainer>
              <ErrorMessage>{formik.errors.name}</ErrorMessage>
            </ErrorContainer>
          )}
        </label>

        <label htmlFor="birthdate">
          <StyledDatePicker
            id="birthdate"
            name="birthdate"
            placeholderText="dd/mm/yyyy"
            selected={formik.values.birthdate}
            onChange={date => {
              formik.setFieldValue('birthdate', date);
            }}
            dateFormat="dd/MM/yyyy"
            onBlur={formik.handleBlur}
          />
          <StyledIconСalendar onClick={openCalendar}>
            <IconСalendar>
              <use href={sprite + '#icon-calendar'} />
            </IconСalendar>
          </StyledIconСalendar>
          {formik.touched.birthdate && formik.errors.birthdate && (
            <ErrorContainer>
              <ErrorMessage>{formik.errors.birthdate}</ErrorMessage>
            </ErrorContainer>
          )}
        </label>

        <label htmlFor="email">
          <StyledInput
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={handleEmailBlur}
            value={formik.values.email}
            style={{
            borderColor: isEmailValid ? '#3cbc81' : formik.touched.email && formik.errors.email ? '#da1414' : ' rgba(243, 243, 243, 0.2)',
          }}
          onMouseOver={e => {
            e.target.style.outline = 'none';
            e.target.style.color = '#f3f3f3';
            e.target.style.borderColor = 'rgba(243, 243, 243, 0.5)';
          }}
          onFocus={e => {
            e.target.style.outline = 'none';
            e.target.style.color = '#f3f3f3';
            e.target.style.borderColor = 'rgba(243, 243, 243, 0.5)';
          }}
          />

          {isEmailValid && (
            <ValidContainer>
              <ValidMessage>This is a correct email</ValidMessage>
            </ValidContainer>
          )}

          {isEmailValid && (
            <div>
              <IconDone>
                <use href={`${sprite}#icon-done`} />
              </IconDone>
            </div>
          )}

          {formik.touched.email && formik.errors.email && (
            <ErrorContainer>
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            </ErrorContainer>
          )}

          {formik.touched.email && !!formik.errors.email && (
            <div>
              <IconError>
                <use href={`${sprite}#icon-error`} />
              </IconError>
            </div>
          )}
        </label>

        <label htmlFor="password">
          <StyledInput
            name="password"
            type={textPassword ? 'password' : 'text'}
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={handlePasswordBlur}
            value={formik.values.password}
            style={{
            borderColor: isPasswordValid ? '#3cbc81' : formik.touched.password && formik.errors.password ? '#da1414' : ' rgba(243, 243, 243, 0.2)',
            color: textPassword ? 'inherit' : '#f3f3f3',
          }}
         onMouseOver={e => {
            e.target.style.outline = 'none';
            e.target.style.color = '#f3f3f3';
            e.target.style.borderColor = 'rgba(243, 243, 243, 0.5)';
          }}
          onFocus={e => {
            e.target.style.outline = 'none';
            e.target.style.color = '#f3f3f3';
            e.target.style.borderColor = 'rgba(243, 243, 243, 0.5)';
          }}
          />

          {isPasswordValid && (
            <ValidContainer>
              <ValidMessage>This is a correct password</ValidMessage>
            </ValidContainer>
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
          {formik.touched.password && formik.errors.password && (
            <ErrorContainer>
              <ErrorMessage>{formik.errors.password}</ErrorMessage>
            </ErrorContainer>
          )}
        </label>
      </InputBlock>
      <StyledBtn
        type="submit"
        disabled={!formik.isValid || formik.isSubmitting}
      >
        Sign up
      </StyledBtn>
      <StyledLink to="/signin">Sign In</StyledLink>
    </RegisterContainer>
  );
};

export default AuthForm; 