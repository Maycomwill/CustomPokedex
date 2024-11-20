import { NamedAPIResource } from './apiInterfaces';
import { PokemonDataProps } from './pokemonInterfaces';

export interface PokedexGameResponse {
  descriptions: Description[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon_entries: Pokemonentry[];
  region: NamedAPIResource;
  version_groups: NamedAPIResource[];
}

export interface PokedexGameProps {
  descriptions: Description[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon_entries: PokemonDataProps[];
  region: NamedAPIResource;
  version_groups: NamedAPIResource[];
}

export interface Pokemonentry {
  entry_number: number;
  pokemon_species: NamedAPIResource;
}

export interface Name {
  language: NamedAPIResource;
  name: string;
}

export interface Description {
  description: string;
  language: NamedAPIResource;
}
