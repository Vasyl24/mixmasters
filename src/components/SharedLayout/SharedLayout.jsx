import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Background from 'components/SharedLayout/Background/Background';
import { Wrap, Main } from './SharedLayout.styled';
import Footer from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <Background>
      <Wrap>
        <Header />
        <Main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Main>
        <Footer />
      </Wrap>
    </Background>
  );
};

export default SharedLayout;
