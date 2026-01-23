import { useMemo } from 'react';

import type { Stats, StatItem } from '../model/Stats';
import { buildStatistics } from '../components/statistics/utils/buildStatistics';

export const useStatistics = (stats: Stats[]): StatItem[] =>
  useMemo(() => buildStatistics(stats), [stats]);
