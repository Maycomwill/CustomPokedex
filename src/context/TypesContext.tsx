import { createContext, ReactNode, useState } from "react";
import {
  PokedexDataProps,
  PokemonDataProps,
  typeProps,
} from "../interfaces/pokemonInterfaces";
import { pokeapi } from "../services/api";
import { waitingPromises } from "../utils/awaitPromises";
import { storagePokemonInformation } from "../utils/storagePokemonInfo";

export interface TypesContextProps {
  types: typeProps[] | undefined;
  commonTypesPokemon: PokemonDataProps[];
  getTypeData: (type: string) => void;
}

export const TypesContext = createContext({} as TypesContextProps);

export function TypesContextProvider({ children }: { children: ReactNode }) {
  let rawPokemonData: PokemonDataProps[] = [];
  const [commonTypesPokemon, setCommonTypesPokemon] = useState<
    PokemonDataProps[]
  >([]);
  const [types, setTypes] = useState<typeProps[]>();

  //Esta função busca na api os dados de um tipo e armazena os dados dos pokemon que possuem o mesmo tipo
  async function getTypeData(type: string) {
    const { data } = await pokeapi.get(`/type/${type}`);
    const pokemonTypeCommon: { pokemon: PokedexDataProps; slot: number }[] =
      data.pokemon;
    let newPokemonTypeArray: PokedexDataProps[] = [];
    pokemonTypeCommon.map(
      (pokemon: { pokemon: PokedexDataProps; slot: number }) => {
        newPokemonTypeArray.push({
          name: pokemon.pokemon.name,
          url: pokemon.pokemon.url,
        });
      }
    );

    waitingPromises(newPokemonTypeArray).then((response) => {
      let newArray = response.sort((a, b) => {
        return a.id - b.id;
      });
      console.log(newArray);
      setCommonTypesPokemon([]);
      newArray.map((pokemon: PokemonDataProps) =>
        storagePokemonInformation(pokemon, setCommonTypesPokemon)
      );
    });
  }

  return (
    <TypesContext.Provider value={{ commonTypesPokemon, types, getTypeData }}>
      {children}
    </TypesContext.Provider>
  );
}
