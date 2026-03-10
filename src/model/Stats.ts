import type { Tables } from './database';

type DbStatistics = Tables<'trip_statistics'>;

export type Stats = Omit<
  DbStatistics,
  'created_at' | 'highest_point' | 'trip_id' | 'start_time' | 'end_time'
> & {
  createdAt?: DbStatistics['created_at'];
  highestPoint?: DbStatistics['highest_point'];
  tripId?: DbStatistics['trip_id'];
  startTime?: DbStatistics['start_time'];
  endTime?: DbStatistics['end_time'];
};

export type StatItem = {
  id: string;
  label: string;
  value?: number;
  displayValue?: string;
  suffix?: string;
};
