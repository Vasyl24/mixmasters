import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { GlobalStyles } from './App.styled';
import { WelcomePageLayout } from './pages/WelcomePage/Layout/WelcomePageLayout';

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/welcome" element={<WelcomePageLayout />}>
          <Route index element={<WelcomePage />} />
        </Route>

        <Route path="/" element={<SharedLayout />}>
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/drinks" element={<DrinksPage />} /> */}
          {/* <Route path="/add" element={<AddDrinkPage />} /> */}
          {/* <Route path="/my" element={<MyDrinksPage />} /> */}
          {/* <Route path="/favorites" element={<FavoriteDrinkPage />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
