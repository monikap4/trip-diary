import { useRef } from 'react';

import { TripCardVertical } from './TripCardVertical';
import arrowLeft from '../assets/images/arrow-left.svg';
import arrowRight from '../assets/images/arrow-right.svg';
import style from './TripCarousel.module.scss';

type Trip = {
  id: string;
  name: string;
  image: string;
  location: string;
};

type TripCarouselProps = {
  trips: Trip[];
};

export const TripCarousel = ({ trips }: TripCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    const scrollAmount = container.clientWidth * 0.8;
    const scrollBy = direction === 'left' ? -scrollAmount : scrollAmount;

    container.scrollBy({
      left: scrollBy,
      behavior: 'smooth',
    });
  };

  return (
    <div className={style.carousel}>
      <button
        className={`${style.arrow} ${style.left}`}
        onClick={() => scroll('left')}
        aria-label="Předchozí"
      >
        <img src={arrowLeft} alt="Předchozí" />
      </button>

      <div ref={scrollContainerRef} className={style.scrollContainer}>
        {trips.map((trip) => (
          <TripCardVertical key={trip.id} {...trip} />
        ))}
      </div>

      <button
        className={`${style.arrow} ${style.right}`}
        onClick={() => scroll('right')}
        aria-label="Další"
      >
        <img src={arrowRight} alt="Další" />
      </button>
    </div>
  );
};
