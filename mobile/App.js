import React from 'react';
import Routes from './src/routes'
import {ThemeContext, defaultTheme} from './src/theme';

export default function App() {
  return (
    <ThemeContext.Provider value={defaultTheme.light}>
      <Routes />
    </ThemeContext.Provider>
  );
}
