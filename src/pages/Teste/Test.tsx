import { useEffect } from "react";
import { usePokedex } from "../../hooks/usePokedex";
import useEvolution from "../../hooks/useEvolution";
import { Evolution } from "../../interfaces/evolutionInterface";

function Test() {
  const { getPokemonData, uniquePokemonData } = usePokedex();
  const { firstEvolution, secondEvolution, thirdEvolution } = useEvolution();
  useEffect(() => {
    getPokemonData("pichu");
  }, []);

  function renderEvolution(evolution: Evolution[] | undefined) {
    if (!evolution) {
      return <span />;
    }
    return evolution.map((_evolution) => {
      return (
        <div key={_evolution.name}>
          <img src={_evolution.sprites.default} />
        </div>
      );
    });
  }

  return (
    <div>
      Test secondEvolution{" "}
      <div>
        {uniquePokemonData && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>{uniquePokemonData.name}</span>

          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
