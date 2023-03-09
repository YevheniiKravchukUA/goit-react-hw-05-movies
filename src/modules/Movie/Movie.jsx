import PropTypes from 'prop-types';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import styles from 'modules/Movie/Movie.module.scss';

export function Movie({ data = {} }) {
  const {
    poster_path,
    title = 'Sorry, info not found',
    overview,
    tagline,
    genres,
    budget,
  } = data;
  const imagePath = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';

  const location = useLocation();
  const prevPage = location.state?.from || '/';
  const navigate = useNavigate();

  const genresElements = genres?.map(({ id, name }) => {
    return (
      <li key={id} className={styles.genre}>
        {name},
      </li>
    );
  });

  return (
    <>
      <button
        className={styles.back}
        onClick={() => {
          navigate(prevPage);
        }}
      >
        Go back
      </button>
      <div className={styles.wrapper}>
        <img src={imagePath} alt={`${title} poster`} className={styles.image} />
        <div className={styles.infoWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.tag}>{tagline}</span>
          <p className={styles.text}>
            <span className={styles.textItem}>About:</span>
            {overview}
          </p>
          <h3 className={styles.subtitle}>Genres:</h3>
          <ul className={styles.genresList}>{genresElements}</ul>
          <h3 className={styles.subtitle}>Budget:</h3>
          <p>{budget}$</p>
          <h3 className={styles.subtitle}>Get more info:</h3>
          <ul className={styles.moreInfoList}>
            <Link
              to={'cast'}
              state={{ from: prevPage }}
              className={styles.moreInfo}
            >
              Cast
            </Link>
            <Link
              to={'reviews'}
              state={{ from: prevPage }}
              className={styles.moreInfo}
            >
              Reviews
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </>
  );
}

Movie.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    tagline: PropTypes.string,
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};
