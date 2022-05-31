import React from 'react';
import { useFela } from 'react-fela';

type OwnProps = {
  styleForIcon: () => object;
};

const TopArrow: React.FC<OwnProps> = ({ styleForIcon }) => {
  const { css } = useFela();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${css(styleForIcon)}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 11l7-7 7 7M5 19l7-7 7 7"
      />
    </svg>
  );
};

export default TopArrow;
