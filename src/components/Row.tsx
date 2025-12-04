import React from 'react';
import classnames from 'classnames';

import style from './Row.module.scss';

type RowProps = {
  flexCol?: boolean;
  flexWrap?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  justifyStart?: boolean;
  justifyBetween?: boolean;
  itemsCenter?: boolean;
  itemsStart?: boolean;
  itemsEnd?: boolean;
  isFullWidth?: boolean;
  gap?: string;
  className?: string;
  children: React.ReactNode;
};

export const Row: React.FC<RowProps> = ({
  children,
  flexCol,
  flexWrap,
  justifyCenter,
  justifyEnd,
  justifyStart,
  justifyBetween,
  itemsCenter,
  itemsStart,
  itemsEnd,
  isFullWidth,
  gap,
  className,
}) => (
  <div
    style={{ gap }}
    className={classnames(
      style.row,
      {
        [style.flexCol]: flexCol,
        [style.flexWrap]: flexWrap,
        [style.justifyCenter]: justifyCenter,
        [style.justifyEnd]: justifyEnd,
        [style.justifyStart]: justifyStart,
        [style.justifyBetween]: justifyBetween,
        [style.itemsCenter]: itemsCenter,
        [style.itemsStart]: itemsStart,
        [style.itemsEnd]: itemsEnd,
        [style.fullWidth]: isFullWidth,
      },
      className,
    )}
  >
    {children}
  </div>
);
