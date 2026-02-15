import React from 'react';

import { FormField } from './FormField';
import { Select } from './FormInputs';
import { useFormField } from '../../hooks/useFormField';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  value?: string;
  options: Option[];
  onChange?: (value: string) => void;
};

const SelectFieldControl: React.FC<Omit<SelectProps, 'label'>> = ({
  value,
  options,
  onChange,
}) => {
  const { inputId } = useFormField();

  return (
    <Select
      id={inputId}
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
    >
      <option value="">— vyber —</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Select>
  );
};

export const SelectField: React.FC<SelectProps> = ({
  label,
  value,
  options,
  onChange,
}) => (
  <FormField label={label}>
    <SelectFieldControl value={value} options={options} onChange={onChange} />
  </FormField>
);
