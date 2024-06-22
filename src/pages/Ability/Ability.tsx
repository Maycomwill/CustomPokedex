import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Text } from "../../components/Text/Text";
import { Loading } from "../../components/Loading/Loading";
import theme from "../../styles/theme";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { BackToTop } from "../../components/BackToTop/BackToTop";
import useAbility from "../../hooks/useAbility";

export function Ability() {
  const params = useParams();
  const navigate = useNavigate();
  let abilityName = params.abilityname;

  const { getAbilityInfo, abilityInfo, isLoading, commonAbilityPokemon } =
    useAbility();

  useEffect(() => {
    {
      abilityName && getAbilityInfo(abilityName);
    }
  }, []);

  if (abilityInfo === undefined || isLoading === true) {
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
              {abilityInfo.name.split("-").join(" ")}
            </Text>
          </div>
          <div className="descriptionDiv">
            <Text size="md">{abilityInfo.description}</Text>
          </div>
          <div className="pokemonCommon">
            <Text size="lg">Pokemons que possuem esta habilidade: </Text>
          </div>
          <div className="pokemons">
            {commonAbilityPokemon !== undefined ? (
              commonAbilityPokemon.map((pokemon) => {
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
              })
            ) : (
              <Loading color={theme.colors.primary[500]} size={64} />
            )}
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
