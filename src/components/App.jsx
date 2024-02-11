import { Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage/HomePage';
import { Page404 } from '../pages/Page404/Page404';
import { MoviesPage } from '../pages/MoviesPage/MoviesPage';
import { Header } from './Header/Header';

export const App = () => {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};
