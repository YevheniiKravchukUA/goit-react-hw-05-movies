import { Routes, Route } from 'react-router-dom';
import { CastPage } from './CastPage/CastPage';

import { HomePage } from './HomePage/HomePage';
import { MoviePage } from './MoviePage/MoviePage';
import { ReviewsPage } from './ReviewsPage/ReviewsPage';
import { SearchPage } from './SearchPage/SearchPage';

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<SearchPage />} />
      <Route path="/movies/:movieId" element={<MoviePage />}>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Route>
      <Route path="*" element={<div>Sorry, page not found!</div>} />
    </Routes>
  );
}
