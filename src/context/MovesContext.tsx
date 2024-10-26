import { createContext, ReactNode, useState } from 'react';
import { pokeapi } from '../services/api';
import { MoveProps } from '../interfaces/movesInterface';
import {
  PokedexDataProps,
  PokemonDataProps,
} from '../interfaces/pokemonInterfaces';
import { waitingPromises } from '../utils/awaitPromises';
import { AxiosError } from 'axios';

export interface MovesContextProps {
  getMovesData: (move: string) => void;
  move: MoveProps;
  moveCommonPokemon: PokemonDataProps[];
  isLoading: boolean;
}

export const MovesContext = createContext({} as MovesContextProps);

export function MovesContextProvider({ children }: { children: ReactNode }) {
  const [move, setMove] = useState<MoveProps>({} as MoveProps);
  const [isLoading, setIsLoading] = useState(false);
  const [moveCommonPokemon, setCommonPokemon] = useState<PokemonDataProps[]>(
    [],
  );
  async function getMovesData(move: string) {
    console.log('chegou');
    try {
      setIsLoading(true);
      const { data } = await pokeapi.get(`/move/${move}`);
      console.log(move);

      let newPokemonArray: PokedexDataProps[] = [];
      data.learned_by_pokemon.map((pokemon: PokedexDataProps) => {
        newPokemonArray.push({
          name: pokemon.name,
          url: pokemon.url,
        });
      });

      waitingPromises(newPokemonArray).then((response) => {
        setCommonPokemon([]);

        let newArray = response.sort((a, b) => {
          return a.id - b.id;
        });

        setCommonPokemon(newArray);
      });

      let { flavor_text } = data.flavor_text_entries.find(
        (flavor: {
          flavor_text: string;
          language: { url: string; name: string };
        }) => {
          if (flavor.language.name === 'en') {
            return flavor.flavor_text;
          }
          return '';
        },
      );
      // console.log(flavor_text);

      setMove({
        accuracy: data.accuracy,
        damage_class: data.damage_class,
        effect_chance: data.effect_chance,
        effect_entries: data.effect_entries[0].effect,
        flavor_text_entries: flavor_text,
        power: data.power,
        pp: data.pp,
        priority: data.priority,
        target: data.target,
        type: data.type,
        name: data.name,
      });

      return setIsLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        setMove({} as MoveProps);
        location.replace('/');
        return setIsLoading(false);
      }
    }
  }

  return (
    <MovesContext.Provider
      value={{ getMovesData, move, moveCommonPokemon, isLoading }}
    >
      {children}
    </MovesContext.Provider>
  );
}
