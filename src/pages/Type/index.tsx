import { useEffect, useState } from "react";
import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { usePokedex } from "../../hooks/usePokedex";
import { Loading } from "../../components/Loading/Loading";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Text } from "../../components/Text/Text";
import { Button } from "../../components/Button/Button";
import { BackToTop } from "../../components/BackToTop/BackToTop";
import theme from "../../styles/theme";

export function Type() {
  const params = useParams();
  const { getTypeData, pokemonData } = usePokedex();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getTypeData(params.typename);
    setTimeout(()=>{setIsLoading(false)}, 2000)
  }, []);

  if (isLoading) {
    return <Loading color={theme.colors.primary[500]} size={64} />;
  } else {
    return (
      <Container>
        <div className="pageTitle">
          <Text color="white" size="lg">
            Todos os Pokemon que são do tipo:{" "}
            <Text
              transform="uppercase"
              color="primary"
              size="lg"
              weight="bold"
            >
              {params.typename}
            </Text>
          </Text>
          <div>
            <Button
              color="delete"
              onClick={() => history.back()}
              text="Voltar"
            />
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
          <Button color="delete" onClick={() => history.back()} text="Voltar" />
        </div>
        <BackToTop />
      </Container>
    );
  }
}
