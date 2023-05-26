import { ThemeProvider } from "styled-components";
import AppProvider from "./hooks";
import Index from "./pages";
import GlobalStyle from "./styles/global";
import { darkTheme } from "./styles/global";

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
