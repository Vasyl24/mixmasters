import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerWelcome = styled.div`
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
  }
`;

export const TitleStart = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: calc(32 / 28);
  text-align: center;

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

  @media (min-width: 768px) {
    font-size: 18px;
    text-align: left;
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
  transition: background $transitionDuration $transitionTimingFunction;

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
  }

  &:hover {
    background: transparent;
    color: #f3f3f3;
  }
`;

export default function WelcomePage() {
  return (
    <ContainerWelcome>
      <TitleStart>Welcome to the app!</TitleStart>
      <TextStart>
        This app offers more than just a collection of recipes - it is designed to be your very
        own digital cookbook. You can easily save and retrieve your own recipes at any time.
      </TextStart>
      <ListStart>
        <BtnStart to="signup">Sign Up</BtnStart>
        <BtnStart to="signin">Sign In</BtnStart>
      </ListStart>
    </ContainerWelcome>
  );
}
