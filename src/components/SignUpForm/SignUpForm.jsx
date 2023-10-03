import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from 'redux/auth/authOperations';
import { useFormik } from 'formik';
import { format, subDays } from 'date-fns';
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
  ContainerLayout,
} from './SignUpForm.styled';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ({ min }) => `The name must be at least ${min} characters`)
    .max(20, ({ max }) => `The name must be no more than ${max} characters`)
    .required('Name is required')
    .label('Name'),
  birthdate: yup.date().nullable().required('Your age is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required'),
  password: yup
    .string()
    .min(6, ({ min }) => `The password must be at least ${min} characters`)
    .max(30, ({ max }) => `The password must be no more than ${max} characters`)
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
  const yesterday = subDays(new Date(), 1);

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
    validateOnSubmit: true,
  });

  return (
    <ContainerLayout>
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
              maxDate={yesterday}
              showYearDropdown
              showMonthDropdown
              yearDropdownItemNumber={70}
              scrollableYearDropdown
              scrollableMonthDropdown
              dropdownMode="select"
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
              onBlur={formik.handleBlur}
              value={formik.values.email}
              border={
                formik.touched.email &&
                (formik.errors.email
                  ? '1px solid #da1414'
                  : '1px solid #3cbc81')
              }
            />
            {formik.touched.email &&
              (formik.errors.email ? (
                <ErrorContainer>
                  <ErrorMessage>{formik.errors.email}</ErrorMessage>
                </ErrorContainer>
              ) : (
                <ValidContainer>
                  <ValidMessage>This is a correct email</ValidMessage>
                </ValidContainer>
              ))}

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
              onBlur={formik.handleBlur}
              value={formik.values.password}
              border={
                formik.touched.password &&
                (formik.errors.password
                  ? '1px solid #da1414'
                  : '1px solid #3cbc81')
              }
            />
            {formik.touched.password &&
              (formik.errors.password ? (
                <ErrorContainer>
                  <ErrorMessage>{formik.errors.password}</ErrorMessage>
                </ErrorContainer>
              ) : (
                <ValidContainer>
                  <ValidMessage>This is a correct password</ValidMessage>
                </ValidContainer>
              ))}
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
          Sign up
        </StyledBtn>
        <StyledLink to="/signin">Sign In</StyledLink>
      </RegisterContainer>
    </ContainerLayout>
  );
};

export default AuthForm;
