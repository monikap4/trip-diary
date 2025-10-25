import { Routes, Route } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import Home from './Home/Home';
import Trips from './MyTrips/MyTrips';
import NewTrip from './NewTrip/NewTrip';
import Statistics from './Statistics/Statistics';
import style from './App.module.scss';

const App = () => (
  <div className={style.appWrapper}>
    <Header />
    <main className={style.mainContent}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/new" element={<NewTrip />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
