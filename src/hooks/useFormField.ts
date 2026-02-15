import { useContext } from 'react';

import { FormFieldContext } from './../components/form/FormFieldContext';

export const useFormField = () => {
  const formField = useContext(FormFieldContext);

  if (!formField) {
    throw new Error('useFormField must be used inside FormField');
  }

  return formField;
};
