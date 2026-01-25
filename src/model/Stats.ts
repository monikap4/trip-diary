import type { Tables } from './database';

type DbStatistics = Tables<'trip_statistics'>;

export type Stats = Omit<
  DbStatistics,
  'created_at' | 'highest_point' | 'trip_id'
> & {
  createdAt?: DbStatistics['created_at'];
  highestPoint?: DbStatistics['highest_point'];
  tripId?: DbStatistics['trip_id'];
};

export type StatItem = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
};
