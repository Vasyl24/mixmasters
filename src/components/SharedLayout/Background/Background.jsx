import React from 'react';
import {ContainerLayout, GradientContainer, CircleContainer } from './Background.styled'

const Background = ({ children }) => {
    return (
    <>
        <ContainerLayout />
        <GradientContainer />
        <CircleContainer />
        {/* <GradienFooter /> */}       
    </>
  );
};

export default Background;
