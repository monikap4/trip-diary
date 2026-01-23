import React from 'react';

import { TripCarousel } from '../components/TripCarousel';
import { Button } from '../components/Button';
import { Row } from '../components/Row';
import { StatisticsSection } from '../components/statistics_tmp/StatisticsSection';
import { Heading } from '../components/Heading';
import { fetchTrips } from '../api/fetchTrips';
import { useFetch } from '../hooks/useFetch';
import { fetchStats } from '../api/fetchStats';
import { useStatistics } from '../hooks/useStatistics';
import type { Trip } from '../model/Trip';
import type { Stats } from '../model/Stats';
import plusIcon from '../assets/images/plus.svg';

export const Home: React.FC = () => {
  const {
    data: trips,
    loading: tripsLoading,
    error: tripsError,
  } = useFetch<Trip[]>(fetchTrips);

  const {
    data: stats,
    loading: statsLoading,
    error: statsError,
  } = useFetch<Stats[]>(fetchStats);

  const loading = tripsLoading || statsLoading;
  const error = tripsError || statsError;

  const tripsForRender = trips ?? [];
  const totalStats = useStatistics(stats ?? []);

  if (loading) {
    return <p>Načítám data…</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Row itemsCenter>
        <Button to="/new" label="Přidat trasu" iconSrc={plusIcon} />
      </Row>

      <Heading size="h2">Moje trasy</Heading>
      <TripCarousel trips={tripsForRender} />

      <Heading size="h2">Statistiky</Heading>
      <StatisticsSection stats={totalStats} isHomepage />
    </div>
  );
};
