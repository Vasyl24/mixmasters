import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import {
  ContainerLayout,
  CircleContainer,
  GradientContainer,
} from './WelcomePageLayout.styled';

const WelcomePageLayout = () => {
  return (
    <ContainerLayout>
      <GradientContainer />
      <CircleContainer />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </ContainerLayout>
  );
};

export default WelcomePageLayout;
