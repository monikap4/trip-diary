import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import HomeIcon from '../assets/images/home.svg';
import TripsIcon from '../assets/images/map.svg';
import AddIcon from '../assets/images/plus.svg';
import StatsIcon from '../assets/images/stat.svg';
import ProfileIcon from '../assets/images/user-mobile.svg';
import style from './MobileNav.module.scss';

type NavItem = {
  to: string;
  label: string;
  icon: React.FC<{ className?: string }>;
  id: string;
};

const ITEMS: NavItem[] = [
  { id: 'home', to: '/', label: 'Domů', icon: HomeIcon },
  { id: 'trips', to: '/trips', label: 'Moje trasy', icon: TripsIcon },
  { id: 'stats', to: '/statistics', label: 'Statistiky', icon: StatsIcon },
  { id: 'profile', to: '/profile', label: 'Můj profil', icon: ProfileIcon },
];

export const MobileNav: React.FC = () => (
  <nav className={style.mobileNav} aria-label="Hlavní navigace">
    <ul className={style.list}>
      {ITEMS.slice(0, 2).map((it) => (
        <li key={it.id} className={style.item}>
          <NavLink
            to={it.to}
            className={({ isActive }) =>
              classnames(style.link, { [style.active]: isActive })
            }
          >
            <div className={style.iconWrapper}>
              <it.icon className={style.icon} aria-hidden="true" />
            </div>
            <span className={style.label}>{it.label}</span>
          </NavLink>
        </li>
      ))}

      <li className={`${style.item} ${style.centerItem}`}>
        <NavLink
          to="/new"
          className={style.addButton}
          aria-label="Přidat trasu"
        >
          <img
            src={AddIcon}
            alt=""
            aria-hidden="true"
            className={style.addIcon}
          />
        </NavLink>
      </li>

      {ITEMS.slice(2).map((it) => (
        <li key={it.id} className={style.item}>
          <NavLink
            to={it.to}
            className={({ isActive }) =>
              classnames(style.link, { [style.active]: isActive })
            }
          >
            <img
              src={it.icon}
              alt=""
              aria-hidden="true"
              className={style.icon}
            />
            <span className={style.label}>{it.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
