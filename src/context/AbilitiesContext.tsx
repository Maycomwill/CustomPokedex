import { createContext, ReactNode, useState } from 'react';
import {
  AbilityInfoProps,
  PokemonDataProps,
} from '../interfaces/pokemonInterfaces';
import { waitingPromises } from '../utils/awaitPromises';
import { pokeapi } from '../services/api';

export interface AbilityContextProps {
  getAbilityInfo: (ability: string) => void;
  abilityInfo: AbilityInfoProps | undefined;
  commonAbilityPokemon: PokemonDataProps[];
  isLoading: boolean;
}

export const AbilityContext = createContext({} as AbilityContextProps);

export function AbilityContextProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [abilityInfo, setAbilityInfo] = useState<AbilityInfoProps>();
  const [commonAbilityPokemon, setCommonAbilityPokemon] = useState<
    PokemonDataProps[]
  >([]);
  let rawPokemonData: PokemonDataProps[] = [];
  async function getAbilityInfo(ability: string | undefined) {
    setIsLoading(true);
    setCommonAbilityPokemon([]);
    rawPokemonData = [];
    const { data } = await pokeapi.get(`ability/${ability}`);
    let response = data.pokemon.map((pokemon: any) => {
      return { name: pokemon.pokemon.name, url: pokemon.pokemon.url };
    });
    waitingPromises(response).then((response) => {
      setCommonAbilityPokemon([]);

      rawPokemonData = response.sort((a, b) => {
        return a.id - b.id;
      });

      setCommonAbilityPokemon(rawPokemonData);
    });

    let description = data.effect_entries.find(
      (effect_element: {
        effect: string;
        language: { url: string; name: string };
      }) => {
        if (effect_element.language.name === 'en') {
          return effect_element.effect;
        }

        return '';
      },
    );

    console.log(data);

    setAbilityInfo({
      name: data.name,
      description: description ? description.effect : '',
    });

    return setIsLoading(false);
  }

  return (
    <AbilityContext.Provider
      value={{ getAbilityInfo, abilityInfo, commonAbilityPokemon, isLoading }}
    >
      {children}
    </AbilityContext.Provider>
  );
}
