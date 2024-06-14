import { ReactNode } from "react";
import { PokedexContextProvider } from "../context/PokedexContext";
import { TypesContextProvider } from "../context/TypesContext";
import { GenerationContextProvider } from "../context/GenerationContext";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <PokedexContextProvider>
      <GenerationContextProvider>
        <TypesContextProvider>{children}</TypesContextProvider>
      </GenerationContextProvider>
    </PokedexContextProvider>
  );
}

export default AppProvider;
