import { PokemonDataProps } from '@/interfaces/pokemonInterfaces';
import { pokeapi } from '@/services/api';
import { waitingPromisesById } from '@/utils/awaitPromises';
import { AxiosError } from 'axios';
import { get } from 'http';
import { createContext, ReactNode, useEffect, useState } from 'react';

export interface HighlightContextProps {
  highlights: PokemonDataProps[];
  isLoading: boolean;
}
interface DateFilterProps {
  date: string;
  ids: number[];
  pokemon: PokemonDataProps[];
}

export const HighlightsContext = createContext({} as HighlightContextProps);

export function HighlightsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [highlights, setHighlights] = useState<PokemonDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dateFilter, setDateFilter] = useState<DateFilterProps>(
    {} as DateFilterProps,
  );

  useEffect(() => {
    verifyDate();
  }, []);

  function verifyDate() {
    const today = new Date().toISOString().split('T')[0];
    // Verify if already exists highlights
    const storaged_date = localStorage.getItem('highlights_custom_pokedex');

    if (storaged_date === null || !storaged_date) {
      const ids = randomizeIds();
      const date = new Date().toISOString().split('T')[0];
      setDateFilter({ ids, date, pokemon: [] });
      localStorage.setItem(
        'highlights_custom_pokedex',
        JSON.stringify({ ids, date, pokemon: [] }),
      );
      getHighlights();
      return;
    } else {
      const parsed = JSON.parse(storaged_date);
      if (parsed.date < today) {
        const ids = randomizeIds();
        setDateFilter({ ids, date: today, pokemon: [] });
        localStorage.setItem(
          'highlights_custom_pokedex',
          JSON.stringify({ ids, date: today, pokemon: [] }),
        );
        getHighlights();
        return;
      }
      getHighlights();
      return;
    }
  }

  function randomizeIds() {
    const ids = [];
    for (let i = 0; i < 6; i++) {
      const id = Math.floor(Math.random() * 1010) + 1;
      ids.push(id);
    }
    return ids;
  }

  async function getHighlights() {
    const storage = localStorage.getItem('highlights_custom_pokedex');
    setIsLoading(true);
    if (storage === null) {
      return;
    }
    const parsed: DateFilterProps = JSON.parse(storage);
    try {
      waitingPromisesById(parsed.ids).then((response) => {
        setHighlights(response);
        console.log(response);
        setHighlights(response);
        setIsLoading(false);
        localStorage.setItem(
          'highlights_custom_pokedex',
          JSON.stringify({
            ...dateFilter,
            pokemon: response,
          }),
        );
      });
      setIsLoading(false);
      return;
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsLoading(false);
        setHighlights([]);
        return console.log(error.message);
      }
    }
  }
  return (
    <HighlightsContext.Provider value={{ highlights, isLoading }}>
      {children}
    </HighlightsContext.Provider>
  );
}
