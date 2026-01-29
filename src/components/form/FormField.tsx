import { useId } from 'react';
import type { ReactNode } from 'react';

import style from './FormField.module.scss';

type FormFieldProps = {
  label: string;
  children: (inputId: string) => ReactNode;
};

export const FormField = ({ label, children }: FormFieldProps) => {
  const inputId = useId();

  return (
    <div className={style.wrapper}>
      <label htmlFor={inputId} className={style.label}>
        {label}
      </label>

      {children(inputId)}
    </div>
  );
};
