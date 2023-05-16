import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer/Footer";
import AppProvider from "./hooks";
import Index from "./pages";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppProvider>
        <GlobalStyle />
        <Index />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
