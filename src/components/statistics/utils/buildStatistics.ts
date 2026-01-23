import type { Stats, StatItem } from '../../../model/Stats';
import { reduceByKeyNotNull } from './reduceByKeyNotNull';

export const buildStatistics = (statistics: Stats[]): StatItem[] => {
  const totalTrips = statistics.length;

  const distances = reduceByKeyNotNull(statistics, 'distance');
  const elevations = reduceByKeyNotNull(statistics, 'elevation');
  const summitsCounts = reduceByKeyNotNull(statistics, 'summits');
  const highestPoints = reduceByKeyNotNull(statistics, 'highestPoint');

  const totalDistance = distances.reduce(
    (accumulatedDistance, distance) => accumulatedDistance + distance,
    0,
  );

  const totalElevation = elevations.reduce(
    (accumulatedElevation, elevation) => accumulatedElevation + elevation,
    0,
  );

  const totalSummits = summitsCounts.reduce(
    (accumulatedSummits, summits) => accumulatedSummits + summits,
    0,
  );

  const averageDistance =
    distances.length > 0 ? totalDistance / distances.length : 0;

  const highestPoint =
    highestPoints.length > 0 ? Math.max(...highestPoints) : 0;

  const longestRoute = distances.length > 0 ? Math.max(...distances) : 0;

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
      value: totalSummits,
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
      value: Number(longestRoute.toFixed(1)),
      suffix: ' km',
    },
  ];
};
