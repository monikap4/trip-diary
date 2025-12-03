import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '../assets/images/home.svg';
import TripsIcon from '../assets/images/map.svg';
import AddIcon from '../assets/images/plus.svg';
import StatsIcon from '../assets/images/stat.svg';
import ProfileIcon from '../assets/images/user-mobile.svg';
import style from './MobileNav.module.scss';

type NavItem = {
  to: string;
  label: string;
  icon: string;
  id: string;
};

const ITEMS: NavItem[] = [
  { id: 'home', to: '/', label: 'Domů', icon: HomeIcon },
  { id: 'trips', to: '/trips', label: 'Moje trasy', icon: TripsIcon },
  { id: 'stats', to: '/statistics', label: 'Statistiky', icon: StatsIcon },
  { id: 'profile', to: '/profile', label: 'Můj profil', icon: ProfileIcon },
];

export const MobileNav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);

  return (
    <nav className={style.mobileNav} aria-label="Hlavní navigace">
      <ul className={style.list}>
        {ITEMS.slice(0, 2).map((it) => (
          <li key={it.id} className={style.item}>
            <Link
              to={it.to}
              className={`${style.link} ${isActive(it.to) ? style.active : ''}`}
              aria-current={isActive(it.to) ? 'page' : undefined}
            >
              <div className={style.iconWrapper}>
                <img
                  src={it.icon}
                  alt=""
                  aria-hidden="true"
                  className={style.icon}
                />
              </div>
              <span className={style.label}>{it.label}</span>
            </Link>
          </li>
        ))}

        <li className={`${style.item} ${style.centerItem}`}>
          <Link to="/new" className={style.addButton} aria-label="Přidat trasu">
            <img
              src={AddIcon}
              alt=""
              aria-hidden="true"
              className={style.addIcon}
            />
          </Link>
        </li>

        {ITEMS.slice(2).map((it) => (
          <li key={it.id} className={style.item}>
            <Link
              to={it.to}
              className={`${style.link} ${isActive(it.to) ? style.active : ''}`}
              aria-current={isActive(it.to) ? 'page' : undefined}
            >
              <img
                src={it.icon}
                alt=""
                aria-hidden="true"
                className={style.icon}
              />
              <span className={style.label}>{it.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
