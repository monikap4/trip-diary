import React from 'react';

import { TripCardHorizontal } from './TripCardHorizontal';
import type { Trip } from '../model/Trip';
import style from './TripList.module.scss';

type TripListProps = {
  trips: Trip[];
};

export const TripList: React.FC<TripListProps> = ({ trips }) => (
  <ul className={style.tripList}>
    {trips.map(
      ({ id, image, name, location, description, mapUrl, extraImages }) => (
        <TripCardHorizontal
          key={id}
          image={image}
          name={name}
          location={location}
          description={description}
          mapUrl={mapUrl}
          extraImages={extraImages}
        />
      ),
    )}
  </ul>
);
