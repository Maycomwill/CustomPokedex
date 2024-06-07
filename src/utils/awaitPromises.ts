import axios from "axios";
import {
  PokedexDataProps,
  PokemonDataProps,
} from "../interfaces/pokemonInterfaces";

let rawPokemonData: PokemonDataProps[] = [];

export async function waitingPromises(results: PokedexDataProps[]) {
  rawPokemonData = [];
  await axios.all(results.map((pokemon) => getPokemonInformation(pokemon.url)));
  return rawPokemonData;
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
