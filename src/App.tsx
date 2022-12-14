import AppProvider from "./hooks";
import Index from "./pages";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <AppProvider>
        <GlobalStyle />
        <Index />
    </AppProvider>
  );
}

export default App;
