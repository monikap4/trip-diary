import React, { useEffect, useRef, useState } from 'react';

import { StatValue } from './StatValue';
import style from './Statistics.module.scss';

type StatItem = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
};

type StatsSectionProps = {
  stats: StatItem[];
};

export const Statistics: React.FC<StatsSectionProps> = ({ stats }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      const timeoutRef = setTimeout(() => setStartAnimation(true), 0);

      return () => clearTimeout(timeoutRef);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className={style.statsSection}>
      <ul className={style.grid}>
        {stats.map((item) => (
          <li key={item.id} className={style.card}>
            <p className={style.label}>{item.label}</p>
            <StatValue
              value={item.value}
              suffix={item.suffix}
              startAnimation={startAnimation}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
