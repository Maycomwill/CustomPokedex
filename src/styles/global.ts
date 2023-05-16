import { ThemeProps, createGlobalStyle } from 'styled-components';
import theme from './theme';

import { DefaultTheme } from "styled-components";

interface MyTheme extends DefaultTheme {
  background: string;
  text: string;
}

export const lightTheme: MyTheme = {
  background: '#f5f5f5',
  text: '#212121'
};

export const darkTheme: MyTheme = {
  background: '#212121',
  text: '#f5f5f5'
};


const GlobalStyle = createGlobalStyle<ThemeProps<MyTheme>>`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%
  }

  body {
    background: ${(props)=> props.theme.background};
    color: ${(props)=> props.theme.text};
    overflow-x: hidden;

    /* width */
::-webkit-scrollbar {
  width: 1rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${theme.colors.gray[800]};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${theme.colors.gray[400]};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${theme.backgroundCard.fire};
}
  }

  body * {
    font-family: 'Poppins', Sans-Serif;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
