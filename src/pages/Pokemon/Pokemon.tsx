import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { TextStyled } from "../../components/Text/styles";
import { TypeCard } from "../../components/TypeCard/TypeCard";
import UniquePokemonPage from "../../components/UniquePokemonPage/UniquePokemonPage";
import { usePokedex } from "../../hooks/usePokedex";
import theme from "../../styles/theme";
import { Container } from "./styles";

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
    return <Loading color={theme.colors.yellow[500]} size={64} />;
  } else {
    return (
      <UniquePokemonPage
        abilities={uniquePokemonData.abilities}
        name={uniquePokemonData.name}
        id={uniquePokemonData.id}
        height={uniquePokemonData.height}
        official_artwork={uniquePokemonData.official_artwork}
        stats={uniquePokemonData.stats}
        sprite_default={uniquePokemonData.sprite_default}
        sprite_shiny={uniquePokemonData.sprite_shiny}
        types={uniquePokemonData.types}
        weight={uniquePokemonData.weight}
        key={uniquePokemonData.id}
      />
    );
  }
}
