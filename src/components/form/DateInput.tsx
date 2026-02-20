import React from 'react';

import { FormField } from './FormField';
import { Input } from './FormInputs';
import { useFormField } from '../../hooks/useFormField';

type DateInputControlProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const DateInputControl: React.FC<DateInputControlProps> = ({
  value,
  onChange,
}) => {
  const formField = useFormField();

  return (
    <Input
      id={formField.inputId}
      type="date"
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
};

type DateInputProps = {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  onChange,
}) => (
  <FormField label={label}>
    <DateInputControl value={value} onChange={onChange} />
  </FormField>
);
