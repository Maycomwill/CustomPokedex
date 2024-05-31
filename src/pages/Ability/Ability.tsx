import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Text } from "../../components/Text/Text";
import { usePokedex } from "../../hooks/usePokedex";
import { Loading } from "../../components/Loading/Loading";
import theme from "../../styles/theme";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { BackToTop } from "../../components/BackToTop/BackToTop";

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

  if (pokemonAbilityCommon.length == 0) {
    return <Loading color={theme.colors.primary[500]} size={64} />;
  } else {
    return (
      <Container>
        <>
          <div className="abilityName">
            <Text
              transform="uppercase"
              size="xxl"
              color="primary"
              weight="bold"
            >
              {abilityInfo?.name.split("-").join(" ")}
            </Text>
          </div>
          <div className="descriptionDiv">
            <Text size="md">{abilityInfo?.description}</Text>
          </div>
          <div className="pokemonCommon">
            <Text size="lg">Pokemons que possuem esta habilidade: </Text>
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
            <Button.Root backgroundColor="delete" onClick={() => navigate(-1)}>
              <Button.Content text={"Voltar"} />
            </Button.Root>
          </div>
        </>
        <BackToTop />
      </Container>
    );
  }
}
