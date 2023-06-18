import { useNavigate } from "react-router-dom";
import { UniquePokemonData } from "../../interfaces/pokemonInterfaces";
import theme from "../../styles/theme";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { TypeCard } from "../TypeCard/TypeCard";
import { Container } from "./styles";

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
    }
    return official_artwork;
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
          <Text size="lg" transform="capitalize">
            Nome: {name?.split("-").join(" ")}
          </Text>
          <Text size="lg" transform="capitalize">
            id: #{addZeroes(id, 3)}
          </Text>
          <Text size="lg" transform="capitalize">
            Altura: {height * 10}cm
          </Text>
          <Text size="lg" transform="capitalize">
            Peso: {weight / 10}kg
          </Text>
        </div>
        <div className="typesWrapper">
          <Text size="lg" transform="capitalize">
            tipos:
          </Text>
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
      </div>

      <div className="abilitiesContainer">
        <Text size="lg" transform="capitalize">
          Habilidades:
        </Text>
        <div className="abilities">
          {abilities?.map((ability) => {
            return (
              <div key={`${ability.ability.name}-${ability.slot}`}>
                <Text
                  size="lg"
                  transform="capitalize"
                  onClick={() => navigate(`/ability/${ability.ability.name}`)}
                  className="abilityName"
                >
                  {ability.ability.name.split("-").join(" ")}
                </Text>
              </div>
            );
          })}
        </div>
      </div>

      <div className="statsWrapper">
        <Text size="lg" transform="capitalize">
          Status:
        </Text>
        <div className="statsContainer">
          {stats?.map((stat) => {
            return (
              <div
                className="baseStatWrapper"
                key={`${stat.stat.name}-${stat.effort}`}
              >
                <Text size="lg" transform="capitalize">
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
      <div className="backButton">
        <Button color="delete" onClick={() => navigate(-1)} text={"Voltar"} />
      </div>
    </Container>
  );
}

export default UniquePokemonPage;
