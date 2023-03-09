import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const SearchPage = lazy(() => import('./SearchPage/SearchPage'));
const MoviePage = lazy(() => import('./MoviePage/MoviePage'));
const CastPage = lazy(() => import('./CastPage/CastPage'));
const ReviewsPage = lazy(() => import('./ReviewsPage/ReviewsPage'));

export function UserRoutes() {
  return (
    <Suspense fallback={<div>Page is loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<div>Sorry, page not found!</div>} />
      </Routes>
    </Suspense>
  );
}
