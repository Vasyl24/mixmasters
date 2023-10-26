import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Background from 'components/SharedLayout/Background/Background';
import { Wrap, Main, WelcomeMain } from './SharedLayout.styled';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';
import { useAuth } from '../../useAuth';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Background>
      <Wrap>
        {isLoggedIn ? (
          <>
            <Suspense fallback={<Loader />}>
              <Header />
              <Main>
                <Outlet />
              </Main>
              <Footer />
            </Suspense>
          </>
        ) : (
          <WelcomeMain>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </WelcomeMain>
        )}
      </Wrap>
    </Background>
  );
};

export default SharedLayout;
