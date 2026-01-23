import { supabase } from './supabaseClient';
import type { Stats } from '../model/Stats';

export const fetchStats = async (): Promise<Stats[]> => {
  const { data, error } = await supabase
    .from('trip_statistics')
    .select('id,distance,elevation,summits,highest_point');

  if (error) {
    throw new Error('Failed to fetch statistics');
  }

  return data.map(({ highest_point, ...rest }) => ({
    ...rest,
    highestPoint: highest_point,
  }));
};
