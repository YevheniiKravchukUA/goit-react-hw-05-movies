import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'shared/api/fetchMovies';

import styles from 'pages/ReviewsPage/ReviewsPage.module.scss';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const elements = reviews.map(({ id, author_details, content }) => {
    const imagePath = author_details.avatar_path
      ? `https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
      : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
    return (
      <li key={id} className={styles.item}>
        <div className={styles.author}>
          <p className={styles.name}>
            <span className={styles.textItem}>User:</span>
            {author_details.username}
          </p>

          <img src={imagePath} alt="" className={styles.image} />
          <p className={styles.content}>{content}</p>
        </div>
      </li>
    );
  });

  useEffect(() => {
    async function getReviews() {
      try {
        const { data } = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {reviews.length > 0 && elements}
      {reviews.length === 0 && 'Sorry, reviews not found!'}
    </ul>
  );
}
