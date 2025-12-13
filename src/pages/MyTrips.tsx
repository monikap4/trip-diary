import { TripList } from '../components/TripList';
import image1 from '../assets/images/foto-1.jpeg';
import image2 from '../assets/images/foto-2.jpeg';
import image3 from '../assets/images/foto-3.jpeg';
import image4 from '../assets/images/foto-4.jpeg';
import image5 from '../assets/images/foto-5.jpeg';
import image6 from '../assets/images/foto-6.jpeg';
import image7 from '../assets/images/foto-7.jpeg';
import { Heading } from '../components/Heading';
import style from './MyTrips.module.scss';

const trips = [
  {
    id: '1',
    name: 'Výstup na Teryho chatu',
    image: image1,
    location: 'Vysoké Tatry',
    mapId: 'buzahedana',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit egestas tempor. Proin massa sem, tincidunt id bibendum et, luctus ut risus. Pellentesque ac urna vulputate, cursus felis id, ullamcorper augue.',
    extraImages: [image2, image3, image4, image5],
  },
  {
    id: '2',
    name: 'Procházka v Alpách',
    image: image2,
    location: 'La Roche du Sur, Francie',
    mapId: 'buzahedana',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit egestas tempor. Proin massa sem, tincidunt id bibendum et, luctus ut risus. Pellentesque ac urna vulputate, cursus felis id, ullamcorper augue. Pellentesque ac urna vulputate, cursus felis id, ullamcorper augue.',
  },
  {
    id: '3',
    name: 'Hike okolo Teide',
    image: image3,
    location: 'Tenerife, Španělsko',
    mapId: 'buzahedana',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit egestas tempor. Proin massa sem, tincidunt id bibendum et, luctus ut risus. Pellentesque ac urna vulputate, cursus felis id, ullamcorper augue.',
  },
  {
    id: '4',
    name: 'San Miguel',
    image: image4,
    location: 'Azory',
    mapUrl: 'https://mapy.com/s/buzahedana',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit egestas tempor. Proin massa sem, tincidunt id bibendum et, luctus ut risus. Pellentesque ac urna vulputate, cursus felis id, ullamcorper augue.',
  },
  {
    id: '5',
    name: 'Západ slunce',
    image: image5,
    location: 'Někde v ČR',
    mapId: 'buzahedana',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit egestas tempor. Proin massa sem, tincidunt id bibendum et, luctus ut risus. Pellentesque ac urna vulputate, cursus felis id, ullamcorper augue.',
  },
  {
    id: '6',
    name: 'Okolo sedmi jezer',
    image: image6,
    location: 'Argentina',
    mapId: 'buzahedana',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit egestas tempor. Proin massa sem, tincidunt id bibendum et, luctus ut risus. Pellentesque ac urna vulputate, cursus felis id, ullamcorper augue.',
  },
  {
    id: '7',
    name: 'Východ slunce',
    image: image7,
    location: 'Někde v ČR',
    mapId: 'buzahedana',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit egestas tempor.',
  },
];

export const MyTrips = () => (
  <div className={style.container}>
    <Heading size="h2">Moje trasy</Heading>
    <TripList trips={trips} />
  </div>
);
