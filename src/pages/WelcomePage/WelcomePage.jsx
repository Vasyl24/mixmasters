import React from 'react';
import {
  ContainerLayout,
  ContainerWelcome,
  TitleStart,
  TextStart,
  ListStart,
  BtnStart,
  BtnFinish,
} from './WelcomePage.styled';

export default function WelcomePage() {
  return (
    <ContainerLayout>
      <ContainerWelcome>
        <TitleStart>Welcome to the app!</TitleStart>
        <TextStart>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </TextStart>
        <ListStart>
          <BtnStart to="/signup">Sign Up</BtnStart>
          <BtnFinish to="/signin">Sign In</BtnFinish>
        </ListStart>
      </ContainerWelcome>
    </ContainerLayout>
  );
}
