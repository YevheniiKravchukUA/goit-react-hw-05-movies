import { CastList } from 'modules/CastList/CastList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from 'shared/api/fetchMovies';

export function CastPage() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const { data } = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCast();
  }, [movieId]);

  return <CastList items={cast} />;
}
