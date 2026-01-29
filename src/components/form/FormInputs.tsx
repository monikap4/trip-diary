import classNames from 'classnames';

import style from './FormInputs.module.scss';

type InputProps = React.ComponentProps<'input'>;
type TextAreaProps = React.ComponentProps<'textarea'>;
type SelectProps = React.ComponentProps<'select'>;

export const Input = ({ className, ...props }: InputProps) => (
  <input className={classNames(style.input, className)} {...props} />
);

export const TextArea = ({ className, ...props }: TextAreaProps) => (
  <textarea className={classNames(style.input, className)} {...props} />
);

export const Select = ({ className, ...props }: SelectProps) => (
  <select className={classNames(style.input, className)} {...props} />
);
