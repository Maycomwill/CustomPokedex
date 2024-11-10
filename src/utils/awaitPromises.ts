import axios from 'axios';
import {
  PokedexDataProps,
  PokemonDataProps,
} from '../interfaces/pokemonInterfaces';
import { FormDataSchema } from '../interfaces/formInterfaces';

let rawPokemonData: PokemonDataProps[] = [];
let rawFormPokemonData: FormDataSchema[] = [];

export async function waitingPromises(results: PokedexDataProps[]) {
  const rawPokemonData = await axios.all(
    results.map((pokemon) => getPokemonInformation(pokemon.url)),
  );
  return rawPokemonData;
}

export async function getPokemonInformation(pokemonUrl: string) {
  const response = await axios.get(pokemonUrl);
  return {
    name: response.data.name,
    id: response.data.id,
    sprite: response.data.sprites.front_default
      ? response.data.sprites.front_default
      : response.data.sprites.other['official-artwork'].front_default,
    types: response.data.types.map((type: any) => ({
      type: type.type.name,
    })),
  };
}

export async function waitingPromisesById(ids: number[]) {
  const rawPokemonData = await axios.all(
    ids.map((id) => getPokemonInformationById(id)),
  );
  return rawPokemonData;
}

export async function getPokemonInformationById(id: number) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return {
    name: response.data.name,
    id: response.data.id,
    sprite: response.data.sprites.front_default
      ? response.data.sprites.front_default
      : response.data.sprites.other['official-artwork'].front_default,
    types: response.data.types.map((type: any) => ({
      type: type.type.name,
    })),
  };
}

export async function waitingFormsPromises(results: PokedexDataProps[]) {
  const rawFormPokemonData = await axios.all(
    results.map((pokemon) => getFormsPokemonInformation(pokemon.url)),
  );
  return rawFormPokemonData;
}

export async function getFormsPokemonInformation(pokemonUrl: string) {
  const response = await axios.get(pokemonUrl);
  return {
    name: response.data.name,
    id: response.data.id,
    sprites: {
      default: {
        default: response.data.sprites.front_default
          ? response.data.sprites.front_default
          : response.data.sprites.other['official-artwork'].front_default,
        shiny: response.data.sprites.front_shiny
          ? response.data.sprites.front_shiny
          : response.data.sprites.other['official-artwork'].front_shiny,
      },
      home: {
        default: response.data.sprites.other.home.front_default
          ? response.data.sprites.other.home.front_default
          : response.data.sprites.front_default,
        shiny: response.data.sprites.other.home.front_shiny
          ? response.data.sprites.other.home.front_shiny
          : response.data.sprites.front_shiny,
      },
      artwork: {
        default: response.data.sprites.other['official-artwork'].front_default
          ? response.data.sprites.other['official-artwork'].front_default
          : response.data.sprites.front_default,
        shiny: response.data.sprites.other['official-artwork'].front_shiny
          ? response.data.sprites.other['official-artwork'].front_shiny
          : response.data.sprites.front_shiny,
      },
    },
  };
}
