import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextStyled } from "../../components/Text/styles";
import { usePokedex } from "../../hooks/usePokedex";
import { Loading } from "../../components/Loading/Loading";
import theme from "../../styles/theme";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Container } from "./styles";
import { Button } from "../../components/Button/Button";

export function Ability() {
  const params = useParams();
  const navigate = useNavigate();
  let abilityName = params.abilityname;

  const { getAbilityInfo, abilityInfo, pokemonAbilityCommon } = usePokedex();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAbilityInfo(abilityName);
    setIsLoading(false);
  }, []);

  if(pokemonAbilityCommon.length == 0) {
    return <Loading color={theme.colors.yellow[500]} size={64} />;
  } else {
    return (
      <Container>
        <>
          <div className="abilityName">
            <TextStyled cap="true" size="xxl" color="yellow" weight="bold">
              {abilityInfo?.name.split("-").join(" ")}
            </TextStyled>
          </div>
          <div className="descriptionDiv">
            <TextStyled size="xlg">
              {abilityInfo?.description}
            </TextStyled>
          </div>
          <div className="pokemonCommon">
            <TextStyled size="lg">
              Pokemons que possuem esta habilidade:{" "}
            </TextStyled>
          </div>
          <div className="pokemons">
            <>
              {pokemonAbilityCommon.map((pokemon) => {
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
            </>
          </div>
          <div className="backButton">
            <Button color="delete" onClick={() => navigate(-1)} text="Voltar"/>
          </div>
        </>
      </Container>
    );
  }
}
