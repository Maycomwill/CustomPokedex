import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { usePokedex } from "../../hooks/usePokedex";
import { Loading } from "../../components/Loading/Loading";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { TextStyled } from "../../components/Text/styles";
import { Button } from "../../components/Button/Button";
import { BackToTop } from "../../components/BackToTop/BackToTop";

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
        <div className="pageTitle">
          <TextStyled color="white" size="xlg">
            Todos os Pokemon que são do tipo:{" "}
            <TextStyled
              transform="uppercase"
              color="yellow"
              size="xlg"
              weight="bold"
            >
              {params.typename}
            </TextStyled>
          </TextStyled>
          <div>
            <Button color="delete" onClick={() => history.back()} text="Voltar"/>
          </div>
        </div>
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
        <div className="backButton">
            <Button color="delete" onClick={() => history.back()} text="Voltar"/>

          </div>
          <BackToTop />
      </Container>
    );
  }
}
