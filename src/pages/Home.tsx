import { TripCarousel } from '../components/TripCarousel';
import { Button } from '../components/Button';
import { Row } from '../components/Row';
import image1 from '../assets/images/foto-1.jpeg';
import image2 from '../assets/images/foto-2.jpeg';
import image3 from '../assets/images/foto-3.jpeg';
import image4 from '../assets/images/foto-4.jpeg';
import image5 from '../assets/images/foto-5.jpeg';
import image6 from '../assets/images/foto-6.jpeg';
import image7 from '../assets/images/foto-7.jpeg';
import plusIcon from '../assets/images/plus.svg';
import { Statistics } from '../components/Statistics/Statistics';
import style from './Home.module.scss';

const trips = [
  {
    id: '1',
    name: 'Výstup na Teryho chatu',
    image: image1,
    location: 'Vysoké Tatry',
  },
  {
    id: '2',
    name: 'Procházka v Alpách',
    image: image2,
    location: 'La Roche du Sur, Francie',
  },
  {
    id: '3',
    name: 'Hike okolo Teide',
    image: image3,
    location: 'Tenerife, Španělsko',
  },
  {
    id: '4',
    name: 'San Miguel',
    image: image4,
    location: 'Azory',
  },
  {
    id: '5',
    name: 'Západ slunce',
    image: image5,
    location: 'Někde v ČR',
  },
  {
    id: '6',
    name: 'Okolo sedmi jezer',
    image: image6,
    location: 'Argentina',
  },
  {
    id: '7',
    name: 'Východ slunce',
    image: image7,
    location: 'Někde v ČR',
  },
];

const stats = [
  { id: '1', label: 'Počet tras', value: 15 },
  { id: '2', label: 'Celková vzdálenost', value: 225, suffix: ' km' },
  { id: '3', label: 'Celkové stoupání', value: 10456, suffix: ' km' },
  { id: '4', label: 'Průměrná délka', value: 17, suffix: ' km' },
];

export const Home = () => (
  <div>
    <Row itemsCenter>
      <Button to="/new" label="Přidat trasu" iconSrc={plusIcon} />
    </Row>
    <h2 className={style.title}>Moje trasy</h2>
    <TripCarousel trips={trips} />
    <h2 className={style.title}>Statistiky</h2>
    <Statistics stats={stats} />
  </div>
);
