import { useEffect, useState } from 'react';

import { fetchMostPopularMovies } from 'shared/api/fetchMovies';

import { Section } from 'shared/components/Section/Section';
import { MoviesList } from 'shared/components/MoviesList/MoviesList';

export function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoad(true);
        const { data } = await fetchMostPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoad(false);
      }
    }

    getMovies();
  }, []);
  return (
    <Section title="Most popular movies">
      {isLoad && <p>Please wait, it`s loading</p>}
      <MoviesList items={movies} />
    </Section>
  );
}
