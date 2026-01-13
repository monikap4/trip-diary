import React, { useEffect, useState } from 'react';

import { TripCarousel } from '../components/TripCarousel';
import { Button } from '../components/Button';
import { Row } from '../components/Row';
import { StatisticsSection } from '../components/Statistics/StatisticsSection';
import { Heading } from '../components/Heading';
import { fetchTrips } from '../api/tripsApi';
import { fetchStats } from '../api/statsApi';
import { buildStatistics } from '../model/statisticsSelectors';
import type { Trip } from '../model/Trip';
import type { StatsDb } from '../model/StatsDb';
import type { StatItem } from '../model/StatItem';
import plusIcon from '../assets/images/plus.svg';

export const Home: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [stats, setStats] = useState<StatsDb[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [fetchedTrips, fetchedStats] = await Promise.all([
          fetchTrips(),
          fetchStats(),
        ]);

        setTrips(fetchedTrips);
        setStats(fetchedStats);
      } catch {
        setError('Nepodařilo se načíst data.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const totalStats: StatItem[] = buildStatistics(stats);

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
      <TripCarousel trips={trips} />

      <Heading size="h2">Statistiky</Heading>
      <StatisticsSection stats={totalStats} isHomepage />
    </div>
  );
};
