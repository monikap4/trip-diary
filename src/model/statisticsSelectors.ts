import type { StatsDb } from './StatsDb';
import type { StatItem } from './StatItem';

export const buildStatistics = (stats: StatsDb[]): StatItem[] => {
  const totalTrips = stats.length;

  const distances = stats
    .map((s) => s.distance)
    .filter((d): d is number => d !== null);

  const elevations = stats
    .map((s) => s.elevation)
    .filter((e): e is number => e !== null);

  const summits = stats
    .map((s) => s.summits)
    .filter((s): s is number => s !== null);

  const highestPoints = stats
    .map((s) => s.highestPoint)
    .filter((h): h is number => h !== null);

  const totalDistance = distances.reduce((sum, d) => sum + d, 0);
  const totalElevation = elevations.reduce((sum, e) => sum + e, 0);
  const totalSummits = summits.reduce((sum, s) => sum + s, 0);

  const averageDistance =
    distances.length > 0 ? totalDistance / distances.length : 0;

  const highestPoint =
    highestPoints.length > 0 ? Math.max(...highestPoints) : 0;

  const largestRoute = distances.length > 0 ? Math.max(...distances) : 0;

  return [
    {
      id: 'trips',
      label: 'Počet tras',
      value: totalTrips,
    },
    {
      id: 'distance',
      label: 'Celková vzdálenost',
      value: Number(totalDistance.toFixed(1)),
      suffix: ' km',
    },
    {
      id: 'elevation',
      label: 'Celkové stoupání',
      value: Math.round(totalElevation),
      suffix: ' m',
    },
    {
      id: 'average',
      label: 'Průměrná délka',
      value: Number(averageDistance.toFixed(1)),
      suffix: ' km',
    },
    {
      id: 'summits',
      label: 'Počet vrcholů',
      value: Number(totalSummits),
    },
    {
      id: 'highest',
      label: 'Nejvyšší bod',
      value: Number(highestPoint.toFixed(1)),
      suffix: ' m',
    },
    {
      id: 'longest',
      label: 'Nejdelší trasa',
      value: Number(largestRoute.toFixed(1)),
      suffix: ' km',
    },
  ];
};
