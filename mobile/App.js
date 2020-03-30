import React, {useState, useEffect} from 'react';
import Routes from './src/routes'
import {ThemeContext, defaultTheme} from './src/theme';
import * as Font from 'expo-font';

export default function App() {
  
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFont(){
      await Font.loadAsync({
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Thin':    require('./assets/fonts/Roboto-Thin.ttf'),
        'Roboto-Bold':    require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Light':    require('./assets/fonts/Roboto-Light.ttf'),
      })
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  
  return (
      fontLoaded ? 
      <ThemeContext.Provider value={defaultTheme.light}>
        <Routes />
      </ThemeContext.Provider>
      : null
  );
}
