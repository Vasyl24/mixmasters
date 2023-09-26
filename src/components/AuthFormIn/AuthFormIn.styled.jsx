import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LoginContainer = styled.form`
  position: relative;
  width: 335px;
  height: auto;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 768px) {
    width: 400px;
    margin-left: 64px;
  }

  @media (min-width: 1024px) {
    margin-left: 100px;
  }
`;

export const Title = styled.h1`
  color: #f3f3f3;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.15;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const InputBlock = styled.div`
  position: relative;
  margin-top: 28px;
  margin-bottom: 14px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  padding-left: 24px;
  margin-bottom: 14px;

  &::placeholder {
    color: #f3f3f3;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  }

  @media (min-width: 768px) {
    height: 56px;
    font-size: 17px;
    line-height: 1.5;

    &::placeholder {
      font-size: 17px;
    }
  }

  @media (min-width: 1024px) {
    padding-left: 22px;
  }

  &:focus,
  &:hover {
    outline: none;
    color: #f3f3f3;
    border-color: rgba(243, 243, 243, 0.5);
    background-color: transparent;
  }
`;

export const ErrorContainer = styled.div`
  position: absolute;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;

export const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 54px;

  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: #f3f3f3;

  color: #161f37;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.1;

  outline: none;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #434d67;
    color: #f3f3f3;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3;
  text-decoration-line: underline;
  padding-top: 14px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const IconPasswordHidden = styled.svg`
  width: 24px;
  height: 24px;

  position: absolute;
  right: 20px;
  top: 96px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const IconPasswordShow = styled.svg`
  width: 24px;
  height: 24px;

  position: absolute;
  right: 20px;
  top: 96px;
  transform: translateY(-50%);
  cursor: pointer;
`;
