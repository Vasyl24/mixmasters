import React from "react";
import { NavLink } from "react-router-dom";
import {
  ContainerWelcome,
  TitleStart,
  TextStart,
  ListStart,
  BtnStart,
} from "./WelcomePage.module";

export default function WelcomePage() {
  return (
    <ContainerWelcome>
      <TitleStart>Welcome to the app!</TitleStart>
      <TextStart>
        This app offers more than just a collection of recipes - it is designed to be your very
        own digital cookbook. You can easily save and retrieve your own recipes at any time.
      </TextStart>
      <ListStart>
        <NavLink to="signup" className={BtnStart}>
          Sign Up
        </NavLink>
        <NavLink to="signin" className={BtnStart}>
          Sign In
        </NavLink>
      </ListStart>
    </ContainerWelcome>
  );
}
