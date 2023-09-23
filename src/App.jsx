import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { WelcomePageLayout } from './pages/WelcomePage/Layout/WelcomePageLayout';

function App() {
  return (
    <>
      {/* <GlobalStyles /> */}

      <Routes>
        <Route element={<WelcomePageLayout />}>
          <Route path="/welcome" index element={<WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
      </Route>
      
        <Route path="/" element={<SharedLayout />}>
          <Route path="home" element={<HomePage />} />
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
