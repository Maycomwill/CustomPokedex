import { ReactNode } from "react";

export interface PokedexDataProps {
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

export interface PokedexProviderProps {
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
  flavor: string
}

export interface abilityProps {
  ability: {
    name: string;
    url: string;
  };
  slot: number;
}

export interface statsProps {
  base_stat: number;
  effort: string;
  stat: {
    name: string;
  };
}

export interface AbilityInfoProps {
  name: string;
  description: string;
  pokemon?: PokemonDataProps[];
}
