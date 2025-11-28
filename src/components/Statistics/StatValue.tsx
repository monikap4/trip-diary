import React from 'react';

import { CountUp } from './CountUp';
import style from './StatValue.module.scss';

type StatValueProps = {
  value: number;
  suffix?: string;
  startAnimation: boolean;
};

export const StatValue: React.FC<StatValueProps> = ({
  value,
  suffix,
  startAnimation,
}) => (
  <p className={style.value}>
    {startAnimation ? <CountUp to={value} /> : 0}
    {suffix ? <span>&nbsp;{suffix}</span> : null}
  </p>
);
