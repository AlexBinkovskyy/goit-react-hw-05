import { Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage/HomePage';
import { Page404 } from '../pages/Page404/Page404';
import { MoviesPage } from '../pages/MoviesPage/MoviesPage';
import { Header } from './Header/Header';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import { MovieCast } from './MovieCast/MovieCast';
import { MovieReviews } from './MovieReviews/MovieReviews';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId/:query" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};
