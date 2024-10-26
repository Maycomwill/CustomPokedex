import { ReactNode } from 'react';

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

export interface StatsChartDataPros {
  name: string;
  value: number;
}

export interface UniquePokemonData {
  name: string;
  id: number;
  sprite_default: string;
  sprite_shiny: string;
  official_artwork: {
    default: string;
    shiny: string;
  };
  types: typeProps[];
  weight: number;
  height: number;
  stats: statsProps[];
  chart_data: StatsChartDataPros[];
  abilities: abilityProps[];
  flavor: string;
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
  is_hidden: boolean;
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
}
