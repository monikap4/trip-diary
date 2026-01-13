import { supabase } from './supabaseClient';
import type { StatsDb } from '../model/StatsDb';

export const fetchStats = async (): Promise<StatsDb[]> => {
  const { data, error } = await supabase
    .from('trip_statistics')
    .select('id,distance,elevation,summits,highest_point');

  if (error) {
    throw new Error('Failed to fetch statistics');
  }

  return data.map((stat) => ({
    id: stat.id,
    distance: stat.distance,
    elevation: stat.elevation,
    summits: stat.summits,
    highestPoint: stat.highest_point,
  }));
};
