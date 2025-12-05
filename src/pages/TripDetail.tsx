import { useParams, useNavigate } from 'react-router-dom';

import { getTripById } from '../data/trips';
import arrowLeft from '../assets/images/arrow-left.svg';
import style from './TripDetail.module.scss';

export const TripDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    return (
      <div className={style.container}>
        <p>Trasa nenalezena</p>
      </div>
    );
  }

  const trip = getTripById(id);

  if (!trip) {
    return (
      <div className={style.container}>
        <p>Trasa nenalezena</p>
      </div>
    );
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={style.container}>
      <button
        className={style.backButton}
        onClick={handleGoBack}
        aria-label="Zpět"
        tabIndex={0}
      >
        <img src={arrowLeft} alt="" className={style.backIcon} />
        <span>Zpět</span>
      </button>

      <div className={style.content}>
        <img src={trip.image} alt={trip.name} className={style.image} />
        <div className={style.details}>
          <h1 className={style.title}>{trip.name}</h1>
          <p className={style.location}>{trip.location}</p>
        </div>
      </div>
    </div>
  );
};
