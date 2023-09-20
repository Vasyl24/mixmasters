import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import  Background from 'components/SharedLayout/Background/Background';
import { Header } from 'components/Header/Header';
import {Footer} from 'components/Footer/Footer'

const SharedLayout = () => {
  return (
    <>
      <Background>
       <Header />
        <Suspense fallback={null}>
         <Outlet />
        </Suspense>
        <Footer />
      </Background>
    </>
  );
};

export default SharedLayout;
