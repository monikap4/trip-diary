import { useState } from 'react';

import style from './CounterButton.module.scss';

export const CounterButton = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={style.counterContainer}>
      <button
        className={style.counterButton}
        onClick={handleIncrement}
        aria-label={`Increment counter, current count is ${count}`}
        tabIndex={0}
      >
        Count: {count}
      </button>
      <p className={style.counterText}>
        Click the button to increment the counter
      </p>
    </div>
  );
};
