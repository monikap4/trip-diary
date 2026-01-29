import React from 'react';

import { FormField } from './FormField';
import { Input } from './FormInputs';

type TextInputProps = {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export const InputField: React.FC<TextInputProps> = ({
  label,
  value = '',
  placeholder,
  onChange,
}) => (
  <FormField label={label}>
    {(inputId) => (
      <Input
        id={inputId}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
      />
    )}
  </FormField>
);
