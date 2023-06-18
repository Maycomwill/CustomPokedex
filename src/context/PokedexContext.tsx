import { createContext, ReactNode, useState } from "react";
import { pokeapi } from "../services/api";
import axios from "axios";
import {
  AbilityInfoProps,
  PokedexDataProps,
  PokedexProviderProps,
  PokemonDataProps,
  statsProps,
  UniquePokemonData,
} from "../interfaces/pokemonInterfaces";

//Interface do Provedor
export interface PokedexContextDataProps {
  getGenerationFromUserChoice: (generation: string | undefined) => void;
  getPokedexList: (generation: string | undefined) => void;
  getPokemonData: (pokemonName: string | undefined) => void;
  getAbilityInfo: (ability: string | undefined) => void;
  getTypeData: (type: string | undefined) => void;
  handleFilterGenType: (type: string) => void;
  pokemonData: PokemonDataProps[];
  uniquePokemonData: UniquePokemonData;
  abilityInfo: AbilityInfoProps | undefined;
  pokemonAbilityCommon: PokemonDataProps[];
  genTypeFilteredList: PokemonDataProps[]
}

//Criação do contexto
export const PokedexContext = createContext({} as PokedexContextDataProps);

//Criação do provedor do contexto, que será utilizado na criação do hook
export function PokedexContextProvider({ children }: PokedexProviderProps) {
  let rawPokemonData: PokemonDataProps[] = [];
  let genTypeFilter: PokemonDataProps[] = []
  const [abilityInfo, setAbilityInfo] = useState<AbilityInfoProps | undefined>(
    undefined
  );
  const [pokemonAbilityCommon, setPokemonAbilityCommon] = useState<
    PokemonDataProps[]
  >([]);
  const [pokemonData, setPokemonData] = useState<PokemonDataProps[]>([]);
  const [uniquePokemonData, setUniquePokemonData] = useState<UniquePokemonData>(
    {} as UniquePokemonData
  );
  const [genTypeFilteredList, setGenTypeFilteredList] = useState<PokemonDataProps[]>([])

  //Função que recebe do front-end a escolha inicial do usuário
  function getGenerationFromUserChoice(generation: string | undefined) {
    console.log("Geração selecionada pelo usuário:", generation);
    getPokedexList(generation);
  }

  //Função inicial utilizada para determinar os parâmetros da API definindo a geração de Pokemon que será buscada
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
        limitURL = "135";
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
        limitURL = "96";
        offsetURL = "809";
        break;

      case "9":
        limitURL = "105";
        offsetURL = "905";
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
      console.log(newArray);
      newArray.map((pokemon) => storagePokemonInformation(pokemon));
    });
  }

  // Esta função retorna os resultados de todas as requisições quando prontas
  function waitingPromises(results: PokedexDataProps[]) {
    return axios.all(
      results.map((pokemon) => getPokemonInformation(pokemon.url))
    );
  }

  // Esta função busca na api os dados do pokemon e retorna os dados já formatados
  async function getPokemonInformation(pokemonUrl: string) {
    return await axios.get(pokemonUrl).then(function (response) {
      if (response.data.sprites.front_default != null) {
        return rawPokemonData.push({
          name: response.data.name,
          id: response.data.id,
          sprite: response.data.sprites.front_default,
          types: response.data.types.map((type: any) => {
            return {
              type: type.type.name,
            };
          }),
        });
      } else {
        return rawPokemonData.push({
          name: response.data.name,
          id: response.data.id,
          sprite: response.data.sprites.other["official-artwork"].front_default,
          types: response.data.types.map((type: any) => {
            return {
              type: type.type.name,
            };
          }),
        });
      }
    });
  }

  // Esta função salva no estado os dados dos pokemon
  function storagePokemonInformation(pokemon: any) {
    // Console para mostrar as informações individuais dos pokemon
    // console.log("informações dos pokemon chegando na última função: ", pokemon);

    return setPokemonData((prev) => [
      ...prev,
      {
        name: pokemon.name,
        id: pokemon.id,
        sprite: pokemon.sprite,
        types: pokemon.types.map((type: any) => {
          return {
            type: type.type,
          };
        }),
      },
    ]);
  }

  // Esta função salva no estado os dados de um único pokemon
  async function getPokemonData(pokemonName: string | undefined) {
    const result = await pokeapi.get(`pokemon/${pokemonName?.toLowerCase()}`);
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
      official_artwork:
        result.data.sprites.other["official-artwork"].front_default,
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

  //Esta função busca na api os dados de uma habilidade e salva esses dados em um estado
  async function getAbilityInfo(ability: string | undefined) {
    setPokemonAbilityCommon([]);
    let description = "";
    rawPokemonData = [];
    const result = await pokeapi.get(`ability/${ability}`);
    let response = result.data.pokemon.map((pokemon: any) => {
      return { name: pokemon.pokemon.name, url: pokemon.pokemon.url };
    });
    waitingPromises(response);

    if (result.data.effect_entries[0].language.name === "en") {
      description = result.data.effect_entries[0].effect;
    } else {
      description = result.data.effect_entries[1].effect;
    }

    setAbilityInfo({
      name: result.data.name,
      description: description,
      pokemon: [],
    });

    storagePokemonAbilityCommon();
  }

  //Esta função organiza e retorna os pokemon que possuem a mesma habilidade
  function storagePokemonAbilityCommon() {
    setTimeout(() => {
      rawPokemonData
        .sort((a, b) => {
          return a.id - b.id;
        })
        .map((pokemon) => {
          return setPokemonAbilityCommon((prev) => [
            ...prev,
            {
              name: pokemon.name,
              id: pokemon.id,
              sprite: pokemon.sprite,
              types: pokemon.types.map((type: any) => {
                return {
                  type: type.type,
                };
              }),
            },
          ]);
        }),
        console.log(rawPokemonData);
    }, 500);
  }

  //Esta função busca na api os dados de um tipo e armazena os dados dos pokemon que possuem o mesmo tipo
  async function getTypeData(type: string | undefined) {
    const consult = await pokeapi.get(`/type/${type}`);
    const pokemonTypeCommon = consult.data.pokemon;
    let newPokemonTypeArray: any = [];
    pokemonTypeCommon.map((pokemon: any) =>
      newPokemonTypeArray.push(pokemon.pokemon)
    );
    waitingPromises(newPokemonTypeArray).then((response) => {
      let newArray = rawPokemonData.sort((a, b) => {
        return a.id - b.id;
      });
      console.log(newArray);
      setPokemonData([]);
      newArray.map((pokemon) => storagePokemonInformation(pokemon));
    });
  }

  function handleFilterGenType(typeName: string) {
    // console.log("função chamada:", type)
    genTypeFilter = (typeName.length > 0) ? pokemonData.filter((pokemon)=>pokemon.types.some((type)=> type.type.toLowerCase() === typeName.toLowerCase())) : [];
    console.log(genTypeFilter)
    setGenTypeFilteredList(genTypeFilter)
  }

  return (
    //Retorno do provedor do contexto, disponibilizando todas as funções e variáveis necessárias para montar os componentes
    <PokedexContext.Provider
      value={{
        getGenerationFromUserChoice,
        getPokedexList,
        getPokemonData,
        getAbilityInfo,
        getTypeData,
        handleFilterGenType,
        pokemonData,
        uniquePokemonData,
        abilityInfo,
        pokemonAbilityCommon,
        genTypeFilteredList
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}
