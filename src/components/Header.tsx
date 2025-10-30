import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import style from './Header.module.scss';

export const Header = () => (
  <div className={style.headerContainer}>
    <div className={style.headerContainerLeft}>
      <Link to="/" className={style.circle}>
        <img src={logo} alt="Logo" className={style.logo} />
      </Link>

      <nav className={style.rolloutNav}>
        <Link to="/" className={style.linkHome}>
          Domů
        </Link>
        <Link to="/trips" className={style.linkTrips}>
          Moje trasy
        </Link>
        <Link to="/new" className={style.linkAddTrip}>
          Přidat trasu
        </Link>
        <Link to="/statistics" className={style.linkStatistics}>
          Statistiky
        </Link>
      </nav>
    </div>

    <div className={style.headerContainerRight}>
      <Link to="#" aria-label="Profil (brzy)">
        <FontAwesomeIcon icon={faUser} className={style.iconUser} />
      </Link>
    </div>
  </div>
);
