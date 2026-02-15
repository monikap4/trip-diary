import React from 'react';
import classNames from 'classnames';

import style from './FormInputs.module.scss';

type InputProps = React.ComponentProps<'input'>;
type TextAreaProps = React.ComponentProps<'textarea'>;
type SelectProps = React.ComponentProps<'select'>;

export const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input className={classNames(style.input, className)} {...props} />
);

export const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => (
  <textarea className={classNames(style.input, className)} {...props} />
);

export const Select: React.FC<SelectProps> = ({ className, ...props }) => (
  <select className={classNames(style.input, className)} {...props} />
);
