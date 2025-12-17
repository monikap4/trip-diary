import React, { useEffect, useState } from 'react';

import { supabase } from '../supabaseClient';
import { TripList } from '../components/TripList';
import { Heading } from '../components/Heading';
import type { Trip } from '../model/Trip';
import style from './MyTrips.module.scss';

type TripImage = {
  image_url: string;
  is_cover: boolean;
};

const getCoverImage = (images: TripImage[]): string | undefined => {
  const cover = images.find((img) => img.is_cover);

  return cover?.image_url ?? images[0]?.image_url;
};

const getExtraImages = (images: TripImage[]): string[] =>
  images.filter((img) => !img.is_cover).map((img) => img.image_url);

export const MyTrips: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchTrips = async () => {
      const { data, error: supabaseError } = await supabase.from('trips')
        .select(`
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

      if (!isMounted) {
        return;
      }

      if (supabaseError) {
        setError('Nepodařilo se načíst trasy.');
        setLoading(false);

        return;
      }

      const mappedTrips: Trip[] = data.map((trip: any) => {
        const images = trip.trip_images as TripImage[];

        return {
          id: trip.id,
          name: trip.name,
          location: trip.location,
          description: trip.description,
          mapId: trip.map_id,
          image: getCoverImage(images),
          extraImages: getExtraImages(images),
        };
      });

      setTrips(mappedTrips);
      setLoading(false);
    };

    fetchTrips();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className={style.container}>
        <Heading size="h2">Moje trasy</Heading>
        <p>Načítám trasy…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={style.container}>
        <Heading size="h2">Moje trasy</Heading>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <Heading size="h2">Moje trasy</Heading>
      <TripList trips={trips} />
    </div>
  );
};
