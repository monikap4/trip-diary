import React from 'react';

type IconProps = {
  className?: string;
};

export const HomeIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.3 12 8.9-9q.8-.6 1.6 0l9 9M4.4 9.8v10Q4.6 21 5.6 21h4.2v-4.9q.1-1 1-1.1h2.3q1 .1 1.2 1.1V21h4q1.1-.1 1.2-1.1V9.8M8.3 21h8.2"
    />
  </svg>
);
