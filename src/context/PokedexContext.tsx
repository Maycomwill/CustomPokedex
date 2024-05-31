import { createContext, ReactNode, useState } from "react";
import { pokeapi } from "../services/api";
import axios, { AxiosResponse } from "axios";
import {
  AbilityInfoProps,
  damageRelationsProps,
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
  genTypeFilteredList: PokemonDataProps[];
}

//Criação do contexto
export const PokedexContext = createContext({} as PokedexContextDataProps);

//Criação do provedor do contexto, que será utilizado na criação do hook
export function PokedexContextProvider({ children }: PokedexProviderProps) {
  let firstSprite: AxiosResponse;
  let secondSprite: AxiosResponse | undefined;
  let thirdSprite: AxiosResponse | undefined;
  let rawPokemonData: PokemonDataProps[] = [];
  let genTypeFilter: PokemonDataProps[] = [];
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
  const [genTypeFilteredList, setGenTypeFilteredList] = useState<
    PokemonDataProps[]
  >([]);

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
      // console.log(newArray);
      newArray.map((pokemon) => storagePokemonInformation(pokemon));
    });
  }

  // Esta função retorna os resultados de todas as requisições quando prontas
  function waitingPromises(results: PokedexDataProps[]) {
    return axios.all(
      results.map((pokemon) => getPokemonInformation(pokemon.url))
    );
  }

  // Esta função busca na api os dados básicos do pokemon e retorna os dados já formatados
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

  async function getDamageRelation(type: { type: { name: string } }) {
    // console.log("tipo chamado", type.type.name);
    const result = await pokeapi.get(`type/${type.type.name}`);

    // console.log(result.data.damage_relations);

    const damage_relations = {
      double_damage_from: result.data.damage_relations.double_damage_from.map(
        (type: { name: string; url: string }) => type.name
      ),
      double_damage_to: result.data.damage_relations.double_damage_to.map(
        (type: { name: string; url: string }) => type.name
      ),
      half_damage_from: result.data.damage_relations.half_damage_from.map(
        (type: { name: string; url: string }) => type.name
      ),
      half_damage_to: result.data.damage_relations.half_damage_to.map(
        (type: { name: string; url: string }) => type.name
      ),
      no_damage_from: result.data.damage_relations.no_damage_from.map(
        (type: { name: string; url: string }) => type.name
      ),
      no_damage_to: result.data.damage_relations.no_damage_to.map(
        (type: { name: string; url: string }) => type.name
      ),
      four_times_damage_from: [],
      four_times_damage_to: [],
    };
    // console.log(damage_relations);

    return damage_relations;
  }

  // Esta função salva no estado os dados de um único pokemon
  async function getPokemonData(pokemonName: string | undefined) {
    var newPokemonName = pokemonName?.split("-");
    const result = await pokeapi.get(`pokemon/${pokemonName?.toLowerCase()}`);
    const extra_result = await pokeapi.get(
      `pokemon-species/${newPokemonName![0]?.toLowerCase()}`
    );
    // console.log("dados extra: ", extra_result.data);

    const evolutionData = await pokeapi.get(
      extra_result.data.evolution_chain.url
    );

    let objetos: damageRelationsProps = {
      double_damage_from: [],
      double_damage_to: [],
      half_damage_from: [],
      half_damage_to: [],
      no_damage_from: [],
      no_damage_to: [],
      four_times_damage_from: [],
      four_times_damage_to: [],
    };
    // console.log("evolution data: ", evolutionData.data);

    let damage_relations_objects: damageRelationsProps[] = [];

    result.data.types.map(async (type: any) => {
      await getDamageRelation(type)
        .then((result) => damage_relations_objects.push(result))
        .then(() => {
          objetos = combinedDamageObjects(damage_relations_objects);
          // console.log("Objetos combinados", objetos);
          damageRelationFilter(objetos);
          // console.log("Objetos filtrados", objetos);
        });
    });

    function combinedDamageObjects(
      damage_relations_objects: damageRelationsProps[]
    ): damageRelationsProps {
      let damage_relations: damageRelationsProps = {
        double_damage_from: [],
        double_damage_to: [],
        half_damage_from: [],
        half_damage_to: [],
        no_damage_from: [],
        no_damage_to: [],
        four_times_damage_from: [],
        four_times_damage_to: [],
      };

      damage_relations_objects.forEach((obj) => {
        damage_relations.double_damage_from.push(...obj.double_damage_from);
        damage_relations.double_damage_to.push(...obj.double_damage_to);
        damage_relations.half_damage_from.push(...obj.half_damage_from);
        damage_relations.half_damage_to.push(...obj.half_damage_to);
        damage_relations.no_damage_from.push(...obj.no_damage_from);
        damage_relations.no_damage_to.push(...obj.no_damage_to);
      });
      return damage_relations;
    }

    function damageRelationFilter(objeto: damageRelationsProps) {
      let double_from = objeto.double_damage_from;
      let double_to = objeto.double_damage_to;
      let half_from = objeto.half_damage_from;
      let half_to = objeto.half_damage_to;
      let no_damage_from = objeto.no_damage_from;
      let no_damage_to = objeto.no_damage_to;

      let new_double_from = double_from.filter(
        (type) => !half_from.includes(type)
      );
      let new_double_to = double_to.filter((type) => !half_to.includes(type));

      let four_times_damage_weakness = new_double_from.filter(
        (element, index) => {
          return new_double_from.indexOf(element) !== index;
        }
      );

      let four_times_damage_strenght = new_double_to.filter(
        (element, index) => {
          return new_double_to.indexOf(element) !== index;
        }
      );

      // console.log(four_times_damage_weakness)
      // console.log(four_times_damage_strenght)

      let unique_new_double_from = [...new Set(new_double_from)];
      let unique_new_double_to = [...new Set(new_double_to)];

      return (objetos = {
        ...objetos,
        double_damage_from: unique_new_double_from,
        double_damage_to: unique_new_double_to,
        four_times_damage_from: four_times_damage_weakness,
        four_times_damage_to: four_times_damage_strenght,
      });
    }

    let MIN_LEVEL_SECOND_EVOLUTION = null;
    try {
      MIN_LEVEL_SECOND_EVOLUTION =
        evolutionData.data.chain.evolves_to[0].evolution_details[0].min_level;
    } catch (error) {
      console.log("Erro level segunda evolução: ", error);
    }

    let MIN_LEVEL_THIRD_EVOLUTION = null;
    try {
      MIN_LEVEL_THIRD_EVOLUTION =
        evolutionData.data.chain.evolves_to[0].evolves_to[0]
          .evolution_details[0].min_level;
    } catch (error) {
      console.log("Erro level terceira evolução: ", error);
    }

    try {
      firstSprite = await pokeapi.get(
        `pokemon/${evolutionData.data.chain.species.name}`
      );
    } catch (error) {
      console.log(error);
    }

    if (MIN_LEVEL_SECOND_EVOLUTION !== null) {
      try {
        secondSprite = await pokeapi.get(
          `pokemon/${evolutionData.data.chain.evolves_to[0]?.species.name}`
        );
      } catch (error) {
        console.log(" Second evolution chain not founded");
        secondSprite = undefined;
      }
    }

    if (MIN_LEVEL_THIRD_EVOLUTION !== null) {
      try {
        thirdSprite = await pokeapi.get(
          `pokemon/${evolutionData.data.chain.evolves_to[0]?.evolves_to[0]?.species.name}`
        );
      } catch (error) {
        console.log("Third evolution chain not founded");
        thirdSprite = undefined;
      }
    }

    let pokemonGender: {
      pokemon_species: {
        name: string;
        url: string;
      };
      female_rate: number;
      male_rate: number;
    };

    let rawGender: {
      pokemon_species: {
        name: string;
        url: string;
      };
      rate: number;
    };
    const femaleGender: AxiosResponse = await pokeapi.get("/gender/1");
    const genderlessPokemon: AxiosResponse = await pokeapi.get("/gender/3");

    if (
      genderlessPokemon.data.pokemon_species_details.find(
        (pokemon: any) => pokemon.pokemon_species.name === newPokemonName![0]
      )
    ) {
      rawGender = genderlessPokemon.data.pokemon_species_details.find(
        (pokemon: any) => pokemon.pokemon_species.name === newPokemonName![0]
      );
      console.log("Genderless Pokemon");
      pokemonGender = {
        pokemon_species: {
          name: rawGender.pokemon_species.name,
          url: rawGender.pokemon_species.url,
        },
        female_rate: 0,
        male_rate: 0,
      };
    } else {
      if (
        femaleGender.data.pokemon_species_details.find(
          (pokemon: any) => pokemon.pokemon_species.name === newPokemonName![0]
        )
      ) {
        console.log("Gender founded");
        rawGender = femaleGender.data.pokemon_species_details.find(
          (pokemon: any) => pokemon.pokemon_species.name === newPokemonName![0]
        );
        pokemonGender = {
          pokemon_species: {
            name: rawGender.pokemon_species.name,
            url: rawGender.pokemon_species.url,
          },
          female_rate: (rawGender.rate * 100) / 8,
          male_rate: 100 - (rawGender.rate * 100) / 8,
        };
      } else {
        console.log("Male only");
        pokemonGender = {
          pokemon_species: {
            name: result.data.name,
            url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
          },
          female_rate: 0,
          male_rate: 100,
        };
      }
    }

    if (thirdSprite !== undefined && secondSprite !== undefined) {
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
        official_artwork: {
          default: result.data.sprites.other["official-artwork"].front_default,
          shiny: result.data.sprites.other["official-artwork"].front_shiny,
        },
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
        flavor: extra_result.data.flavor_text_entries[0].flavor_text,
        evolution_chain: [
          {
            min_level: null,
            name: evolutionData.data.chain.species.name,
            sprite: {
              default: firstSprite.data.sprites.front_default,
              shiny: firstSprite.data.sprites.front_shiny,
            },
          },
          {
            min_level: MIN_LEVEL_SECOND_EVOLUTION,
            name: evolutionData.data.chain.evolves_to[0].species.name,
            sprite: {
              default: secondSprite.data.sprites.front_default,
              shiny: secondSprite.data.sprites.front_shiny,
            },
          },
          {
            min_level: MIN_LEVEL_THIRD_EVOLUTION,
            name: evolutionData.data.chain.evolves_to[0].evolves_to[0].species
              .name,
            sprite: {
              default: thirdSprite.data.sprites.front_default,
              shiny: thirdSprite.data.sprites.front_shiny,
            },
          },
        ],
        damage_relation: objetos,
        gender: {
          name: pokemonGender.pokemon_species.name,
          female: pokemonGender.female_rate,
          male: pokemonGender.male_rate,
        },
      });
    } else if (secondSprite !== undefined) {
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
        official_artwork: {
          default: result.data.sprites.other["official-artwork"].front_default,
          shiny: result.data.sprites.other["official-artwork"].front_shiny,
        },
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
        flavor: extra_result.data.flavor_text_entries[0].flavor_text,
        evolution_chain: [
          {
            min_level: null,
            name: evolutionData.data.chain.species.name,
            sprite: {
              default: firstSprite.data.sprites.front_default,
              shiny: firstSprite.data.sprites.front_shiny,
            },
          },
          {
            min_level: MIN_LEVEL_SECOND_EVOLUTION,
            name: evolutionData.data.chain.evolves_to[0].species.name,
            sprite: {
              default: secondSprite.data.sprites.front_default,
              shiny: secondSprite.data.sprites.front_shiny,
            },
          },
        ],
        damage_relation: objetos,
        gender: {
          name: pokemonGender.pokemon_species.name,
          female: pokemonGender.female_rate,
          male: pokemonGender.male_rate,
        },
      });
    } else {
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
        official_artwork: {
          default: result.data.sprites.other["official-artwork"].front_default,
          shiny: result.data.sprites.other["official-artwork"].front_shiny,
        },
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
        flavor: extra_result.data.flavor_text_entries[0].flavor_text,
        evolution_chain: [
          {
            min_level: null,
            name: evolutionData.data.chain.species.name,
            sprite: {
              default: firstSprite?.data.sprites.front_default,
              shiny: firstSprite?.data.sprites.front_shiny,
            },
          },
        ],
        damage_relation: objetos,
        gender: {
          name: pokemonGender.pokemon_species.name,
          female: pokemonGender.female_rate,
          male: pokemonGender.male_rate,
        },
      });
    }
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
      // console.log(newArray);
      setPokemonData([]);
      newArray.map((pokemon) => storagePokemonInformation(pokemon));
    });
  }

  function handleFilterGenType(typeName: string) {
    // console.log("função chamada:", type)
    genTypeFilter =
      typeName.length > 0
        ? pokemonData.filter((pokemon) =>
            pokemon.types.some(
              (type) => type.type.toLowerCase() === typeName.toLowerCase()
            )
          )
        : [];
    // console.log(genTypeFilter);
    setGenTypeFilteredList(genTypeFilter);
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
        genTypeFilteredList,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}
