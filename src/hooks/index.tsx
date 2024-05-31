import { ReactNode } from "react";
import { PokedexContextProvider } from "../context/PokedexContext";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return(
    <PokedexContextProvider>
      {children}
    </PokedexContextProvider>
  );
}

export default AppProvider;
