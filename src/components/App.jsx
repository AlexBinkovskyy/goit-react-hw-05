import { Route, Routes } from 'react-router';
import { Suspense, lazy } from 'react';

import { Header } from './Header/Header';
import { Page404 } from '../pages/Page404/Page404';
import { MovieReviews } from './MovieReviews/MovieReviews';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </div>
  );
};
