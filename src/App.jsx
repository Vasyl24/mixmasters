import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'useAuth';

import { refreshUser } from './redux/auth/authOperations';

const WelcomePageLayout = lazy(() =>
  import('./pages/WelcomePage/Layout/WelcomePageLayout')
);
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
// const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const SharedLayout = lazy(() =>
  import('./components/SharedLayout/SharedLayout')
);
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MyDrinksPage = lazy(() => import('./pages/MyDrinksPage/MyDrinksPage'));
const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));
const DrinkPage = lazy(() => import('./pages/DrinkPage/DrinkPage'));
const FavoriteDrinkPage = lazy(() =>
  import('./pages/FavoriteDrinksPage/FavoriteDrinksPage')
);
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<WelcomePageLayout />}>
          <Route index path="/welcome" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/*<Route path="/signin" element={<SignInPage />}></Route> */}

          {/* <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/home" component={<SignUpPage />} />
            }
          /> */}
          {/* <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/home" component={<SignInPage />} />
            }
          /> */}
        </Route>

        {/* <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/welcome" component={<SharedLayout />} />
          }
        > */}
        <Route path="/" element={<SharedLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/drinks/:drinkId" element={<DrinkPage />} />
          {/* <Route path="/add" element={<AddDrinkPage />} /> */}
          <Route path="/my" element={<MyDrinksPage />} />
          <Route path="/favorite" element={<FavoriteDrinkPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />

          {/* <Route
            path="/home"
            element={
              <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
            }
          />
          <Route
            path="/drinks"
            element={
              <PrivateRoute redirectTo="/welcome" component={<DrinksPage />} />
            }
          />
          <Route
            path="/drinks/:drinkId"
            element={
              <PrivateRoute redirectTo="/welcome" component={<DrinkPage />} />
            }
          /> */}
          {/* <Route
            path="/add"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<AddDrinkPage />}
              />
            }
          /> */}
          {/* <Route
            path="/my"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<MyDrinksPage />}
              />
            }
          />
          <Route
            path="/favorite"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<FavoriteDrinkPage />}
              />
            }
          /> */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
