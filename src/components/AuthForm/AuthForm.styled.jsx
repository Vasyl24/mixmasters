// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const RegistrationContainer = styled.form`
  max-width: 335px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;

  @media (min-width: 768px) {
    max-width: 470px;
    padding: 0;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    max-width: 485px;
    padding-left: 100px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: calc(32 / 28);
  text-align: center;

  @media (min-width: 768px) {
    font-size: 40px;
    text-align: left;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &::placeholder {
    color: #999;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &::placeholder {
    color: #999;
  }
`;

export const IconСalendar = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Plaseholder = styled.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  text-align: center;
  margin-top: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
    text-align: left;
  }
`;

export const StyledBtn = styled.button`
  padding: 14px 40px;
  font-size: 14px;
  line-height: calc(18 / 16);
  font-weight: 600;
  background: #f3f3f3;
  color: #161f37;
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  cursor: pointer;
  transition: backgroundColor 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
  }

  &:hover {
    background: transparent;
    color: #f3f3f3;
  }
`;
