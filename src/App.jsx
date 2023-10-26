import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'useAuth';
import { refreshUser } from './redux/auth/authOperations';
import Loader from './components/Loader/Loader';

const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
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
  const { isLoading, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {isLoggedIn ? (
            <Route
              index
              element={
                <RestrictedRoute redirectTo="/home" component={<HomePage />} />
              }
            />
          ) : (
            <Route
              index
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<WelcomePage />}
                />
              }
            />
          )}
          <Route
            path="/welcome"
            element={
              <RestrictedRoute redirectTo="/home" component={<WelcomePage />} />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/home" component={<SignUpPage />} />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/home" component={<SignInPage />} />
            }
          />
          <Route
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
          />
          <Route
            path="/add"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<AddDrinkPage />}
              />
            }
          />
          <Route
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
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
