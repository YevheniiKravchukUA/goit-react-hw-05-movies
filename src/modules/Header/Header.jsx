import style from '../Header/Header.module.scss';
import { NavBar } from 'modules/NavBar/NavBar';

export function Header({}) {
  return (
    <header className={style.header}>
      <NavBar />
    </header>
  );
}
