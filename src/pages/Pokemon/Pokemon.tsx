import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import UniquePokemonPage from "../../components/UniquePokemonPage/UniquePokemonPage";
import { usePokedex } from "../../hooks/usePokedex";
import theme from "../../styles/theme";
import useEvolution from "../../hooks/useEvolution";

export function Pokemon() {
  const { getPokemonData, uniquePokemonData } = usePokedex();
  const { firstEvolution, secondEvolution, thirdEvolution } = useEvolution();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    getPokemonData(params.pokemonname);
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return <Loading color={theme.colors.primary[500]} size={64} />;
  } else {
    // console.log(uniquePokemonData);
    return (
      <>
        <UniquePokemonPage
          evolutions={{
            first: firstEvolution,
            second: secondEvolution,
            third: thirdEvolution,
          }}
          data={uniquePokemonData}
        />
      </>
    );
  }
}
