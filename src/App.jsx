import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage';
import DrinkPage from 'pages/DrinkPage/DrinkPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { WelcomePageLayout } from './pages/WelcomePage/Layout/WelcomePageLayout';

function App() {
  return (
    <>
      {/* <GlobalStyles /> */}

      <Routes>
        <Route element={<WelcomePageLayout />}>
          <Route path="/welcome" index element={<WelcomePage />} />
        </Route>

        <Route path="/" element={<SharedLayout />}>
          <Route path="home" element={<HomePage />} />
          {/* <Route path="/drinks" element={<DrinksPage />} /> */}
          <Route path="/drink/:drinkId" element={<DrinkPage />} />
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
