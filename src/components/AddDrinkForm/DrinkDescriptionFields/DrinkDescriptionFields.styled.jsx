import styled from 'styled-components';
import { Field } from 'formik';

export const Wrapper = styled.div`
  margin-bottom: 80px;

  @media (min-width: 768px) {
    display: flex;
    gap: 32px;
    margin-top: 60px;
    margin-bottom: 80px;
  }
`;

export const ImageContainer = styled.div`
  width: 335px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  border-radius: 8px;
  background: rgba(22, 31, 55, 0.5);
  border: 1px solid rgba(22, 31, 55, 0.5);
  cursor: pointer;
  transition-property: border-color, border;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    min-width: 320px;
    max-width: 320px;
    margin: 0;
  }

  @media (min-width: 1024px) {
    min-width: 400px;
    max-width: 400px;
    height: 400px;
  }

  &:hover,
  &:focus {
    border: 1px solid rgba(243, 243, 243);
  }
`;

export const Image = styled.img`
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  border-radius: 8px;
`;

export const BtnContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background: #f3f3f3;
`;

export const BtnIcon = styled.svg`
  stroke: #161f37;
`;

export const BtnText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(20 / 16);
`;

export const ImageInput = styled.input`
  display: none;
`;

export const FlexContainer = styled.div`
  width: 100%;

  @media (min-width: 1440px) {
    min-width: 400px;
  }
`;

export const InputWraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FieldStyle = styled(Field)`
  font-size: 14px;
  letter-spacing: -0.28px;
  padding-bottom: 14px;
  margin-bottom: 30px;
  color: var(--text-btn-color);
  background-color: transparent;
  outline: none;
  border: none;
  opacity: 0.6;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);

  transition-property: border-color, opacity;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding-bottom: 18px;
    font-size: 16px;
    letter-spacing: -0.32px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }

  &:hover,
  :focus,
  :active {
    border-color: #f3f3f3;
    opacity: 1;
  }
`;

// export const Validate = styled.div`
//   height: 30px;
//   font-size: 12px;
//   letter-spacing: 0.28px;
//   color: #da1414;

//   @media (min-width: 768px) {
//     height: 36px;
//     font-size: 14px;
//   }
// `;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 34px;
  padding-bottom: 14px;
  border-bottom: 1px solid;
  border-color: rgba(243, 243, 243, 0.3);

  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    height: 40px;
    padding-bottom: 18px;
  }

  &:focus,
  &:active,
  &:hover,
  &::selection {
    outline: none;
    // border-color: #f3f3f3;
  }
`;

export const Margin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;

  @media (min-width: 768px) {
    gap: 40px;
  }
`;

export const LabelSelect = styled.label`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  letter-spacing: -0.28px;
  opacity: 0.6;

  transition-property: opacity;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.32px;
  }

  &:focus,
  &:active,
  &:hover {
    opacity: 1;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 14px;
`;

export const RadioLabel = styled.label`
  cursor: pointer;

  color: ${props => (props.checked ? '#f3f3f3' : 'rgba(243, 243, 243, 0.5)')};
`;

export const RadioButton = styled.input`
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 10px;
  border: 1.3px solid rgba(243, 243, 243, 0.5);
  box-shadow: 0 0 0 1px rgba(243, 243, 243, 0.5);
  cursor: pointer;
  margin-right: 8px;
  width: 16px;
  height: 16px;

  &::before {
    transform: scale(0, 0);
    transition: all 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
  }

  &:checked {
    box-shadow: 0 0 0 1px #f3f3f3;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #f3f3f3;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;

      transform: translate(-50%, -50%) scale(1, 1);
    }
  }
`;
