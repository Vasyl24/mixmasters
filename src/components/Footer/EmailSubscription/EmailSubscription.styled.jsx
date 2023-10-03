import styled from 'styled-components';
import { Field, Form } from 'formik';

export const SubscribeFormContainer = styled(Form)`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  max-width: 480px;

  @media (min-width: 768px) {
    margin: 0;
    max-width: 309px;
  }
`;

export const SubscribeText = styled.p`
  margin-bottom: 24px;
  color: #f3f3f3;
  font-size: 16px;
  line-height: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const SubscribeInput = styled(Field)`
  width: 100%;
  height: 54px;
  border-radius: 200px;
  border: ${props => props.border || '1px solid rgba(243, 243, 243, 0.2)'};
  background-color: transparent;
  padding: 18px 24px;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  transition: border-color 0.3s ease-in-out;

  &::placeholder {
    color: #666666;
  }

  @media (min-width: 768px) {
    height: 56px;
    padding: 14px 24px;
    font-size: 17px;
    line-height: 26px;
  }

  &:focus,
  &:hover {
    outline: none;
    color: #f3f3f3;
    border: ${props => props.border || '1px solid rgba(243, 243, 243, 0.2)'};
    background-color: transparent;
  }
`;

export const ErrorField = styled.div`
  position: absolute;
  bottom: -18px;
  left: 15px;
  font-size: 12px;
  color: #da1414;
  padding: 0 10px;
  border-radius: 15px;
`;

export const SubscribeButton = styled.button`
  margin-top: 18px;
  height: 54px;
  color: #f3f3f3;
  background-color: transparent;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: color 0.5s, border-color 0.5s;

  &:hover {
    border-color: #f3f3f3;
    color: rgba(243, 243, 243, 0.4941176471);
    border-color: rgba(243, 243, 243, 0.4941176471);
  }

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    color: #666666;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    height: 56px;
    font-size: 17px;
    line-height: 26px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;
