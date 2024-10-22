import { createContext, ReactNode, useState } from 'react';
import { pokeapi } from '../services/api';
import axios, { AxiosResponse } from 'axios';
import {
  AbilityInfoProps,
  abilityProps,
  damageRelationsProps,
  PokedexDataProps,
  PokedexProviderProps,
  PokemonDataProps,
  statsProps,
  UniquePokemonData,
} from '../interfaces/pokemonInterfaces';
import useEvolution from '../hooks/useEvolution';
import { NamedAPIResource } from '../interfaces/apiInterfaces';
import { useForms } from '../hooks/useForms';

//Interface do Provedor
export interface PokedexContextDataProps {
  getPokemonData: (pokemonName: string | undefined) => void;
  handleFilterGenType: (type: string, array: PokemonDataProps[]) => void;
  pokemonData: PokemonDataProps[];
  uniquePokemonData: UniquePokemonData | undefined;
  genTypeFilteredList: PokemonDataProps[];
}

//Criação do contexto
export const PokedexContext = createContext({} as PokedexContextDataProps);

//Criação do provedor do contexto, que será utilizado na criação do hook
export function PokedexContextProvider({ children }: PokedexProviderProps) {
  let rawPokemonData: PokemonDataProps[] = [];
  let genTypeFilter: PokemonDataProps[] = [];
  const { getEvolutionChainData } = useEvolution();
  const { getForms } = useForms();

  const [pokemonData, setPokemonData] = useState<PokemonDataProps[]>([]);
  const [uniquePokemonData, setUniquePokemonData] =
    useState<UniquePokemonData>();
  const [genTypeFilteredList, setGenTypeFilteredList] = useState<
    PokemonDataProps[]
  >([]);

  // Esta função busca na api os dados básicos do pokemon e retorna os dados já formatados
  async function getPokemonInformation(pokemonUrl: string) {
    return await axios.get(pokemonUrl).then(function (response) {
      return rawPokemonData.push({
        name: response.data.name,
        id: response.data.id,
        sprite:
          response.data.sprites.front_default !== null
            ? response.data.sprites.front_default
            : response.data.sprites.other['official-artwork'].front_default,
        types: response.data.types.map((type: any) => {
          return {
            type: type.type.name,
          };
        }),
      });
    });
  }

  async function getDamageRelation(type: { type: { name: string } }) {
    // console.log("tipo chamado", type.type.name);
    const result = await pokeapi.get(`type/${type.type.name}`);

    // console.log(result.data.damage_relations);

    const damage_relations = {
      double_damage_from: result.data.damage_relations.double_damage_from.map(
        (type: { name: string; url: string }) => type.name,
      ),
      double_damage_to: result.data.damage_relations.double_damage_to.map(
        (type: { name: string; url: string }) => type.name,
      ),
      half_damage_from: result.data.damage_relations.half_damage_from.map(
        (type: { name: string; url: string }) => type.name,
      ),
      half_damage_to: result.data.damage_relations.half_damage_to.map(
        (type: { name: string; url: string }) => type.name,
      ),
      no_damage_from: result.data.damage_relations.no_damage_from.map(
        (type: { name: string; url: string }) => type.name,
      ),
      no_damage_to: result.data.damage_relations.no_damage_to.map(
        (type: { name: string; url: string }) => type.name,
      ),
      four_times_damage_from: [],
      four_times_damage_to: [],
    };
    // console.log(damage_relations);

    return damage_relations;
  }

  // Esta função salva no estado os dados de um único pokemon
  async function getPokemonData(pokemonName: string | undefined) {
    var newPokemonName = pokemonName?.split('-');

    const result = await pokeapi.get(`pokemon/${pokemonName?.toLowerCase()}`);
    const extra_result = await axios.get(result.data.species.url);
    // console.log("dados extra: ", extra_result.data);

    getEvolutionChainData(extra_result.data.evolution_chain.url);
    getForms(extra_result.data.varieties);
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
      damage_relations_objects: damageRelationsProps[],
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
        (type) => !half_from.includes(type),
      );
      let new_double_to = double_to.filter((type) => !half_to.includes(type));

      let four_times_damage_weakness = new_double_from.filter(
        (element, index) => {
          return new_double_from.indexOf(element) !== index;
        },
      );

      let four_times_damage_strenght = new_double_to.filter(
        (element, index) => {
          return new_double_to.indexOf(element) !== index;
        },
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
    const femaleGender: AxiosResponse = await pokeapi.get('/gender/1');
    const genderlessPokemon: AxiosResponse = await pokeapi.get('/gender/3');

    if (
      genderlessPokemon.data.pokemon_species_details.find(
        (pokemon: any) => pokemon.pokemon_species.name === newPokemonName![0],
      )
    ) {
      rawGender = genderlessPokemon.data.pokemon_species_details.find(
        (pokemon: any) => pokemon.pokemon_species.name === newPokemonName![0],
      );
      // console.log("Genderless Pokemon");
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
          (pokemon: any) => pokemon.pokemon_species.name === newPokemonName![0],
        )
      ) {
        rawGender = femaleGender.data.pokemon_species_details.find(
          (pokemon: any) => pokemon.pokemon_species.name === newPokemonName![0],
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
        // console.log("Male only");
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

    let flavor_text = extra_result.data.flavor_text_entries.find(
      (flavor: {
        flavor_text: string;
        language: NamedAPIResource;
        version: NamedAPIResource;
      }) => flavor.language.name === 'en',
    );

    return setUniquePokemonData({
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
        default: result.data.sprites.other['official-artwork'].front_default,
        shiny: result.data.sprites.other['official-artwork'].front_shiny,
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
      abilities: result.data.abilities.map((ability: abilityProps) => {
        return {
          ability: {
            name: ability.ability.name,
            url: ability.ability.url,
          },
          is_hidden: ability.is_hidden,

          slot: ability.slot,
        };
      }),
      flavor: flavor_text.flavor_text,
      damage_relation: objetos,
      gender: {
        name: pokemonGender.pokemon_species.name,
        female: pokemonGender.female_rate,
        male: pokemonGender.male_rate,
      },
      chart_data: result.data.stats.map((stat: statsProps) => {
        return {
          name: stat.stat.name,
          value: stat.base_stat,
        };
      }),
    });
  }

  function handleFilterGenType(typeName: string, array: PokemonDataProps[]) {
    // console.log("função chamada:", typeName)
    genTypeFilter = array.filter((pokemon) =>
      pokemon.types.some(
        (type) => type.type.toLowerCase() === typeName.toLowerCase(),
      ),
    );
    setGenTypeFilteredList(genTypeFilter);
  }

  return (
    //Retorno do provedor do contexto, disponibilizando todas as funções e variáveis necessárias para montar os componentes
    <PokedexContext.Provider
      value={{
        getPokemonData,
        handleFilterGenType,
        pokemonData,
        uniquePokemonData,
        genTypeFilteredList,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}
