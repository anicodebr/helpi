import React from 'react'

const theme = {
    light: {
      style:{
        elevation: 3
      },
      color:{
        background: '#FFF',
        primary: '#66BB6A'
      },
      font:{
        type:{
          regular: 'Roboto-Regular',
          thin: 'Roboto-Thin',
          bold: 'Roboto-Bold',
          light: 'Roboto-Light'
        },
        color:{
          primary: '#66BB6A',
          secondary: "#FFF",
        },
        size:{
          h1: 40,
          h2: 30,
          h3: 20,
          little: 13,
        }
      }
    },
    dark: {
    }
  };
export const defaultTheme = theme;  
export const ThemeContext = React.createContext(theme);