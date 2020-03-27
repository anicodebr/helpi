import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body.color} !important;
  }
  .toast{
    -webkit-text-fill-color: #ffffff;
    text-align: center;
  }
  .MuiFilledInput-underline:before {
    borderBottomColor: '#66BB6A';
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

// background-image: url(${({ theme }) => theme.body.image});
// transition: all 0.25s linear;
// -webkit-text-fill-color: ${({ theme }) => theme.body.textColor};