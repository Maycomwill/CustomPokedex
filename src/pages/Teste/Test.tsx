import { useEffect } from "react";
import useTypes from "../../hooks/useTypes";
import { PokemonDataProps } from "../../interfaces/pokemonInterfaces";
import useGeneration from "../../hooks/useGeneration";
import { NamedAPIResource } from "../../interfaces/apiInterfaces";

function Test() {
const{getTypeData, moves}=useTypes();
  useEffect(() => {
    getTypeData("fire");
  }, []);
  return (
    <div>
      Test
      <div>
        {moves && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {moves.map((move: NamedAPIResource) => {
              return <span key={move.url}>{move.name}</span>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
