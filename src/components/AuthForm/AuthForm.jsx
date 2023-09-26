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
} from './AuthForm.styled';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ({ min }) => `Name must be at least ${min} characters`)
    .max(16, ({ max }) => `Name must be at least ${max} characters`)
    .required('Name is required')
    .label('Name'),
  birthdate: yup.date().nullable().required('Your age is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .max(30, ({ max }) => `Password must be no more than ${max} characters`)
    .required('Password is required'),
});

const formatDate = date => {
  return format(date, 'dd/MM/yyyy');
};

const AuthForm = () => {
  const [textPassword, setTextPassword] = useState(true);
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
        </label>
        {formik.touched.name && formik.errors.name && (
          <ErrorContainer>
            <ErrorMessage>{formik.errors.name}</ErrorMessage>
          </ErrorContainer>
        )}

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
        </label>

        {formik.touched.birthdate && formik.errors.birthdate && (
          <ErrorContainer>
            <ErrorMessage>{formik.errors.birthdate}</ErrorMessage>
          </ErrorContainer>
        )}

        <label htmlFor="email">
          <StyledInput
            name="email"
            type="email"
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
        Sign up
      </StyledBtn>
      <StyledLink to="/signin">Sign In</StyledLink>
    </RegisterContainer>
  );
};

export default AuthForm;
