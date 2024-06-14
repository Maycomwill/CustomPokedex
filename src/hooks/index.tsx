import { ReactNode } from "react";
import { PokedexContextProvider } from "../context/PokedexContext";
import { TypesContextProvider } from "../context/TypesContext";
import { GenerationContextProvider } from "../context/GenerationContext";
import { MovesContextProvider } from "../context/MovesContext";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <PokedexContextProvider>
      <GenerationContextProvider>
        <TypesContextProvider>
          <MovesContextProvider>{children}</MovesContextProvider>
        </TypesContextProvider>
      </GenerationContextProvider>
    </PokedexContextProvider>
  );
}

export default AppProvider;
