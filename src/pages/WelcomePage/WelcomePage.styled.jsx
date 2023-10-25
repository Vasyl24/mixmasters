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

export const ContainerWelcome = styled.div`
  max-width: 335px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;

  @media (min-width: 768px) {
    max-width: 570px;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 100px;
  }

  @media (min-width: 1024px) {
    max-width: 585px;
    padding-left: 100px;
  }

  @media (max-width: 767px) {
    max-width: 335px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TitleStart = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: calc(32 / 28);
  text-align: center;
  color: #f3f3f3;

  @media (min-width: 768px) {
    font-size: 40px;
    text-align: left;
  }
`;

export const TextStart = styled.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  text-align: center;
  margin-top: 14px;
  max-width: 319px;
  color: #f3f3f3;

  @media (min-width: 768px) {
    font-size: 18px;
    text-align: left;
    max-width: 470px;
  }
`;

export const ListStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const BtnStart = styled(NavLink)`
  padding: 14px 40px;
  font-size: 14px;
  line-height: calc(18 / 16);
  font-weight: 600;
  background: #f3f3f3;
  color: #161f37;
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  cursor: pointer;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
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

export const BtnFinish = styled(NavLink)`
  padding: 14px 40px;
  font-size: 14px;
  line-height: calc(18 / 16);
  font-weight: 600;
  background: transparent;
  color: #f3f3f3;
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  cursor: pointer;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
  }

  &:hover {
    background: #f3f3f3;
    color: #161f37;
  }
`;
