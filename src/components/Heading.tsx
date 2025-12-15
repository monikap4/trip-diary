import type { HTMLAttributes } from 'react';
import classnames from 'classnames';

import style from './Heading.module.scss';

export type SupportedHeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  size: SupportedHeadingType;
  element?: SupportedHeadingType | 'div';
  variant?: 'medium';
};

export const Heading: React.FC<HeadingProps> = ({
  size,
  element = size,
  children,
  className,
  variant = '',
  ...headingAttributes
}) => {
  const CustomTag = element;

  return (
    <CustomTag
      className={classnames(
        {
          [style.h1]: size === 'h1',
          [style.h2]: size === 'h2',
          [style.h3]: size === 'h3',
          [style.h4]: size === 'h4',
          [style.h5]: size === 'h5',
          [style.h6]: size === 'h6',
          [style.medium]: variant === 'medium',
        },
        style.baseHeading,
        className,
      )}
      {...headingAttributes}
    >
      {children}
    </CustomTag>
  );
};
