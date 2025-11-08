import { Link } from 'react-router-dom';

import style from './ButtonPrimary.module.scss';

type ButtonPrimaryProps = {
  label: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  iconSrc?: string;
  iconPosition?: 'left' | 'right';
};

export const ButtonPrimary = ({
  label,
  to,
  onClick,
  type = 'button',
  iconSrc,
  iconPosition = 'right',
}: ButtonPrimaryProps) => {
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
