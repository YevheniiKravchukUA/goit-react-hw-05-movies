import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchQueryMovies } from 'shared/api/fetchMovies';

import SearchForm from 'modules/QueryMovies/SearchForm/SearchForm';
import MoviesList from 'shared/components/MoviesList/MoviesList';
import LoadMore from './LoadMore/LoadMore';

export default function QueryMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');

  useEffect(() => {
    async function getMovies() {
      try {
        const { data } = await fetchQueryMovies(search, page);
        setMovies([...data.results]);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, [page, search]);

  function queryMovies(query) {
    if (query === search) {
      return;
    }
    setSearchParams({ query });
    setMovies([]);
  }

  function loadMore() {
    setPage(ps => ps + 1);
  }

  return (
    <>
      <SearchForm onFormSubmit={queryMovies} />
      <MoviesList items={movies} />
      {movies.length > 0 && <LoadMore onClick={loadMore} />}
    </>
  );
}
