import style from './TripCardVertical.module.scss';

export type TripCardProps = {
  image: string;
  name: string;
  location: string;
};

export const TripCardVertical = ({ image, name, location }: TripCardProps) => (
  <div className={style.card}>
    <img src={image} alt={name} className={style.image} />
    <div className={style.content}>
      <h3 className={style.title}>{name}</h3>
      <p className={style.location}>{location}</p>
    </div>
  </div>
);
