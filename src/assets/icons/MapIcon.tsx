import React from 'react';

type IconProps = {
  className?: string;
};

export const StatsIcon: React.FC<IconProps> = ({ className }) => (
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
      d="M9 6.8V15m6-6v8.3m.5 3.4 4.9-2.4q.6-.4.6-1V4.8c0-.8-.9-1.4-1.6-1l-3.9 2h-1l-5-2.5a1 1 0 0 0-1 0L3.6 5.7Q3 6 3 6.7v12.5c0 .8.9 1.4 1.6 1l3.9-2h1l5 2.5q.5.3 1 0"
    />
  </svg>
);
