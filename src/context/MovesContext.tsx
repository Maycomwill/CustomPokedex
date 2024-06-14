import { createContext, ReactNode, useState } from "react";
import { pokeapi } from "../services/api";
import { MoveProps } from "../interfaces/movesInterface";
import {
  PokedexDataProps,
  PokemonDataProps,
} from "../interfaces/pokemonInterfaces";
import { waitingPromises } from "../utils/awaitPromises";
import { storagePokemonInformation } from "../utils/storagePokemonInfo";

export interface MovesContextProps {
  getMovesData: (move: string) => void;
  move: MoveProps | undefined;
  moveCommonPokemon: PokemonDataProps[];
  isLoading: boolean;
}

export const MovesContext = createContext({} as MovesContextProps);

export function MovesContextProvider({ children }: { children: ReactNode }) {
  const [move, setMove] = useState<MoveProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [moveCommonPokemon, setCommonPokemon] = useState<PokemonDataProps[]>(
    []
  );
  async function getMovesData(move: string) {
    setIsLoading(true);
    const { data } = await pokeapi.get(`/move/${move}`);

    let newPokemonArray: PokedexDataProps[] = [];
    data.learned_by_pokemon.map((pokemon: PokedexDataProps) => {
      newPokemonArray.push({
        name: pokemon.name,
        url: pokemon.url,
      });
    });

    waitingPromises(newPokemonArray).then((response) => {
      let newArray = response.sort((a, b) => {
        return a.id - b.id;
      });
      setCommonPokemon([]);
      newArray.map((pokemon: PokemonDataProps) =>
        storagePokemonInformation(pokemon, setCommonPokemon)
      );
    });

    setMove({
      accuracy: data.accuracy,
      damage_class: data.damage_class,
      effect_chance: data.effect_chance,
      effect_entries: data.effect_entries[0].effect,
      flavor_text_entries:
        data.flavor_text_entries[0].language === "en"
          ? data.flavor_text_entries[0].flavor_text
          : data.flavor_text_entries[1].flavor_text,
      power: data.power,
      pp: data.pp,
      priority: data.priority,
      target: data.target,
      type: data.type,
      name: data.name,
    });

    setIsLoading(false);
  }

  return (
    <MovesContext.Provider
      value={{ getMovesData, move, moveCommonPokemon, isLoading }}
    >
      {children}
    </MovesContext.Provider>
  );
}
