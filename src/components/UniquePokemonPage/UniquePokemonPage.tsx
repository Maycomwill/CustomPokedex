import { UniquePokemonData } from "../../context/PokedexContext";
import theme from "../../styles/theme";
import { TextStyled } from "../Text/styles";
import { TypeCard } from "../TypeCard/TypeCard";
import { Container } from "./styles";

interface IUniquePokemonPage extends UniquePokemonData {
  firstType?: string;
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
}: IUniquePokemonPage) {
  // const firstType = types[0].type

  console.log("firstType:", types);

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

  return (
    <Container>
      <div className="spritesDiv">
        <img
          width={300}
          height={300}
          src={checkingIMG(official_artwork)}
          alt={`${name} image`}
        />
      </div>
      <div className="infoWrapper">
        <div className="pokedexInfo">
          <TextStyled size="lg" transform="capitalize">
            Name: {name}
          </TextStyled>
          <TextStyled size="lg" transform="capitalize">
            id: #{addZeroes(id, 3)}
          </TextStyled>
          <TextStyled size="lg" transform="capitalize">
            height: {height * 10}cm
          </TextStyled>
          <TextStyled size="lg" transform="capitalize">
            weight: {weight / 10}kg
          </TextStyled>
        </div>
        <div className="typesWrapper">
          <TextStyled size="lg" transform="capitalize">
            types:
          </TextStyled>
          <div className="typesContainer">
            {types?.map((type) => {
              return <TypeCard pokemonType={type.type} key={type.type} />;
            })}
          </div>
        </div>
      </div>

      <div>
        <TextStyled size="lg" transform="capitalize">Abilities:</TextStyled>
        <div>
          {abilities?.map((ability) => {
            return (
              <div>
                <a
                  href={ability.ability.url}
                  style={{ textDecoration: "none" }}
                >
                  <TextStyled size="lg" transform="capitalize">
                    {ability.ability.name}
                  </TextStyled>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="statsWrapper">
        <TextStyled size="lg" transform="capitalize">Stats:</TextStyled>
        <div>
          {stats?.map((stat) => {
            return (
              <div className="baseStatWrapper" key={stat.stat.name}>
                <TextStyled size="lg" transform="capitalize">{stat.stat.name}</TextStyled>
                <div className="baseStatDiv">
                  <div
                    style={{
                      width: `${stat.base_stat}%`,
                      backgroundColor: `${theme.colors.purple[500]}`,
                      borderRadius: ".4rem",
                    }}
                  >
                    <TextStyled size="md">{stat.base_stat}</TextStyled>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default UniquePokemonPage;
