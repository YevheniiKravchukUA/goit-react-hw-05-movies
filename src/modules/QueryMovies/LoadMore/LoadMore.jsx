import PropTypes from 'prop-types';

import styles from 'modules/QueryMovies/LoadMore/LoadMore.module.scss';

export default function LoadMore({ onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
}

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
