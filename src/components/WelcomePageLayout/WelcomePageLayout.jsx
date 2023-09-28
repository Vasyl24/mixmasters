import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import { CircleContainer, GradientContainer } from './WelcomePageLayout.styled';
import Loader from 'components/Loader/Loader';

const WelcomePageLayout = () => {
  return (
    <>
      <GradientContainer />
      <CircleContainer />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default WelcomePageLayout;
