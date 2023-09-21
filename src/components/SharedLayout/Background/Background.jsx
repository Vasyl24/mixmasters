import React from 'react';
import {
  ContainerLayout,
  GradientContainer,
  CircleContainer,
} from './Background.styled';

const Background = ({ children }) => {
  return (
    <>
      {children}
      <ContainerLayout />
      <GradientContainer />
      <CircleContainer />
      {/* <GradienFooter /> */}
    </>
  );
};

export default Background;
