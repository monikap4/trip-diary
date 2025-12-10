import React from 'react';

import type { Trip } from '../model/Trip';
import iconPin from '../assets/images/map-pin.svg';
import style from './TripCardHorizontal.module.scss';

export type TripCardProps = Pick<
  Trip,
  'image' | 'name' | 'location' | 'description' | 'mapUrl' | 'extraImages'
>;

export const TripCardHorizontal: React.FC<TripCardProps> = ({
  image,
  name,
  location,
  description,
  mapUrl,
  extraImages,
}) => (
  <li className={style.card}>
    <div className={style.imageWrapper}>
      <img src={image} alt={name} className={style.mainImage} />
      <div className={style.imageOverlay}>
        <h3 className={style.imageTitle}>{name}</h3>
        <div className={style.imageLocation}>
          <img src={iconPin} alt="" aria-hidden="true" className={style.icon} />
          {location}
        </div>
      </div>
      {extraImages && extraImages.length > 0 && (
        <div className={style.gallery}>
          <div className={style.galleryMobile}>
            {extraImages.slice(0, 3).map((src, index) => (
              <div key={src} className={style.thumb}>
                <img src={src} alt="" className={style.thumbImage} />
                {index === 2 && extraImages.length > 3 && (
                  <div className={style.more}>+{extraImages.length - 2}</div>
                )}
              </div>
            ))}
          </div>
          <div className={style.galleryDesktop}>
            <div className={style.thumb}>
              <img src={extraImages[0]} alt="" className={style.thumbImage} />
              <div className={style.moreDesktop}>+{extraImages.length + 1}</div>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className={style.content}>
      <h3 className={style.title}>{name}</h3>
      <h4 className={style.location}>
        <img src={iconPin} alt="" aria-hidden="true" className={style.icon} />
        {location}
      </h4>
      <p className={style.description}>{description}</p>
    </div>
    <div className={style.mapWrapper}>
      <iframe title={`Mapa: ${name}`} src={mapUrl} width="400" height="280" />
    </div>
  </li>
);
