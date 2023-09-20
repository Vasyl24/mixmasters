import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { GlobalStyles } from './App.styled';

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/signup" element={<WelcomePage />} />
          <Route path="/mainpage" element={<HomePage />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
