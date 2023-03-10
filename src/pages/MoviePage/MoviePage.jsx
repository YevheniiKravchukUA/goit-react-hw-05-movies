import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import { feetchMovieById } from 'shared/api/fetchMovies';

import Movie from 'modules/Movie/Movie';
import Section from 'shared/components/Section/Section';

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const firstRender = useRef(true);
  const { movieId } = useParams();

  useEffect(() => {
    console.log(
      'UseEffect on MoviePage, here im do fetch after first render, when movieId changes'
    );
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
