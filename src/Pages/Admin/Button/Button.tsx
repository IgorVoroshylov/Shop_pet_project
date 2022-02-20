import React, { Dispatch, SetStateAction } from 'react';
import { useFela } from 'react-fela';
import { ShowButton } from '../admin.style';

type OwnProps = {
  callback: Dispatch<SetStateAction<boolean>>;
  children: string;
};

const Button: React.FC<OwnProps> = ({ callback, children }) => {
  const { css, theme } = useFela();
  return (
    <button
      className={css(ShowButton(theme as ThemeType))}
      onClick={() => callback(true)}
    >
      {children}
    </button>
  );
};

export default Button;
