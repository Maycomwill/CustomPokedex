import { NamedAPIResource } from '@/interfaces/apiInterfaces';
import {
  PokedexGameProps,
  PokedexGameResponse,
} from '@/interfaces/gameInterfaces';
import { PokemonDataProps } from '@/interfaces/pokemonInterfaces';
import { pokeapi } from '@/services/api';
import { waitingPromises } from '@/utils/awaitPromises';
import axios, { AxiosError } from 'axios';
import { createContext, ReactNode, useState } from 'react';

export interface GameContextProps {
  getPokedexes: (pokedexes: string[]) => void;
  isLoading: boolean;
  dexes: PokedexGameProps[];
}

export const GameContext = createContext({} as GameContextProps);

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [dexes, setPokedexes] = useState<PokedexGameProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getPokedexes(pokedexes: string[]) {
    setIsLoading(true);
    setPokedexes([]); // Limpa o estado no início

    try {
      // Faz a requisição inicial para obter os dados básicos de cada pokédex
      const data = await axios.all<PokedexGameResponse>(
        pokedexes.map((pokedex) => getPokedexInformation(pokedex)),
      );

      // Mapeia cada pokédex para buscar os detalhes dos pokémons
      const updatedDexes = await Promise.all(
        data.map(async (pokedex) => {
          const dexUrls = pokedex.pokemon_entries.map((pokemon) => ({
            name: pokemon.pokemon_species.name,
            url: `${pokemon.pokemon_species.url.split('-species')[0]}/${pokemon.pokemon_species.url.split('-species/')[1]}`,
          }));

          // Aguarda todos os detalhes de pokemon_entries para este pokédex
          const pokemonEntries = await waitingPromises(dexUrls);

          return {
            ...pokedex,
            pokemon_entries: pokemonEntries,
          };
        }),
      );

      // Define o estado com todos os pokédexes processados e únicos
      setPokedexes(updatedDexes);
      return;
    } catch (error) {
      if (error instanceof AxiosError) {
        setPokedexes([]); // Reseta o estado no caso de erro
        return;
      }
    } finally {
      setIsLoading(false); // Finaliza o carregamento
    }
  }

  async function getPokedexInformation(id: string) {
    const { data } = await pokeapi.get(`/pokedex/${id}`);
    return data;
  }
  return (
    <GameContext.Provider value={{ isLoading, getPokedexes, dexes }}>
      {children}
    </GameContext.Provider>
  );
}
