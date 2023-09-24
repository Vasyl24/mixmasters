import styled from 'styled-components';

const SubscribeFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;

  @media (min-width: 768px) {
    max-width: 309px;
  }
`;

const SubscribeText = styled.p`
  margin-bottom: 24px;
  color: #f3f3f3;
  font-size: 16px;
  line-height: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const SubscribeInput = styled.input`
  width: 100%;
  height: 54px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  padding: 18px 24px;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  transition: border-color 0.3s ease-in-out;

  &::placeholder {
    color: #f3f3f3;
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
    border-color: rgba(243, 243, 243, 0.5);
    background-color: transparent;
  }
`;

const SubscribeButton = styled.button`
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

  &:not(:disabled):hover {
    border-color: #f3f3f3;
  }

  &:disabled {
    color: rgba(243, 243, 243, 0.4941176471);
    border-color: rgba(243, 243, 243, 0.4941176471);
  }

  @media (min-width: 768px) {
    height: 56px;
    font-size: 17px;
    line-height: 26px;
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const ErrorMessageOnBorder = styled.div`
  position: absolute;
  font-size: 12px;
  color: red;
  bottom: 0;
  left: 170px;
`;

const SubscribeStatusContainer = styled.div`
  position: relative;
`;

const StatusMessage = styled.p`
  position: absolute;
  bottom: -118px;
  left: 0;
  width: 100%;
  text-align: center;
`;

const SuccessStatus = styled.span`
  color: green;
`;

const ErrorStatus = styled.span`
  color: red;
`;

export {
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
};
 