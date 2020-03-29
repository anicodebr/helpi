import React from 'react'

const theme = {
    light: {
      color:{
        background: '#FFF',
        primary: '#66BB6A'
      },
      font:{
        color:{
          primary: '#66BB6A',
          secondary: "#FFF",
        },
        size:{
          h3: 20,
          little: 13,
        }
      }
    },
    dark: {
        color:{
            background: '#000',
            primary: '#FFF'
          },
          font:{
            color:{
              primary: "#FFF",
              secondary: "#000",
            },
            size:{
              h3: 20,
              little: 13,
            }
          }
    }
  };
export const defaultTheme = theme;  
export const ThemeContext = React.createContext(theme);