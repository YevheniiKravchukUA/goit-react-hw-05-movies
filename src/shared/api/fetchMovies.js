import axios from 'axios';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '66226a1e6e6df674891504524d512221',
  },
});

export async function fetchMostPopularMovies() {
  const response = await moviesApi.get('/trending/movie/day');
  return response;
}

export async function fetchQueryMovies(movieName, page) {
  const response = await moviesApi.get('/search/movie', {
    params: {
      query: movieName,
      page,
    },
  });

  return response;
}

export async function feetchMovieById(id) {
  const response = await moviesApi.get(`/movie/${id}`);
  return response;
}

export async function fetchMovieCast(id) {
  const response = await moviesApi.get(`/movie/${id}/credits`);
  return response;
}

export async function fetchMovieReviews(id) {
  const response = await moviesApi.get(`/movie/${id}/reviews`);
  return response;
}
