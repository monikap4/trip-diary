import React, { useEffect, useRef, useState } from 'react';

import { CountUp } from './CountUp';
import style from './Statistics.module.scss';

type StatItem = {
  id: string;
  label: string;
  value: string | number;
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
      const t = globalThis.setTimeout(() => setStartAnimation(true), 0);

      return () => clearTimeout(t);
    }

    let rafId: number | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          rafId = globalThis.requestAnimationFrame(() =>
            setStartAnimation(true),
          );
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      try {
        observer.disconnect();
      } catch {}
      if (typeof rafId === 'number') {
        globalThis.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const normalize = (
    item: StatItem,
  ): { num?: number; text: React.ReactNode; suffix?: string } => {
    if (typeof item.value === 'number') {
      return { num: item.value, text: item.value, suffix: item.suffix };
    }

    const s = String(item.value).trim();
    const digitsOnly = s
      .replaceAll(/[^\d\-,.]/g, '')
      .replace(',', '.')
      .replaceAll(/\s/g, '');
    const parsed = Number(digitsOnly);
    if (!Number.isNaN(parsed)) {
      return { num: parsed, text: s, suffix: item.suffix };
    }

    return { text: s, suffix: item.suffix };
  };

  const renderValue = (item: StatItem) => {
    const { num, text, suffix } = normalize(item);

    if (num === undefined) {
      return <>{text}</>;
    }

    if (!startAnimation) {
      return <>0{suffix ? ` ${suffix}` : ''}</>;
    }

    return (
      <>
        <CountUp to={num} />
        {suffix ? <span>&nbsp;{suffix}</span> : null}
      </>
    );
  };

  return (
    <div ref={sectionRef} className={style.statsSection}>
      <ul className={style.grid}>
        {stats.map((item) => (
          <li key={item.id} className={style.card}>
            <p className={style.label}>{item.label}</p>
            <p className={style.value}>{renderValue(item)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
