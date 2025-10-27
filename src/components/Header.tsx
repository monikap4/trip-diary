import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import style from './Header.module.scss';

export const Header = () => (
  <div className={style.headerContainer}>
    <div className={style.headerContainerLeft}>
      <Link to="/" className={style.logoWrapper}>
        <img src={logo} alt="Logo" className={style.logo} />
        <div className={style.circle} />
      </Link>

      <nav className={style.rolloutNav}>
        <Link to="/">Domů</Link>
        <Link to="/trips">Moje trasy</Link>
        <Link to="/new">Přidat trasu</Link>
        <Link to="/statistics">Statistiky</Link>
      </nav>
    </div>

    <div className={style.headerContainerRight}>
      <Link to="#" aria-label="Profil (brzy)">
        <FontAwesomeIcon icon={faUser} className={style.iconUser} />
      </Link>
    </div>
  </div>
);
