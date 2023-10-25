import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import welcomesm2x from '../../assets/welcome-mob@2x.jpg';
import welcomesm1x from '../../assets/welcome-mob.jpg';
import welcomemd1x from '../../assets/welcome-tabl.jpg';
import welcomemd2x from '../../assets/welcome-tabl@2x.jpg';
import welcome1x from '../../assets/welcome-desk.jpg';
import welcome2x from '../../assets/welcome-desk@2x.jpg';

export const ContainerLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-size: contain;
  justify-content: center;
  align-items: center;
  background-position: right;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to right,
      rgba(6, 6, 9, 1),
      rgba(10, 10, 17, 0)
    ),
    url(${welcomemd1x});
  background-color: #0a0a11;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        rgba(6, 6, 9, 1),
        rgba(10, 10, 17, 0)
      ),
      url(${welcomemd2x});
    justify-content: left;
  }

  @media (max-width: 767.98px) {
    justify-content: left;
    background-image: linear-gradient(
        to right,
        rgba(6, 6, 9, 1),
        rgba(10, 10, 17, 0)
      ),
      url(${welcomesm1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(6, 6, 9, 1),
          rgba(10, 10, 17, 0)
        ),
        url(${welcomesm2x});
    }
  }

  @media (min-width: 1024px) {
    justify-content: left;
    background-image: linear-gradient(
        to right,
        rgba(6, 6, 9, 1),
        rgba(10, 10, 17, 0)
      ),
      url(${welcome1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(6, 6, 9, 1),
          rgba(10, 10, 17, 0)
        ),
        url(${welcome2x});
    }
  }
`;

export const LoginContainer = styled.form`
  width: 335px;
  height: auto;
  margin-left: 20px;
  margin-right: 20px;
  z-index: 1000;

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
  border: ${props => props.border || '1px solid rgba(243, 243, 243, 0.2)'};
  background-color: transparent;
  padding-left: 24px;
  margin-bottom: 14px;
  color: #f3f3f3;

  &::placeholder {
    color: #f3f3f3;
    opacity: 50%;
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
    border-color: rgba(243, 243, 243, 0.5);
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 1px;
  position: relative;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: -10px;
  transform: translateY(-50%);

  color: #da1414;
  font-size: 12px;
`;

export const ValidContainer = styled.div`
  margin-top: 1px;
  position: relative;
`;

export const ValidMessage = styled.div`
  position: absolute;
  top: -10px;
  transform: translateY(-50%);

  color: #3cbc81;
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

  &focus,
  &:hover {
    background: #161f37;
    color: #f3f3f3;
  }

  &:disabled {
    pointer-events: none;
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
  color: #f3f3f3;
  cursor: pointer;

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

export const IconDone = styled.svg`
  width: 24px;
  height: 24px;

  position: absolute;
  right: 20px;
  top: 28px;
  transform: translateY(-50%);
`;

export const IconError = styled.svg`
  width: 24px;
  height: 24px;

  position: absolute;
  right: 20px;
  top: 28px;
  transform: translateY(-50%);
`;
