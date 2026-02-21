import React from 'react';
import { Link } from 'react-router-dom';

import type { Trip } from '../model/Trip';
import iconPin from '../assets/images/map-pin.svg';
import { Heading } from './Heading';
import style from './TripCardHorizontal.module.scss';

export type TripCardProps = Pick<
  Trip,
  'id' | 'image' | 'name' | 'location' | 'description' | 'mapId' | 'extraImages'
>;

export const TripCardHorizontal: React.FC<TripCardProps> = ({
  id,
  image,
  name,
  location,
  description,
  extraImages,
}) => (
  <Link to={`/trip/${id}`} className={style.cardLink}>
    <li className={style.card}>
      <div className={style.imageWrapper}>
        <img src={image} alt={name} className={style.mainImage} />

        <div className={style.imageOverlay}>
          <Heading size="h3" variant="medium">
            {name}
          </Heading>

          <div className={style.imageLocation}>
            <img
              src={iconPin}
              alt=""
              aria-hidden="true"
              className={style.icon}
            />
            {location}
          </div>
        </div>

        {extraImages && extraImages.length > 0 && (
          <div className={style.gallery}>
            <ul className={style.galleryMobile} aria-label="Fotogalerie">
              {extraImages.slice(0, 3).map((src, index) => (
                <li key={src} className={style.thumb}>
                  <img src={src} alt="" className={style.thumbImage} />
                  {index === 2 && extraImages.length > 3 && (
                    <span className={style.more}>
                      +{extraImages.length - 2}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className={style.galleryDesktop}>
              <div className={style.thumb}>
                <img src={extraImages[0]} alt="" className={style.thumbImage} />
                <div className={style.moreDesktop}>+{extraImages.length}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={style.content}>
        <Heading size="h3" variant="medium">
          {name}
        </Heading>

        <h4 className={style.location}>
          <img src={iconPin} alt="" aria-hidden="true" className={style.icon} />
          {location}
        </h4>

        <p className={style.description}>{description}</p>
      </div>
    </li>
  </Link>
);
