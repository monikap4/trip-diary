import React, { useEffect, useState } from 'react';

import { fetchStats } from '../api/statsApi';
import { Heading } from '../components/Heading';
import { buildStatistics } from '../model/statisticsSelectors';
import { StatisticsSection } from '../components/Statistics/StatisticsSection';
import type { StatItem } from '../model/StatItem';
import type { StatsDb } from '../model/StatsDb';
import style from './TripStatistics.module.scss';

export const TripStatistics: React.FC = () => {
  const [stats, setStats] = useState<StatsDb[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const fetchedStats = await fetchStats();
        setStats(fetchedStats);
      } catch {
        setError('Nepodařilo se načíst statistiky.');
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  const totalStats: StatItem[] = buildStatistics(stats);

  const renderContainer = (content: React.ReactNode) => (
    <div className={style.container}>
      <Heading size="h2">Statistiky</Heading>
      {content}
    </div>
  );

  if (loading) {
    return renderContainer(<p>Načítám statistiky…</p>);
  }

  if (error) {
    return renderContainer(<p>{error}</p>);
  }

  return renderContainer(<StatisticsSection stats={totalStats} />);
};
