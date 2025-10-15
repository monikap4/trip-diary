import { CounterButton } from '../components/CounterButton';
import style from './App.module.scss';

const App = () => (
  <>
    <h1 className={style.title}>Trip Diary</h1>

    <CounterButton />
  </>
);

export default App;
