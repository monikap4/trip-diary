import React from 'react';

import { fetchStats } from '../api/fetchStats';
import { Heading } from '../components/Heading';
import { StatisticsSection } from '../components/statistics/StatisticsSection';
import { useFetch } from '../hooks/useFetch';
import { useStatistics } from '../hooks/useStatistics';
import type { Stats } from '../model/Stats';
import style from './TripStatistics.module.scss';

export const TripStatistics: React.FC = () => {
  const { data: stats, loading, error } = useFetch<Stats[]>(fetchStats);

  const totalStats = useStatistics(stats ?? []);

  return (
    <div className={style.container}>
      <Heading size="h1">Statistiky</Heading>

      {loading && <p>Načítám statistiky…</p>}

      {!loading && error && <p>{error}</p>}

      {!loading && !error && <StatisticsSection stats={totalStats} />}
    </div>
  );
};
