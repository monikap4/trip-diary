import { supabase } from './supabaseClient';
import type { Trip } from '../model/Trip';

type TripImageDb = {
  image_url: string;
  is_cover: boolean;
};

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
    throw new Error('Failed to fetch trips');
  }

  return data.map((trip: any) => {
    const images = trip.trip_images as TripImageDb[];

    const coverImage =
      images.find((img) => img.is_cover)?.image_url ?? images[0]?.image_url;

    return {
      id: trip.id,
      name: trip.name,
      location: trip.location,
      description: trip.description,
      mapId: trip.map_id,
      image: coverImage,
      extraImages: images
        .filter((img) => !img.is_cover)
        .map((img) => img.image_url),
    };
  });
};
