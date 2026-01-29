import React from 'react';

import { FormField } from './FormField';
import { TextArea } from './FormInputs';

type TextAreaProps = {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export const TextAreaField: React.FC<TextAreaProps> = ({
  label,
  value = '',
  placeholder,
  onChange,
}) => (
  <FormField label={label}>
    {(inputId) => (
      <TextArea
        id={inputId}
        value={value}
        placeholder={placeholder}
        rows={4}
        onChange={(event) => onChange?.(event.target.value)}
      />
    )}
  </FormField>
);
