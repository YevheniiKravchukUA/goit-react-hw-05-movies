import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'modules/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const SearchPage = lazy(() => import('./SearchPage/SearchPage'));
const MoviePage = lazy(() => import('./MoviePage/MoviePage'));
const CastPage = lazy(() => import('./CastPage/CastPage'));
const ReviewsPage = lazy(() => import('./ReviewsPage/ReviewsPage'));

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<div>Sorry, page not found!</div>} />
      </Route>
    </Routes>
  );
}
