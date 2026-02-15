import React from 'react';

import { FormField } from './FormField';
import { Input } from './FormInputs';
import { useFormField } from '../../hooks/useFormField';

type TimeInputProps = {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
};

const TimeInputControl: React.FC<Omit<TimeInputProps, 'label'>> = ({
  value,
  onChange,
}) => {
  const { inputId } = useFormField();

  return (
    <Input
      id={inputId}
      type="time"
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
};

export const TimeInput: React.FC<TimeInputProps> = ({
  label,
  value,
  onChange,
}) => (
  <FormField label={label}>
    <TimeInputControl value={value} onChange={onChange} />
  </FormField>
);
