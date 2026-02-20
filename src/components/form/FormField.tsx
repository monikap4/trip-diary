import React, { useMemo, useId } from 'react';

import { FormFieldContext } from './FormFieldContext';
import style from './FormField.module.scss';

type FormFieldProps = {
  label: string;
  children: React.ReactNode;
};

export const FormField: React.FC<FormFieldProps> = ({ label, children }) => {
  const inputId = useId();

  const value = useMemo(
    () => ({
      label,
      inputId,
    }),
    [label, inputId],
  );

  return (
    <FormFieldContext.Provider value={value}>
      <div className={style.wrapper}>
        <label className={style.label} htmlFor={inputId}>
          {label}
        </label>
        {children}
      </div>
    </FormFieldContext.Provider>
  );
};
