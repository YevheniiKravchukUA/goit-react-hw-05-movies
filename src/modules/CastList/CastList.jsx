import PropTypes from 'prop-types';

import styles from 'modules/CastList/CastList.module.scss';

export function CastList({ items = [] }) {
  const elements = items.map(({ cast_id, profile_path, character, name }) => {
    const imagePath = profile_path
      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
      : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
    return (
      <li key={cast_id} className={styles.item}>
        <img src={imagePath} alt={character} className={styles.image} />
        <div>
          <p className={styles.character}>{character}</p>
          <p className={styles.name}>{name}</p>
        </div>
      </li>
    );
  });

  return <ul className={styles.list}>{elements}</ul>;
}

CastList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number,
      profile_path: PropTypes.string,
      character: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
