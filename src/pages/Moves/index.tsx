import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles";
import useMoves from "../../hooks/useMoves";
import { Loading } from "../../components/Loading/Loading";
import theme from "../../styles/theme";
import { Text } from "../../components/Text/Text";
import { Spacer } from "../../components/Spacer/Spacer";
import CustomTooltip from "../../components/CustomTooltip/CustomTooltip";
import Physical from "../../assets/damage_class/physical.png";
import Special from "../../assets/damage_class/special.png";
import Status from "../../assets/damage_class/status.png";
import VSpacer from "../../components/Spacer/VSpacer";
import { TypeCard } from "../../components/TypeCard/TypeCard";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { BackToTop } from "../../components/BackToTop/BackToTop";
import { Button } from "../../components/Button";

function Moves() {
  const params = useParams();
  const { getMovesData, move, isLoading, moveCommonPokemon } = useMoves();
  const navigate = useNavigate();
  let moveName = params.moveName;

  useEffect(() => {
    {
      moveName && getMovesData(moveName);
    }
  }, []);

  function handleDamageClass(damage_class: "physical" | "special" | "status") {
    switch (damage_class) {
      case "physical":
        return (
          <div className="damage_class_wrapper">
            <img src={Physical} alt="Status type" />
          </div>
        );
      case "special":
        return (
          <div className="damage_class_wrapper">
            <img src={Special} alt="Status type" />
          </div>
        );
      case "physical":
        return (
          <div className="damage_class_wrapper">
            <img src={Status} alt="Status type" />
          </div>
        );
      default:
        return (
          <div>
            <img src={Status} alt="Status type" />
          </div>
        );
    }
  }

  if (isLoading || move === undefined) {
    return <Loading color={theme.colors.primary[500]} size={64} />;
  } else {
    return (
      <Container>
        <Text size="xl" weight="bold" transform="capitalize">
          {move.name.split("-").join(" ")}
        </Text>
        <div className="description">
          <Text size="md">{move.flavor_text_entries}</Text>
        </div>
        <Spacer />
        <div className="info">
          <div className="effect-entries">
            <Text>Efeito: {move.effect_entries}</Text>
            <div className="text-info">
              <Text>Chance: {move.effect_chance}%</Text>
              <Text transform="capitalize">
                Target: {move.target.name.split("-").join(" ")}
              </Text>
              <TypeCard pressable pokemonType={move.type.name} />
            </div>
          </div>
          <div className="attack-info">
            <div
              style={{
                display: "flex",
                gap: ".8rem",
                width: "100%",
              }}
            >
              <Text>Power:</Text>
              <div className="progress-info">
                <div
                  style={{
                    width: `${move.power}%`,
                    maxWidth: "100%",
                    backgroundColor: `${theme.colors.primary[500]}`,
                    borderRadius: ".4rem",
                  }}
                >
                  <Text size="md">{move.power}</Text>
                </div>
              </div>
            </div>
            <div className="text-info">
              <Text>PP: {move.pp}</Text>
              <Text>Acurácia: {move.accuracy}%</Text>
              <div className="vertical">
                <VSpacer />
              </div>
              <Text>Prioridade: {move.priority}</Text>
              <div className="vertical">
                <VSpacer />
              </div>
              <div className="damage_class_wrapper">
                <Text>Classe: </Text>
                <CustomTooltip arrow title={move.damage_class.name}>
                  {handleDamageClass(move.damage_class.name)}
                </CustomTooltip>
              </div>
            </div>
          </div>
        </div>
        <Spacer />
        <div className="pokemon">
          <Text>Pokémon que podem aprender essa técnica</Text>
          <div className="pokemonCard-wrapper">
            {moveCommonPokemon.length !== 0 ? (
              moveCommonPokemon.map((pokemon) => {
                return (
                  <PokemonCard
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    primaryType={pokemon.types[0].type}
                    sprite={pokemon.sprite}
                    types={pokemon.types}
                    pressable
                  />
                );
              })
            ) : (
              <Loading color={theme.colors.primary[500]} size={64} />
            )}
          </div>
        </div>
        <div className="backButton">
          <Button.Root backgroundColor="delete" onClick={() => navigate(-1)}>
            <Button.Content text={"Voltar"} />
          </Button.Root>
        </div>
        <BackToTop />
      </Container>
    );
  }
}

export default Moves;
