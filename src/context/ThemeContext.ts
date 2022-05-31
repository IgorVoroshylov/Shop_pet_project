import React, { Dispatch, SetStateAction } from 'react';

type ContextTheme = {
  theme: 'light' | 'string';
  setTheme: Dispatch<SetStateAction<'light' | 'string'>>;
};

const ThemeContext = React.createContext<ContextTheme>({
  theme: 'light',
  setTheme: () => {},
});

export default ThemeContext;
