import React from 'react';

import { FormField } from './FormField';
import { Input } from './FormInputs';
import { useFormField } from '../../hooks/useFormField';

type TextInputProps = {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const InputControl: React.FC<Omit<TextInputProps, 'label'>> = ({
  value = '',
  placeholder,
  onChange,
}) => {
  const { inputId } = useFormField();

  return (
    <Input
      id={inputId}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
};

export const InputField: React.FC<TextInputProps> = ({
  label,
  value,
  placeholder,
  onChange,
}) => (
  <FormField label={label}>
    <InputControl value={value} placeholder={placeholder} onChange={onChange} />
  </FormField>
);
