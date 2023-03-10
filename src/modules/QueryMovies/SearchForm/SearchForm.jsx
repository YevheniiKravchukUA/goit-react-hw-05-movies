import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from 'modules/QueryMovies/SearchForm/SearchForm.module.scss';

export default function SearchForm({ onFormSubmit }) {
  const [value, setValue] = useState('');

  function onSubmit(e) {
    e.preventDefault();

    if (value.trim() !== '') {
      onFormSubmit(value);
      setValue('');
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label}>
        <span className={styles.text}>Find movie: </span>
        <input
          className={styles.input}
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
          type="text"
        />
      </label>
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
