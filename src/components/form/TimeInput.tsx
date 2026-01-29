import React from 'react';

import { FormField } from './FormField';
import { Input } from './FormInputs';

type TimeInputProps = {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const TimeInput: React.FC<TimeInputProps> = ({
  label,
  value,
  onChange,
}) => (
  <FormField label={label}>
    {(inputId) => (
      <Input
        id={inputId}
        type="time"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      />
    )}
  </FormField>
);
