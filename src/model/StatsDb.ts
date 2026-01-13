import type { Tables } from './database';

type DbStatistics = Tables<'trip_statistics'>;

export type StatsDb = {
  createdAt?: DbStatistics['created_at'];
  highestPoint?: DbStatistics['highest_point'];
  tripId?: DbStatistics['trip_id'];
} & Omit<DbStatistics, 'created_at' | 'highest_point' | 'trip_id'>;
