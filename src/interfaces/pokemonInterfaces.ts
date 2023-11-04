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

export interface evolutionProps {
  name: string;
  sprite: {
    default: string;
    shiny: string;
  };
  min_level: number | null | undefined;
}

export interface damageRelationsProps {
  double_damage_to: string[];
  double_damage_from: string[];
  half_damage_from: string[];
  half_damage_to: string[];
  no_damage_from: string[];
  no_damage_to: string[];
  four_times_damage_from: string[];
  four_times_damage_to: string[];
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
  flavor: string;
  evolution_chain: evolutionProps[];
  damage_relation: damageRelationsProps;
  gender: {
    name: string;
    female: number;
    male: number;
  };
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
