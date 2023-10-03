import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import {
  SubscribeFormContainer,
  SubscribeText,
  SubscribeInput,
  SubscribeButton,
  InputContainer,
  ErrorField,
} from './EmailSubscription.styled';
import { subscribeUser } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';

const EMAILPATTERN = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const SchemaEmail = Yup.object().shape({
  email: Yup.string()
    .matches(EMAILPATTERN, 'Please enter a valid email')
    .required('Email is required'),
});

const SubscribeForm = () => {
  const dispatch = useDispatch();
  const { subscription } = useSelector(selectUser);

  const handleSubmit = async (values, { resetForm }) => {
    const subscription = values.email;
    try {
      await dispatch(subscribeUser({ subscription }));
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={SchemaEmail}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <SubscribeFormContainer>
          <SubscribeText>
            Subscribe to our newsletter and stay in touch with the latest news
            and special offers.
          </SubscribeText>
          <InputContainer>
            <SubscribeInput
              type="email"
              name="email"
              placeholder={subscription}
              border={
                touched.email &&
                (errors.email ? '1px solid #da1414' : '1px solid #3cbc81')
              }
            />
            <ErrorMessage component={ErrorField} name="email" />
          </InputContainer>
          <SubscribeButton type="submit">Subscribe</SubscribeButton>
        </SubscribeFormContainer>
      )}
    </Formik>
  );
};

export default SubscribeForm;
