import React from 'react';

import { FormField } from './FormField';
import { Input } from './FormInputs';
import { useFormField } from '../../hooks/useFormField';

type DateInputProps = {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
};

const DateInputInner: React.FC<{
  value?: string;
  onChange?: (value: string) => void;
}> = ({ value, onChange }) => {
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

export const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  onChange,
}) => (
  <FormField label={label}>
    <DateInputInner value={value} onChange={onChange} />
  </FormField>
);
