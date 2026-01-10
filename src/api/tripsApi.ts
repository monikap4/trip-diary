import { supabase } from './supabaseClient';
import type { Trip } from '../model/Trip';

export const fetchTrips = async (): Promise<Trip[]> => {
  const { data, error } = await supabase.from('trips').select(`
      id,
      name,
      location,
      description,
      map_id,
      trip_images (
        image_url,
        is_cover
      )
    `);

  if (error) {
    throw error;
  }

  return data.map((trip) => {
    const images = trip.trip_images;

    const coverImage =
      images.find((img) => img.is_cover)?.image_url ?? images[0]?.image_url;

    return {
      id: String(trip.id),
      name: trip.name,
      location: trip.location ?? '',
      description: trip.description ?? undefined,
      mapId: trip.map_id ?? undefined,
      image: coverImage,
      extraImages: images
        .filter((img) => !img.is_cover)
        .map((img) => img.image_url),
    };
  });
};
