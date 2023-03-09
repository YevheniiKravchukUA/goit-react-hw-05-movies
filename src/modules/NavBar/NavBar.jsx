import { NavLink } from 'react-router-dom';

import style from 'modules/NavBar/NavBar.module.scss';

export function NavBar() {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <NavLink to="/" className={style.link}>
          Home
        </NavLink>
      </li>
      <li className={style.item}>
        <NavLink to="/movies" className={style.link}>
          Search
        </NavLink>
      </li>
    </ul>
  );
}
