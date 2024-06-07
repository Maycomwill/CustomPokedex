import { useEffect } from "react";
import useTypes from "../../hooks/useTypes";
import { PokemonDataProps } from "../../interfaces/pokemonInterfaces";

function Test() {
  const { getTypeData, commonTypesPokemon } = useTypes();
  useEffect(() => {
    getTypeData("water");
  }, []);
  return (
    <div>
      Test
      <div>
        {commonTypesPokemon && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {commonTypesPokemon.map((pokemon: PokemonDataProps) => {
              return <span key={pokemon.id}>{pokemon.name}</span>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
