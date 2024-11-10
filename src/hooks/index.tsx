import { ReactNode } from 'react';
import { PokedexContextProvider } from '../context/PokedexContext';
import { TypesContextProvider } from '../context/TypesContext';
import { GenerationContextProvider } from '../context/GenerationContext';
import { MovesContextProvider } from '../context/MovesContext';
import { AbilityContextProvider } from '../context/AbilitiesContext';
import { EvolutionContextProvider } from '../context/EvolutionContext';
import { FormContextProvider } from '../context/FormsContexts';
import { HighlightsContextProvider } from '@/context/HighlightsContext';
import { GameContextProvider } from '@/context/GamesContext';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <EvolutionContextProvider>
      <FormContextProvider>
        <PokedexContextProvider>
          <GenerationContextProvider>
            <TypesContextProvider>
              <AbilityContextProvider>
                <MovesContextProvider>
                  <HighlightsContextProvider>
                    <GameContextProvider>{children}</GameContextProvider>
                  </HighlightsContextProvider>
                </MovesContextProvider>
              </AbilityContextProvider>
            </TypesContextProvider>
          </GenerationContextProvider>
        </PokedexContextProvider>
      </FormContextProvider>
    </EvolutionContextProvider>
  );
}

export default AppProvider;
