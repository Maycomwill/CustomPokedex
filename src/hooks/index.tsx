import { ReactNode } from "react";
import { PokedexContextProvider } from "../context/PokedexContext";
import { TypesContextProvider } from "../context/TypesContext";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <PokedexContextProvider>
      <TypesContextProvider>{children}</TypesContextProvider>
    </PokedexContextProvider>
  );
}

export default AppProvider;
