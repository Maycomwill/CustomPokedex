import { ReactNode } from "react";
import { PokedexContextProvider } from "../context/PokedexContext";
import { TypesContextProvider } from "../context/TypesContext";
import { GenerationContextProvider } from "../context/GenerationContext";
import { MovesContextProvider } from "../context/MovesContext";
import { AbilityContextProvider } from "../context/AbilitiesContext";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <PokedexContextProvider>
      <GenerationContextProvider>
        <TypesContextProvider>
          <AbilityContextProvider>
            <MovesContextProvider>{children}</MovesContextProvider>
          </AbilityContextProvider>
        </TypesContextProvider>
      </GenerationContextProvider>
    </PokedexContextProvider>
  );
}

export default AppProvider;
