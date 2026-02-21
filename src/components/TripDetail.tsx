import { useEffect, useState } from 'react';

import { getTripDetail } from '../api/getTripDetail';
import { Heading } from './Heading';
import { StatisticsSection } from './statistics/StatisticsSection';
import type { StatItem } from '../model/Stats';
import iconPin from '../assets/images/map-pin.svg';
import mapImg from '../assets/images/mapycz.jpeg';
import style from './TripDetail.module.scss';

type TripDetailProps = {
  tripId: number;
};

type TripRow = {
  id: number;
  name: string;
  location: string | null;
  description: string | null;
  map_id: string | null;
};

type StatsRow = {
  distance: number | null;
  elevation: number | null;
  start_time: string | null;
  end_time: string | null;
};

export const TripDetail: React.FC<TripDetailProps> = ({ tripId }) => {
  const [trip, setTrip] = useState<TripRow | null>(null);
  const [stats, setStats] = useState<StatsRow | null>(null);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [extraImages, setExtraImages] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getTripDetail(tripId);

      setTrip(data.trip);
      setStats(data.stats);
      setCoverImage(data.coverImage);
      setExtraImages(data.extraImages);
    };

    load();
  }, [tripId]);

  if (!trip || !stats) {
    return <div className={style.loading}>Načítám…</div>;
  }

  const statsItems: StatItem[] = [
    {
      id: 'distance',
      label: 'Délka',
      value: stats.distance ?? 0,
      suffix: ' km',
    },
    {
      id: 'elevation',
      label: 'Stoupání',
      value: stats.elevation ?? 0,
      suffix: ' m',
    },
    {
      id: 'start',
      label: 'Čas startu',
      displayValue: stats.start_time?.slice(0, 5) ?? '-',
    },
    {
      id: 'end',
      label: 'Čas návratu',
      displayValue: stats.end_time?.slice(0, 5) ?? '-',
    },
  ];

  const visibleThumbs = extraImages.slice(0, 4);
  const remaining = extraImages.length - 3;

  return (
    <div className={style.wrapper}>
      <div className={style.hero}>
        {coverImage && (
          <img src={coverImage} alt={trip.name} className={style.mainImage} />
        )}

        <div className={style.heroOverlay}>
          <Heading size="h1" variant="medium" align="left">
            {trip.name}
          </Heading>

          <div className={style.location}>
            <img src={iconPin} alt="" aria-hidden="true" />
            {trip.location ?? ''}
          </div>
        </div>

        {extraImages.length > 0 && (
          <div className={style.gallery}>
            {visibleThumbs.map((src, index) => {
              const isLast =
                index === visibleThumbs.length - 1 && remaining > 0;

              return (
                <div key={src} className={style.thumbWrapper}>
                  <img src={src} alt="" className={style.thumb} />

                  {isLast && (
                    <div className={style.thumbOverlay}>+{remaining}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <StatisticsSection stats={statsItems} noPadding />

      <div className={style.section}>
        <Heading size="h3" variant="medium">
          Popis trasy
        </Heading>
        <p className={style.description}>{trip.description ?? ''}</p>
      </div>

      {trip.map_id && (
        <div className={style.section}>
          <Heading size="h3" variant="medium">
            Mapa trasy
          </Heading>

          <a
            href={`https://mapy.com/s/${trip.map_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={style.mapPreview}
          >
            <img className={style.mapImg} src={mapImg} alt="Mapa náhled" />
            <span className={style.mapButton}>Zobrazit v Mapy.cz</span>
          </a>
        </div>
      )}
    </div>
  );
};
