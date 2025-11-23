import React from 'react';
import { Link } from 'react-router-dom';

import style from './Button.module.scss';

type BaseProps = {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  iconSrc?: string;
  iconPosition?: 'left' | 'right';
};

type LinkButtonProps = BaseProps & {
  to: string;
  onClick?: () => void;
};

type ActionButtonProps = BaseProps & {
  onClick: () => void;
  to?: never;
};

type ButtonPrimaryProps = LinkButtonProps | ActionButtonProps;

export const Button: React.FC<ButtonPrimaryProps> = ({
  label,
  to,
  onClick,
  type = 'button',
  iconSrc,
  iconPosition = 'right',
}) => {
  const content = (
    <>
      {iconSrc && iconPosition === 'left' && (
        <img src={iconSrc} alt="" className={style.icon} />
      )}
      <span>{label}</span>
      {iconSrc && iconPosition === 'right' && (
        <img src={iconSrc} alt="" className={style.icon} />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={style.button}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={style.button}>
      {content}
    </button>
  );
};
