import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import addIcon from '../assets/images/plus.svg';
import style from './MobileNav.module.scss';

type NavItem = {
  to: string;
  label: string;
  iconClassName: string;
  id: string;
};

const ITEMS: NavItem[] = [
  { id: 'home', to: '/', label: 'Domů', iconClassName: style.homeIcon },
  {
    id: 'trips',
    to: '/trips',
    label: 'Moje trasy',
    iconClassName: style.mapIcon,
  },
  {
    id: 'stats',
    to: '/statistics',
    label: 'Statistiky',
    iconClassName: style.statIcon,
  },
  {
    id: 'profile',
    to: '/profile',
    label: 'Můj profil',
    iconClassName: style.userMobileIcon,
  },
];

export const MobileNav: React.FC = () => (
  <nav className={style.mobileNav} aria-label="Hlavní navigace">
    <ul className={style.list}>
      {ITEMS.slice(0, 2).map(({ id, to, iconClassName, label }) => (
        <li key={id} className={style.item}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              classnames(style.link, { [style.active]: isActive })
            }
          >
            <div
              className={classnames(style.icon, iconClassName)}
              aria-hidden="true"
            />
            <span className={style.label}>{label}</span>
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
            src={addIcon}
            alt=""
            aria-hidden="true"
            className={style.addIcon}
          />
        </NavLink>
      </li>

      {ITEMS.slice(2).map(({ id, to, iconClassName, label }) => (
        <li key={id} className={style.item}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              classnames(style.link, { [style.active]: isActive })
            }
          >
            <div
              className={classnames(style.icon, iconClassName)}
              aria-hidden="true"
            />
            <span className={style.label}>{label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
