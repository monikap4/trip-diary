import React, { useEffect, useRef, useState } from 'react';

import type { StatItem } from '../../model/Stats';
import { StatValue } from './StatValue';
import style from './StatisticsSection.module.scss';

type StatsSectionProps = {
  stats: StatItem[];
  isHomepage?: boolean;
  noPadding?: boolean;
};

export const StatisticsSection: React.FC<StatsSectionProps> = ({
  stats,
  isHomepage,
  noPadding,
}) => {
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

    return () => observer.disconnect();
  }, []);

  const visibleStats = isHomepage ? stats.slice(0, 4) : stats;

  return (
    <div
      ref={sectionRef}
      className={`${style.statsSection} ${noPadding ? style.noPadding : ''}`}
    >
      <ul className={style.grid}>
        {visibleStats.map((item) => (
          <li key={item.id} className={style.card}>
            <p className={style.label}>{item.label}</p>
            {item.displayValue ? (
              <p className={style.value}>{item.displayValue}</p>
            ) : (
              <StatValue
                value={item.value ?? 0}
                suffix={item.suffix}
                startAnimation={startAnimation && !!isHomepage}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
