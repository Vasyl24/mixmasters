import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import {
  SubscribeFormContainer,
  SubscribeText,
  SubscribeInput,
  SubscribeButton,
  InputContainer,
  ErrorMessageOnBorder,
  SubscribeStatusContainer,
  StatusMessage,
  SuccessStatus,
  ErrorStatus,
} from './EmailSubscription.styled';

const SubscribeForm = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setIsConfirmed(true);
      setStatus('success');
      resetForm();
    } catch (error) {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (isConfirmed) {
      const timer = setTimeout(() => {
        setIsConfirmed(false);
        setStatus('');
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isConfirmed]);

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={handleSubmit}
      validate={values => {
        const errors = {};

        if (!values.email) {
          return errors;
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address.';
        }

        return errors;
      }}
    >
      {({ isSubmitting, errors, values }) => (
        <Form className="subscribe_form">
          <SubscribeFormContainer>
            <SubscribeText>
              Subscribe to our newsletter and stay in touch with the latest news
              and special offers.
            </SubscribeText>
            <InputContainer>
              <SubscribeInput
                type="email"
                name="email"
                placeholder="Enter your email"
                data-customvalid={!errors.email && isFocused}
                data-custominvalid={errors.email && isFocused}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              {isFocused && errors.email && (
                <ErrorMessageOnBorder>{errors.email}</ErrorMessageOnBorder>
              )}
            </InputContainer>
            <SubscribeStatusContainer>
              {status === 'success' && isConfirmed && (
                <StatusMessage>
                  <SuccessStatus>
                    You have successfully subscribed to the newsletter
                  </SuccessStatus>
                </StatusMessage>
              )}

              {status === 'error' && (
                <StatusMessage>
                  <ErrorStatus>
                    Oops! An error occurred. Please try again later.
                  </ErrorStatus>
                </StatusMessage>
              )}
            </SubscribeStatusContainer>
            <SubscribeButton
              type="submit"
              disabled={
                isSubmitting || !values.email || Object.keys(errors).length > 0
              }
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </SubscribeButton>
          </SubscribeFormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default SubscribeForm;
