export interface EvolutionDetails {
  gender: number | null;
  held_item: NamedAPIResource | null;
  item: NamedAPIResource | null;
  known_move: NamedAPIResource | null;
  known_move_type: NamedAPIResource | null;
  location: NamedAPIResource | null;
  min_affection: number | null;
  min_beauty: number | null;
  min_happiness: number | null;
  min_level: number | null;
  needs_overworld_rain: boolean;
  party_species: NamedAPIResource | null;
  party_type: NamedAPIResource | null;
  relative_physical_stats: 1 | 0 | -1 | null;
  time_of_day: "Day" | "Night" | "";
  trade_species: NamedAPIResource | null;
  turn_upside_down: boolean;
  trigger: NamedAPIResource;
}

export interface EvolutionChainLink {
  evolution_details: EvolutionDetails[];
  evolves_to: EvolutionChainLink[];
  is_baby: boolean;
  species: NamedAPIResource;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}
