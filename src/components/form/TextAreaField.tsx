import React from 'react';

import { FormField } from './FormField';
import { TextArea } from './FormInputs';
import { useFormField } from '../../hooks/useFormField';

type TextAreaProps = {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const TextAreaFieldControl: React.FC<Omit<TextAreaProps, 'label'>> = ({
  value = '',
  placeholder,
  onChange,
}) => {
  const { inputId } = useFormField();

  return (
    <TextArea
      id={inputId}
      value={value}
      placeholder={placeholder}
      rows={4}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
};

export const TextAreaField: React.FC<TextAreaProps> = ({
  label,
  value,
  placeholder,
  onChange,
}) => (
  <FormField label={label}>
    <TextAreaFieldControl
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </FormField>
);
