import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import styles from 'shared/components/MoviesList/MoviesList.module.scss';

export function MoviesList({ items = [] }) {
  const location = useLocation();

  const elements = items.map(
    ({ id, original_title, poster_path, release_date, vote_average }) => {
      const imagePath = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
      return (
        <Link
          to={`/movies/${id}`}
          key={id}
          state={{ from: location }}
          className={styles.link}
        >
          <li className={styles.item}>
            <img
              src={imagePath}
              alt={original_title}
              className={styles.image}
            />
            <div className={styles.wrapper}>
              <h3 className={styles.title}>{original_title}</h3>
              <div className={styles.infoWrapper}>
                <span className={styles.info}>{release_date}</span>
                <span className={styles.info}>
                  Vote: {vote_average.toFixed(1)}
                </span>
              </div>
            </div>
          </li>
        </Link>
      );
    }
  );

  return <ul className={styles.list}>{elements}</ul>;
}

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_title: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
    })
  ).isRequired,
};
