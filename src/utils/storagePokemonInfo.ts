import { PokemonDataProps } from "../interfaces/pokemonInterfaces";

export function storagePokemonInformation(
  pokemon: PokemonDataProps,
  state: React.Dispatch<React.SetStateAction<PokemonDataProps[]>>
) {
  // Console para mostrar as informações individuais dos pokemon
  // console.log("informações dos pokemon chegando na última função: ", pokemon);

  state((prev) => [
    ...prev,
    {
      name: pokemon.name,
      id: pokemon.id,
      sprite: pokemon.sprite,
      types: pokemon.types.map((type: any) => {
        return {
          type: type.type,
        };
      }),
    },
  ]);
}
