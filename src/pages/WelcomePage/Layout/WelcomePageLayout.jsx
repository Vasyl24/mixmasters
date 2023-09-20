import { Outlet } from 'react-router-dom';
import {
  ContainerLayout,
} from './WelcomePageLayout.styled';

export const WelcomePageLayout = () => {
  return (
    <ContainerLayout>
      <Outlet />
    </ContainerLayout>
  );
};