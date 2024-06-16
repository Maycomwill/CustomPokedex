import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import UniquePokemonPage from "../../components/UniquePokemonPage/UniquePokemonPage";
import { usePokedex } from "../../hooks/usePokedex";
import theme from "../../styles/theme";

export function Pokemon() {
  const { getPokemonData, uniquePokemonData } = usePokedex();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getPokemonData(params.pokemonname);
    if (uniquePokemonData == undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Loading color={theme.colors.primary[500]} size={64} />;
  } else {
    // console.log(uniquePokemonData.official_artwork.shiny)
    return (
      <>
        <UniquePokemonPage data={uniquePokemonData} />
      </>
    );
  }
}
