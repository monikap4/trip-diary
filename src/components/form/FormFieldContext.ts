import { createContext } from 'react';

export type FormFieldContextValue = {
  label: string;
  inputId: string;
};

export const FormFieldContext = createContext<FormFieldContextValue | null>(
  null,
);
