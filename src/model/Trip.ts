import type { Tables } from '../model/database';

type DbTrip = Tables<'trips'>;
type DbTripImage = Tables<'trip_images'>;

type TripImage = Pick<DbTripImage, 'image_url' | 'is_cover'>;

export type Trip = {
  createdAt?: DbTrip['created_at'];
  id: DbTrip['id'];
  mapId?: DbTrip['map_id'];
  image?: TripImage['image_url'];
  extraImages?: TripImage['image_url'][];
} & Omit<DbTrip, 'created_at' | 'map_id'>;
