import { useNavigate } from "react-router-dom";
import { UniquePokemonData } from "../../interfaces/pokemonInterfaces";
import theme from "../../styles/theme";
import { Button } from "../Button";
import { Text } from "../Text/Text";
import { TypeCard } from "../TypeCard/TypeCard";
import { Container } from "./styles";
import { Spacer } from "../Spacer/Spacer";
import { BackToTop } from "../BackToTop/BackToTop";

interface IUniquePokemonPage extends UniquePokemonData {
  firstType?: string;
  pressable?: boolean;
}

function UniquePokemonPage({
  name,
  abilities,
  height,
  id,
  official_artwork,
  sprite_default,
  sprite_shiny,
  stats,
  types,
  weight,
  pressable,
}: IUniquePokemonPage) {
  // Console log para mostrar os tipos do pokemon
  // console.log("Types:", types);

  function checkingIMG(url: string) {
    if (official_artwork == null) {
      return sprite_default;
    } else {
      return official_artwork;
    }
  }

  function addZeroes(num: number, len: number) {
    var numberWithZeroes = String(num);
    var counter = numberWithZeroes.length;

    while (counter < len) {
      numberWithZeroes = "0" + numberWithZeroes;

      counter++;
    }

    return numberWithZeroes;
  }

  const navigate = useNavigate();

  return (
    <Container>
      <div className="spritesDiv">
        <img src={checkingIMG(official_artwork)} alt={`${name} image`} />
      </div>
      <div className="infoWrapper">
        <div className="pokedexInfo">
          <Text size="xxl" weight="bold" transform="capitalize" id="name">
            {name?.split("-").join(" ")}
          </Text>
          <Text size="lg" transform="capitalize" id="id">
            #{addZeroes(id, 3)}
          </Text>
          <div className="typesWrapper">
            <div className="typesContainer">
              {types?.map((type) => {
                return (
                  <TypeCard
                    pressable={true}
                    pokemonType={type.type}
                    key={`${type.type}`}
                  />
                );
              })}
            </div>
          </div>
          <div className="flavorWrapper">
            <Text size="md">flavor here</Text>
          </div>
        </div>
      </div>
      <Spacer />
      <div className="detailsWrapper">
        <div className="infoCard">
          <Text size="md" transform="capitalize">
            Altura:
          </Text>
          <div className="info">
            <Text size="md">{(height * 0.1).toFixed(2)}m</Text>
          </div>
        </div>

        <div className="infoCard">
          <Text size="md" transform="capitalize">
            Peso:
          </Text>
          <div className="info">
            <Text size="md">{weight * 0.1}kg</Text>
          </div>
        </div>

        {abilities?.map((ability) => {
          return (
            <div className="infoCard" onClick={() => navigate(`/ability/${ability.ability.name}`)}>
              <Text size="md" transform="capitalize">
                Habilidade
              </Text>
              <div
                key={`${ability.ability.name}-${ability.slot}`}
                className="info"
              >
                <Text
                  size="md"
                  transform="capitalize"
                  className="abilityName"
                >
                  {ability.ability.name.split("-").join(" ")}
                </Text>
              </div>
            </div>
          );
        })}
      </div>

      <Spacer />
      <div className="statsWrapper">
        <div className="statsContainer">
          {stats?.map((stat) => {
            return (
              <div
                className="baseStatWrapper"
                key={`${stat.stat.name}-${stat.effort}`}
              >
                <Text size="md" transform="capitalize">
                  {stat.stat.name}
                </Text>
                <div className="baseStatDiv">
                  <div
                    style={{
                      width: `${stat.base_stat}%`,
                      maxWidth: "100%",
                      backgroundColor: `${theme.colors.primary[500]}`,
                      borderRadius: ".4rem",
                    }}
                  >
                    <Text size="md">{stat.base_stat}</Text>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Spacer />
      <div className="evolution-chain">
        <Text size="md">Evolution chain here</Text>
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

export default UniquePokemonPage;
