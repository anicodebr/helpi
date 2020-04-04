import React from 'react'

const theme = {
    light: {
      style:{
        elevation: 3
      },
      color:{
        background: '#FFF',
        primary: '#66BB6A',
        grey: "#BDBDBD",
        lightgrey: "#F7F7F7",
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
          black: "#000",
          grey: "#BDBDBD"
        },
        size:{
          h1: 40,
          h2: 30,
          h2_5: 25,
          h3: 20,
          h3_5: 18,
          little: 13,
        }
      }
    },
    dark: {
    }
  };
export const defaultTheme = theme;  
export const ThemeContext = React.createContext(theme);