import { useEffect } from "react";
import useTypes from "../../hooks/useTypes";
import { PokemonDataProps } from "../../interfaces/pokemonInterfaces";
import useGeneration from "../../hooks/useGeneration";

function Test() {
  const { getGenerationFromUserChoice, pokemonData} = useGeneration();
  useEffect(() => {
    getGenerationFromUserChoice("1");
  }, []);
  return (
    <div>
      Test
      <div>
        {pokemonData && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {pokemonData.map((pokemon: PokemonDataProps) => {
              return <span key={pokemon.id}>{pokemon.name}</span>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
