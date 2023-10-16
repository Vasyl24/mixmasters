import { Field } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const RecipeText = styled.h3`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: #f3f3f3;
  line-height: calc(32 / 28);

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
`;

export const TextareaStyle = styled(Field)`
  width: 100%;
  height: 184px;
  padding: 16px;
  margin-bottom: 20px;

  color: var(--text-color);
  background-color: transparent;
  outline: none;
  border: ${props => props.border || '1px solid var(--list-text-color)'};
  border-radius: 14px;
  opacity: 0.8;
  font-size: 14px;
  line-height: calc(18 / 14);
  resize: none;

  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    margin-bottom: 20px;
    width: 480px;
    padding: 14px 24px;
    font-size: 17px;
    line-height: calc(26 / 17);
    border-radius: 20px;
  }

  &:hover,
  :focus {
    border-color: var(--text-color);
  }
`;
export const Validate = styled.span`
  position: absolute;
  top: 14px;
  right: 24px;
  height: 20px;
  font-size: 12px;
  letter-spacing: 0.28px;
  color: #da1414;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const TextareaContainer = styled.div`
  position: relative;
  width: 480px;
`;
