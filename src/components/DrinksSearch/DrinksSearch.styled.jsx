import styled from 'styled-components';

export const StyledFilterContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 60px;
    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
  }

  & > *:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const StyledTextInput = styled.input`
  color: #f3f3f3;
  font-size: 17px;
  font-weight: 400;
  line-height: 2.6;

  width: 100%;
  height: 54px;

  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  opacity: 0.8;
  background-color: inherit;

  margin-bottom: 14px;

  padding: 14px 24px;

  &::placeholder {
    color: #f3f3f3;
    text-align: left;

    font-size: 17px;

    font-weight: 400;
    line-height: 2.6;
  }
  
  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
  }
`;

export const StyledSelectInput = styled.select`
  width: 100%;
  height: 54px;

  border-radius: 200px;
  background: #161f37;

  color: #f3f3f3;
  text-align: left;

  font-size: 17px;

  font-weight: 400;
  line-height: 2.6;

  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  opacity: 0.8;
  padding: 14px 24px;

  @media screen and (min-width: 768px) {
    width: 199px;
    height: 56px;
  }
`;
