import axios from "axios";
import {
  PokedexDataProps,
  PokemonDataProps,
} from "../interfaces/pokemonInterfaces";
import { FormDataSchema } from "../interfaces/formInterfaces";

let rawPokemonData: PokemonDataProps[] = [];
let rawFormPokemonData: FormDataSchema[] = [];

export async function waitingPromises(results: PokedexDataProps[]) {
  rawPokemonData = [];
  await axios.all(results.map((pokemon) => getPokemonInformation(pokemon.url)));
  return rawPokemonData;
}

export async function waitingFormsPromises(results: PokedexDataProps[]) {
  rawFormPokemonData = [];

  await axios.all(results.map((pokemon) => getFormsPokemonInformation(pokemon.url)));
  return rawFormPokemonData;
}

export async function getFormsPokemonInformation(pokemonUrl: string) {
  return await axios.get(pokemonUrl).then(function (response) {
    return rawFormPokemonData.push({
      name: response.data.name,
      id: response.data.id,
      sprites: {
        default: {
          default: response.data.sprites.front_default
            ? response.data.sprites.front_default
            : response.data.sprites.other["official-artwork"].front_default,
          shiny: response.data.sprites.front_shiny
            ? response.data.sprites.front_shiny
            : response.data.sprites.other["official-artwork"].front_shiny,
        },
        artwork: {
          default:
            response.data.sprites.other["official-artwork"].front_default,
          shiny: response.data.sprites.other["official-artwork"].front_shiny,
        },
      },
    });
  });
}

export async function getPokemonInformation(pokemonUrl: string) {
  return await axios.get(pokemonUrl).then(function (response) {
    return rawPokemonData.push({
      name: response.data.name,
      id: response.data.id,
      sprite: `${
        response.data.sprites.front_default
          ? response.data.sprites.front_default
          : response.data.sprites.other["official-artwork"].front_default
      }`,
      types: response.data.types.map((type: any) => {
        return {
          type: type.type.name,
        };
      }),
    });
  });
}
