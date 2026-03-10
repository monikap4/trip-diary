import React from 'react';
import { Link } from 'react-router-dom';

import type { Trip } from '../model/Trip';
import style from './TripCardVertical.module.scss';

export type TripCardProps = Pick<Trip, 'id' | 'image' | 'name' | 'location'>;

export const TripCardVertical: React.FC<TripCardProps> = ({
  id,
  image,
  name,
  location,
}) => (
  <li className={style.item}>
    <Link to={`/trip/${id}`} className={style.card}>
      <img src={image} alt={name} className={style.image} />

      <div className={style.content}>
        <h3 className={style.title}>{name}</h3>
        {location && <p className={style.location}>{location}</p>}
      </div>
    </Link>
  </li>
);
