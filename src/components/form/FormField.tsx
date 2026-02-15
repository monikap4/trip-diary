import React, { useMemo, useId } from 'react';

import { FormFieldContext } from './FormFieldContext';

type Props = {
  label: string;
  children: React.ReactNode;
};

export const FormField: React.FC<Props> = ({ label, children }) => {
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
      <div>
        <label htmlFor={inputId}>{label}</label>
        {children}
      </div>
    </FormFieldContext.Provider>
  );
};
