import { Routes, Route } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Home } from './Home';
import { MyTrips } from './MyTrips';
import { NewTrip } from './NewTrip';
import { Statistics } from './Statistics';
import style from './App.module.scss';

const App = () => (
  <div className={style.appWrapper}>
    <Header />
    <main className={style.mainContent}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<MyTrips />} />
        <Route path="/new" element={<NewTrip />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
