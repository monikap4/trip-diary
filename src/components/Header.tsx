import { Link } from 'react-router-dom';

import { Row } from './Row';
import logo from '../assets/images/logo.svg';
import iconUser from '../assets/images/user-regular.svg';
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

    <Row itemsCenter>
      <Link to="#" aria-label="Profil (brzy)">
        <img src={iconUser} alt="Přihlásit se" className={style.iconUser} />
      </Link>
    </Row>
  </div>
);
