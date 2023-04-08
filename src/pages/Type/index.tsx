import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { usePokedex } from "../../hooks/usePokedex";
import { Loading } from "../../components/Loading/Loading";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import Text from "../../components/Text/Text";

export function Type() {
  const params = useParams();
  const { getTypeData, pokemonData } = usePokedex();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getTypeData(params.typename);
    if (pokemonData === undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Loading size={64} color="yellow" />;
  } else {
    return (
      <Container>
        <Text transform="capitalize" color="white" size="xxl">
          {params.typename} type page
        </Text>
        <div className="pokemonCard-wrapper">
          {pokemonData.map((pokemon) => {
            return (
              <PokemonCard
                key={`${pokemon.id}-${pokemon.name}`}
                id={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
                sprite={pokemon.sprite}
                primaryType={pokemon.types[0].type}
              />
            );
          })}
        </div>
      </Container>
    );
  }
}
