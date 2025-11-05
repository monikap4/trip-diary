import { Link } from 'react-router-dom';

import { Row } from './Row';
import logo from '../assets/images/logo.svg';
import iconUser from '../assets/images/user-regular.svg';
import style from './Header.module.scss';

export const Header = () => (
  <header className={style.headerContainer}>
    <div className={style.headerContainerLeft}>
      <Link to="/" className={style.circle}>
        <img src={logo} alt="Logo" className={style.logo} />
      </Link>

      <nav className={style.rolloutNav}>
        <ul className={style.navList}>
          <li className={style.liHome}>
            <Link to="/" className={style.linkHome}>
              Domů
            </Link>
          </li>
          <li className={style.liTrips}>
            <Link to="/trips" className={style.linkTrips}>
              Moje trasy
            </Link>
          </li>
          <li className={style.liAddTrip}>
            <Link to="/new" className={style.linkAddTrip}>
              Přidat trasu
            </Link>
          </li>
          <li className={style.liStatistics}>
            <Link to="/statistics" className={style.linkStatistics}>
              Statistiky
            </Link>
          </li>
        </ul>
      </nav>
    </div>

    <Row itemsCenter>
      <Link to="#" aria-label="Profil (brzy)">
        <img src={iconUser} alt="Přihlásit se" className={style.iconUser} />
      </Link>
    </Row>
  </header>
);
