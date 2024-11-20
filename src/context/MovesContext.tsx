import { createContext, ReactNode, useState } from 'react';
import { pokeapi } from '../services/api';
import { MoveProps } from '../interfaces/movesInterface';
import {
  PokedexDataProps,
  PokemonDataProps,
} from '../interfaces/pokemonInterfaces';
import { waitingPromises } from '../utils/awaitPromises';
import { AxiosError } from 'axios';
import { NamedAPIResource } from '@/interfaces/apiInterfaces';

export interface MovesContextProps {
  getMovesData: (move: string) => void;
  getMoves: (offset?: number, limit?: number) => void;
  moves: NamedAPIResource[];
  move: MoveProps | undefined;
  moveCommonPokemon: PokemonDataProps[];
  isLoading: boolean;
  total: number;
  previous: { offset: string; limit: string } | null;
  next: { offset: string; limit: string } | null;
}

export const MovesContext = createContext({} as MovesContextProps);

export function MovesContextProvider({ children }: { children: ReactNode }) {
  const [move, setMove] = useState<MoveProps>();
  const [moves, setMoves] = useState<NamedAPIResource[]>([]);
  const [total, setTotal] = useState(0);
  const [previous, setPrevious] = useState<{
    offset: string;
    limit: string;
  } | null>(null);
  const [next, setNext] = useState<{ offset: string; limit: string } | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [moveCommonPokemon, setCommonPokemon] = useState<PokemonDataProps[]>(
    [],
  );
  async function getMovesData(move: string) {
    setIsLoading(true);
    console.log('chegou');
    try {
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

      return setTimeout(() => setIsLoading(false), 2000);
    } catch (error) {
      if (error instanceof AxiosError) {
        setMove({} as MoveProps);
        location.replace('/');
        return setIsLoading(false);
      }
    }
  }

  async function getMoves(offset?: number, limit?: number) {
    setIsLoading(true);

    try {
      const { data } = await pokeapi.get(
        `/move?offset=${offset}&limit=${limit}`,
      );
      // //Next offset
      // console.log(data.next.split('offset=')[1].split('&')[0]);
      // // Next limit
      // console.log(data.next.split('limit=')[1]);

      setMoves(data.results);
      setTotal(data.count);
      setPrevious(
        data.previous
          ? {
              offset: data.previous.split('offset=')[1].split('&')[0],
              limit: data.previous.split('limit=')[1],
            }
          : null,
      );
      setNext(
        data.next
          ? {
              offset: data.next.split('offset=')[1].split('&')[0],
              limit: data.next.split('limit=')[1],
            }
          : null,
      );
      setIsLoading(false);
      return;
    } catch (error) {
      if (error instanceof AxiosError) {
        setMoves([]);
        setIsLoading(false);
        return error.message;
      }
    }
  }

  return (
    <MovesContext.Provider
      value={{
        getMovesData,
        getMoves,
        move,
        next,
        previous,
        total,
        moves,
        moveCommonPokemon,
        isLoading,
      }}
    >
      {children}
    </MovesContext.Provider>
  );
}
