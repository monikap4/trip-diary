import React, { useEffect, useState } from 'react';

import { fetchTrips } from '../api/tripsApi';
import { TripList } from '../components/TripList';
import { Heading } from '../components/Heading';
import type { Trip } from '../model/Trip';
import style from './MyTrips.module.scss';

export const MyTrips: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTrips = async () => {
      try {
        const fetchedTrips = await fetchTrips();
        setTrips(fetchedTrips);
      } catch {
        setError('Nepodařilo se načíst trasy.');
      } finally {
        setLoading(false);
      }
    };

    loadTrips();
  }, []);

  const renderContainer = (content: React.ReactNode) => (
    <div className={style.container}>
      <Heading size="h2">Moje trasy</Heading>
      {content}
    </div>
  );

  if (loading) {
    return renderContainer(<p>Načítám trasy…</p>);
  }

  if (error) {
    return renderContainer(<p>{error}</p>);
  }

  return renderContainer(<TripList trips={trips} />);
};
