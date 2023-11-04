import { useNavigate } from "react-router-dom";
import { UniquePokemonData } from "../../interfaces/pokemonInterfaces";
import theme from "../../styles/theme";
import { Button } from "../Button";
import { Text } from "../Text/Text";
import { TypeCard } from "../TypeCard/TypeCard";
import { Container } from "./styles";
import { Spacer } from "../Spacer/Spacer";
import { BackToTop } from "../BackToTop/BackToTop";
import { CaretRight } from "phosphor-react";
import SimpleCardType from "../SimpleCardType/SimpleCardType";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import CustomChart from "../Chart/Chart";

interface IUniquePokemonPage extends UniquePokemonData {
  pressable?: boolean;
}

export default function UniquePokemonPage({
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
  flavor,
  evolution_chain,
  damage_relation,
  pressable,
  gender,
}: IUniquePokemonPage) {
  // Console log para mostrar os tipos do pokemon
  // console.log("damage relation:", damage_relation);

  function checkingIMG(url: string) {
    if (url == null) {
      return sprite_default;
    } else {
      return url;
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

  // console.log("Evolution Chain", evolution_chain);

  if (evolution_chain?.length == 3) {
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
              <Text size="md">{flavor?.split("\f").join(" ")}</Text>
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
              <Text size="md">{(weight * 0.1).toFixed(2)}kg</Text>
            </div>
          </div>

          {abilities?.map((ability) => {
            return (
              <div
                className="infoCard"
                onClick={() => navigate(`/ability/${ability.ability.name}`)}
              >
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
          <span>Status base:</span>
          <div className="statsContainer">
            {stats?.map((stat) => {
              return (
                <div
                  className="baseStatWrapper"
                  key={`${stat.stat.name}-${stat.effort}`}
                >
                  <Text size="md" transform="capitalize">
                    {stat.stat.name.split("-").join(" ")}
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
        <div className="damage-relations">
          {damage_relation.double_damage_from.length === 0 ? null : (
            <div className="all-weakness">
              <Text size="md">Fraquezas:</Text>
              <div className="weakness">
                {/* {damage_relation.double_damage_from.map((type) => {
                if (damage_relation.four_times_damage_from.length > 0) {
                  for (
                    let i = 0;
                    i < damage_relation.four_times_damage_from?.length;
                    i++
                  ) {
                    if (type === damage_relation.four_times_damage_from[i]) {
                      console.log(
                        "teste de comparação",
                        type,
                        damage_relation.four_times_damage_from[i]
                      );
                      return (
                        <CustomTooltip title={type} arrow key={type}>
                          <div>
                            <SimpleCardType
                              pokemonType={type}
                              key={type}
                              double_damage_relation={true}
                            />
                          </div>
                        </CustomTooltip>
                      );
                    } else {
                      return (
                        <CustomTooltip title={type} arrow>
                          <div>
                            <SimpleCardType
                              pokemonType={type}
                              key={type}
                              double_damage_relation={false}
                            />
                          </div>
                        </CustomTooltip>
                      );
                    }
                  }
                } else {
                  <CustomTooltip title={type} arrow>
                    <div>
                      <SimpleCardType
                        pokemonType={type}
                        key={type}
                        double_damage_relation={false}
                      />
                    </div>
                  </CustomTooltip>;
                }
              })} */}
                {damage_relation.double_damage_from.map((type) => {
                  return (
                    <CustomTooltip title={type} arrow key={type}>
                      <div>
                        <SimpleCardType
                          pokemonType={type}
                          key={type}
                          double_damage_relation={false}
                        />
                      </div>
                    </CustomTooltip>
                  );
                })}
              </div>
            </div>
          )}
          {damage_relation.double_damage_to.length === 0 ? null : (
            <div className="all-strengths">
              <Text size="md">Forças:</Text>
              <div className="strengths">
                {/* {damage_relation.double_damage_to.map((type) => {
                  if (damage_relation.four_times_damage_to) {
                    for (
                      let i = 0;
                      i <= damage_relation.four_times_damage_to.length;
                      i++
                    ) {
                      if (type === damage_relation.four_times_damage_to[i]) {
                        console.log(
                          "teste de comparação",
                          type,
                          damage_relation.four_times_damage_to[i]
                        );
                        return (
                          <CustomTooltip title={type} arrow key={type}>
                            <div>
                              <SimpleCardType
                                pokemonType={type}
                                key={type}
                                double_damage_relation={true}
                              />
                            </div>
                          </CustomTooltip>
                        );
                      } else {
                        return (
                          <CustomTooltip title={type} arrow>
                            <div>
                              <SimpleCardType
                                pokemonType={type}
                                key={type}
                                double_damage_relation={false}
                              />
                            </div>
                          </CustomTooltip>
                        );
                      }
                    }
                  }
                })} */}
                {damage_relation.double_damage_to.map((type) => {
                  return (
                    <CustomTooltip key={type} title={type} arrow>
                      <div>
                        <SimpleCardType
                          key={type}
                          pokemonType={type}
                          double_damage_relation={false}
                        />
                      </div>
                    </CustomTooltip>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <Spacer />
        <div className="evolution-chain">
          <Text size="md">Cadeia evolutiva:</Text>
          <div className="evolutions">
            <div className="evolution">
              <img
                src={evolution_chain[0].sprite}
                alt={`${evolution_chain[0].name}`}
              />
              <span>{evolution_chain[0].name}</span>
            </div>
            <div className="separator">
              <span>lv. {evolution_chain[1].min_level}</span>
              <CaretRight size={24} />
            </div>
            <div className="evolution">
              <img
                src={evolution_chain[1].sprite}
                alt={`${evolution_chain[1].name}`}
              />
              <span>{evolution_chain[1].name}</span>
            </div>
            <div className="separator">
              <span>lv. {evolution_chain[2].min_level}</span>
              <CaretRight size={24} />
            </div>
            <div className="evolution">
              <img
                src={evolution_chain[2].sprite}
                alt={`${evolution_chain[2].name}`}
              />
              <span>{evolution_chain[2].name}</span>
            </div>
          </div>
        </div>
        <Spacer />

        <div className="gender-wrapper">
          <Text>Gender ratio</Text>
          <div className="gender-rate">
            {gender ? (
              <CustomChart female={gender.female} male={gender.male} />
            ) : null}
          </div>
        </div>

        <Spacer />

        <div className="backButton">
          <Button.Root backgroundColor="delete" onClick={() => navigate(-1)}>
            <Button.Content text={"Voltar"} />
          </Button.Root>
        </div>

        <BackToTop />
      </Container>
    );
  } else if (evolution_chain?.length == 2) {
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
              <Text size="md">{flavor?.split("\f").join(" ")}</Text>
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
              <Text size="md">{(weight * 0.1).toFixed(2)}kg</Text>
            </div>
          </div>

          {abilities?.map((ability) => {
            return (
              <div
                key={`${ability.ability.name}`}
                className="infoCard"
                onClick={() => navigate(`/ability/${ability.ability.name}`)}
              >
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
          <span>Status base:</span>
          <div className="statsContainer">
            {stats?.map((stat) => {
              return (
                <div
                  className="baseStatWrapper"
                  key={`${stat.stat.name}-${stat.effort}`}
                >
                  <Text size="md" transform="capitalize">
                    {stat.stat.name.split("-").join(" ")}
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
        <div className="damage-relations">
          {damage_relation.double_damage_from.length === 0 ? null : (
            <div className="all-weakness">
              <Text size="md">Fraquezas:</Text>
              <div className="weakness">
                {damage_relation.double_damage_from.map((type) => {
                  return (
                    <CustomTooltip title={type} arrow key={type}>
                      <div>
                        <SimpleCardType
                          double_damage_relation={false}
                          pokemonType={type}
                          key={type}
                        />
                      </div>
                    </CustomTooltip>
                  );
                })}
              </div>
            </div>
          )}
          {damage_relation.double_damage_to.length === 0 ? null : (
            <div className="all-strengths">
              <Text size="md">Forças:</Text>
              <div className="strengths">
                <>
                  {damage_relation.double_damage_to.map((type) => {
                    return (
                      <CustomTooltip title={type} arrow key={type}>
                        <div>
                          <SimpleCardType
                            double_damage_relation={false}
                            pokemonType={type}
                            key={type}
                          />
                        </div>
                      </CustomTooltip>
                    );
                  })}
                </>
              </div>
            </div>
          )}
        </div>
        <Spacer />
        <div className="evolution-chain">
          <Text size="md">Cadeia evolutiva:</Text>
          <div className="evolutions">
            <div className="evolution">
              <img
                src={evolution_chain[0].sprite}
                alt={`${evolution_chain[0].name}`}
              />
              <span>{evolution_chain[0].name}</span>
            </div>
            <div className="separator">
              <span>lv. {evolution_chain[1].min_level}</span>
              <CaretRight size={24} />
            </div>
            <div className="evolution">
              <img
                src={evolution_chain[1].sprite}
                alt={`${evolution_chain[1].name}`}
              />
              <span>{evolution_chain[1].name}</span>
            </div>
          </div>
        </div>

        <Spacer />

        <div className="gender-wrapper">
          <Text>Gender ratio</Text>
          <div className="gender-rate">
            {gender ? (
              <CustomChart female={gender.female} male={gender.male} />
            ) : null}
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
  } else if (evolution_chain?.length == 1) {
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
              <Text size="md">{flavor?.split("\f").join(" ")}</Text>
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
              <Text size="md">{(weight * 0.1).toFixed(2)}kg</Text>
            </div>
          </div>

          {abilities?.map((ability) => {
            return (
              <div
                key={ability.ability.name}
                className="infoCard"
                onClick={() => navigate(`/ability/${ability.ability.name}`)}
              >
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
          <span>Status base:</span>
          <div className="statsContainer">
            {stats?.map((stat) => {
              return (
                <div
                  className="baseStatWrapper"
                  key={`${stat.stat.name}-${stat.effort}`}
                >
                  <Text size="md" transform="capitalize">
                    {stat.stat.name.split("-").join(" ")}
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
        <div className="damage-relations">
          {damage_relation.double_damage_from.length === 0 ? null : (
            <div className="all-weakness">
              <Text size="md">Fraquezas:</Text>
              <div className="weakness">
                {damage_relation.double_damage_from.map((type) => {
                  return (
                    <CustomTooltip title={type} key={type} arrow>
                      <div>
                        <SimpleCardType
                          pokemonType={type}
                          key={type}
                          double_damage_relation={false}
                        />
                      </div>
                    </CustomTooltip>
                  );
                })}
              </div>
            </div>
          )}
          {damage_relation.double_damage_to.length === 0 ? null : (
            <div className="all-strengths">
              <Text size="md">Forças:</Text>
              <div className="strengths">
                <>
                  {damage_relation.double_damage_to.map((type) => {
                    return (
                      <CustomTooltip title={type} arrow key={type}>
                        <div>
                          <SimpleCardType
                            double_damage_relation={false}
                            pokemonType={type}
                            key={type}
                          />
                        </div>
                      </CustomTooltip>
                    );
                  })}
                </>
              </div>
            </div>
          )}
        </div>
        <Spacer />
        <div className="evolution-chain">
          <Text size="md">Cadeia evolutiva:</Text>
          <div className="evolutions">
            <div className="evolution">
              <img
                src={evolution_chain[0].sprite}
                alt={`${evolution_chain[0].name}`}
              />
              <span>{evolution_chain[0].name}</span>
            </div>
          </div>
        </div>

        <Spacer />

        <div className="gender-wrapper">
          <Text>Gender ratio</Text>
          <div className="gender-rate">
            {gender ? (
              <CustomChart female={gender.female} male={gender.male} />
            ) : null}
          </div>
        </div>
        <Spacer />

        <div className="backButton">
          <Button.Root backgroundColor="delete" onClick={() => navigate(-1)}>
            <Button.Content text={"Voltar"} />
          </Button.Root>
        </div>
        <BackToTop />
      </Container>
    );
  } else {
    return null;
  }
}
