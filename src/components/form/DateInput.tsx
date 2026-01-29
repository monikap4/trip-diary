import React from 'react';

import { FormField } from './FormField';
import { Input } from './FormInputs';

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
    {(inputId) => (
      <Input
        id={inputId}
        type="date"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      />
    )}
  </FormField>
);
