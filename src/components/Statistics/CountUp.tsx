import React, { useEffect, useState } from 'react';

type CountUpProps = {
  to: number;
  duration?: number;
};

export const CountUp: React.FC<CountUpProps> = ({ to, duration = 1000 }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) {
        start = timestamp;
      }
      const progress = timestamp - start;

      const percentage = Math.min(progress / duration, 1);
      const current = Math.floor(percentage * to);

      setValue(current);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [to, duration]);

  return <>{value.toLocaleString('cs-CZ')}</>;
};
