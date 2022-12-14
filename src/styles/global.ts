import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%
  }

  body {
    background: ${theme.colors.gray[900]};
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
    color: ${theme.colors.gray[100]}
  }
`;

export default GlobalStyle;
