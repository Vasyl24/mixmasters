import { Outlet } from 'react-router-dom';
import {
  ContainerLayout,
  CircleContainer,
  GradientContainer,
} from './WelcomePageLayout.styled';

export const WelcomePageLayout = () => {
  return (
    <ContainerLayout>
      <GradientContainer />
      <CircleContainer />
      <Outlet />
    </ContainerLayout>
  );
};