import { useContext, createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pokeapi } from "../services/api";
import axios from "axios";

export interface PokedexContextDataProps {
  getGenerationFromUserChoice: (generation: string | undefined) => void;
  getPokedexList: (generation: string | undefined) => void;
  getPokemonData: (generation: string | undefined) => void;
  pokemonData: PokemonDataProps[];
  uniquePokemonData: UniquePokemonData;
}

interface PokedexDataProps {
  name: string;
  url: string;
}

export interface PokemonDataProps {
  name: string;
  id: number;
  sprite: string;
  types: typeProps[];
}

export interface typeProps {
  type: string;
}

interface PokedexProviderProps {
  children: ReactNode;
}

export interface UniquePokemonData {
  name: string;
  id: number;
  sprite_default: string;
  sprite_shiny: string;
  official_artwork: string;
  types: typeProps[];
  weight: number;
  height: number;
  stats: statsProps[];
  abilities: abilityProps[];
}

interface abilityProps {
  ability: {
    name: string;
    url: string;
  };
  slot: number;
}

interface statsProps {
  base_stat: number;
  effort: string;
  stat: {
    name: string;
  };
}

export const PokedexContext = createContext({} as PokedexContextDataProps);

export function PokedexContextProvider({ children }: PokedexProviderProps) {
  let rawPokemonData: PokemonDataProps[] = [];
  const [gen, setGen] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState();
  const [pokemonData, setPokemonData] = useState<PokemonDataProps[]>([]);
  const [uniquePokemonData, setUniquePokemonData] = useState<UniquePokemonData>(
    {} as UniquePokemonData
  );

  function getGenerationFromUserChoice(generation: string | undefined) {
    console.log("Geração selecionada pelo usuário:", generation);
    getPokedexList(generation);
  }

  async function getPokedexList(generation: string | undefined) {
    setPokemonData([]);
    let limitURL = "0";
    let offsetURL = "0";

    switch (generation) {
      case "1":
        limitURL = "151";
        offsetURL = "0";
        break;

      case "2":
        limitURL = "100";
        offsetURL = "151";
        break;

      case "3":
        limitURL = "125";
        offsetURL = "251";
        break;

      case "4":
        limitURL = "108";
        offsetURL = "386";
        break;

      case "5":
        limitURL = "155";
        offsetURL = "494";
        break;

      case "6":
        limitURL = "72";
        offsetURL = "649";
        break;

      case "7":
        limitURL = "88";
        offsetURL = "721";
        break;

      case "8":
        limitURL = "89";
        offsetURL = "809";
        break;
    }

    // Console para mostrar o limit e offset usados na requisição da API
    // console.log(
    //   "limit e offset selecionados de acordo com a geração:",
    //   limitURL,
    //   offsetURL
    // );

    const response = await pokeapi.get(
      `pokemon?limit=${limitURL}&offset=${offsetURL}`
    );
    const result = response.data.results;

    // Console para mostrar o resultado da consulta a API
    // console.log("resultado da consulta da api pokelist:", result);

    // result.map((pokemon: PokedexDataProps) => {
    //   getPokemonInformation(pokemon.name);
    // });
    rawPokemonData = [];
    waitingPromises(result).then((response) => {
      let newArray = rawPokemonData.sort((a, b) => {
        return a.id - b.id;
      });
      newArray.map((pokemon) => storagePokemonInformation(pokemon));
    });
  }

  function waitingPromises(results: PokedexDataProps[]) {
    return Promise.all(
      results.map((pokemon) => getPokemonInformation(pokemon.url))
    );
  }

  function getPokemonInformation(pokemonUrl: string) {
    return axios.get(pokemonUrl).then(function (response) {
      return rawPokemonData.push(response.data);
    });
  }

  // function getPokemonInformation(pokemonName: string) {
  //   return pokeapi.get(`pokemon/${pokemonName}`).then((result) => {
  //     storagePokemonInformation(result.data);
  //   });
  // }
  // async function getPokemonInformation(pokemonName: string) {
  //   const result = await pokeapi.get(`pokemon/${pokemonName}`);
  //   storagePokemonInformation(result.data);
  // }

  function storagePokemonInformation(pokemon: any) {
    // Console para mostrar as informações individuais dos pokemon
    // console.log("informações dos pokemon chegando na última função: ", pokemon);

    return setPokemonData((prev) => [
      ...prev,
      {
        name: pokemon.name,
        id: pokemon.id,
        sprite: pokemon.sprites.front_default,
        types: pokemon.types.map((type: any) => {
          return {
            type: type.type.name,
          };
        }),
      },
    ]);
  }

  async function getPokemonData(pokemon: string | undefined) {
    const result = await pokeapi.get(`pokemon/${pokemon}`);
    setUniquePokemonData({
      name: result.data.name,
      id: result.data.id,
      types: result.data.types.map((type: any) => {
        return {
          type: type.type.name,
        };
      }),
      weight: result.data.weight,
      height: result.data.height,
      sprite_default: result.data.sprites.front_default,
      sprite_shiny: result.data.sprites.front_shiny,
      official_artwork: result.data.sprites.other.dream_world.front_default,
      stats: result.data.stats.map((stat: statsProps) => {
        return {
          base_stat: stat.base_stat,
          effort: stat.effort,
          stat: {
            name: stat.stat.name,
          },
        };
      }),
      abilities: result.data.abilities.map((ability: any) => {
        return {
          ability: {
            name: ability.ability.name,
            url: ability.ability.url,
          },
          slot: ability.slot,
        };
      }),
    });
  }

  return (
    <PokedexContext.Provider
      value={{
        getGenerationFromUserChoice,
        getPokedexList,
        getPokemonData,
        pokemonData,
        uniquePokemonData,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}
