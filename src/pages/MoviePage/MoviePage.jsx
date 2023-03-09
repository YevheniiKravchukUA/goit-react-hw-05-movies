import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import { feetchMovieById } from 'shared/api/fetchMovies';

import { Movie } from 'modules/Movie/Movie';
import { Section } from 'shared/components/Section/Section';

export function MoviePage() {
  const [movie, setMovie] = useState({});
  const firstRender = useRef(true);
  const { movieId } = useParams();

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    async function fetchMovie() {
      try {
        const { data } = await feetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }

    if (movieId) {
      fetchMovie();
    }
  }, [movieId]);

  return (
    <Section>
      <Movie data={movie} />
    </Section>
  );
}
