import React from 'react';

import type { Trip } from '../model/Trip';
import style from './TripCardVertical.module.scss';

export type TripCardProps = Pick<Trip, 'image' | 'name' | 'location'>;

export const TripCardVertical: React.FC<TripCardProps> = ({
  image,
  name,
  location,
}) => (
  <li className={style.card}>
    <img src={image} alt={name} className={style.image} />
    <div className={style.content}>
      <h3 className={style.title}>{name}</h3>
      <p className={style.location}>{location}</p>
    </div>
  </li>
);
