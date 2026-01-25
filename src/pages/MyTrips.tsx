import React from 'react';

import { fetchTrips } from '../api/fetchTrips';
import { TripList } from '../components/TripList';
import { Heading } from '../components/Heading';
import type { Trip } from '../model/Trip';
import { useFetch } from '../hooks/useFetch';
import style from './MyTrips.module.scss';

export const MyTrips: React.FC = () => {
  const { data: trips, loading, error } = useFetch<Trip[]>(fetchTrips);
  const tripsForRender = trips ?? [];

  return (
    <div className={style.container}>
      <Heading size="h1">Moje Trasy</Heading>
      {loading && <p>Načítám trasy…</p>}

      {!loading && error && <p>{error}</p>}

      {!loading && !error && <TripList trips={tripsForRender} />}
    </div>
  );
};
