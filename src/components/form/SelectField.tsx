import React from 'react';

import { FormField } from './FormField';
import { Select } from './FormInputs';

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

export const SelectField: React.FC<SelectProps> = ({
  label,
  value,
  options,
  onChange,
}) => (
  <FormField label={label}>
    {(inputId) => (
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
    )}
  </FormField>
);
