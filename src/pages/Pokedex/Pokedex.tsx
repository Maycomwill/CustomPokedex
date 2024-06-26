import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading/Loading";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { usePokedex } from "../../hooks/usePokedex";
import theme from "../../styles/theme";
import { Container } from "./styles";
import { PokemonDataProps } from "../../interfaces/pokemonInterfaces";
import { BackToTop } from "../../components/BackToTop/BackToTop";
import NavButtons from "../../components/NavButtons/NavButtons";
import { DropMenu } from "../../components/DropdownMenu/DropMenu";
import { Text } from "../../components/Text/Text";
import useGeneration from "../../hooks/useGeneration";

export function Pokedex() {
  const params = useParams();
  const navigate = useNavigate();
  let generation = params.generationid;

  const { genTypeFilteredList, handleFilterGenType } = usePokedex();

  const { pokemonData, getGenerationFromUserChoice } = useGeneration();

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  // console.log(genTypeFilteredList);

  let pokemonListFiltered: PokemonDataProps[] = [];

  if (genTypeFilteredList.length > 0) {
    pokemonListFiltered =
      search.length > 0
        ? genTypeFilteredList.filter((pokemon) =>
            pokemon.name.includes(search.toLowerCase())
          )
        : [];
  } else {
    pokemonListFiltered =
      search.length > 0
        ? pokemonData.filter((pokemon) =>
            pokemon.name.includes(search.toLowerCase())
          )
        : [];
  }

  useEffect(() => {
    setIsLoading(true);
    handleFilterGenType("", pokemonData);
    {
      generation && getGenerationFromUserChoice(generation);
    }
    setIsLoading(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [generation]);

  if (isLoading || pokemonData.length === 0) {
    return <Loading size={64} color={theme.colors.primary[500]} />;
  } else {
    if (genTypeFilteredList.length == 0) {
      return (
        <Container>
          <div className="generationDiv">
            <Text size="xl">{params.generationid}ª Geração</Text>
            <div>
              <Button.Root
                backgroundColor="delete"
                onClick={() => navigate(-1)}
                size="small"
              >
                <Button.Content text={"Voltar"} />
              </Button.Root>
            </div>
          </div>
          <div className="filtersWrapper">
            <div className="blankDiv"></div>
            <div className="inputWrapper">
              <form>
                <input
                  type="text"
                  placeholder="Digite o nome do pokemon"
                  name="search"
                  className="searchInput"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </form>
            </div>
            <div className="filtersDiv">
              <DropMenu pokemonArray={pokemonData}/>
            </div>
          </div>
          {search.length > 0 ? (
            <div className="pokemonCard-wrapper">
              {pokemonListFiltered
                .sort((a, b) => {
                  if (a > b) return 1;
                  if (a < b) return 0;
                  return 0;
                })
                .map((pokemon: PokemonDataProps) => {
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
          ) : (
            <div className="pokemonCard-wrapper">
              {pokemonData
                .sort((a, b) => {
                  if (a > b) return 1;
                  if (a < b) return 0;
                  return 0;
                })
                .map((pokemon: PokemonDataProps) => {
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
          )}
          <BackToTop />
          <NavButtons />
        </Container>
      );
    } else {
      return (
        <Container>
          <div className="generationDiv">
            <Text size="lg">{params.generationid}ª Geração</Text>
            <div>
              <Button.Root
                backgroundColor="delete"
                onClick={() => navigate(-1)}
                size="small"
              >
                <Button.Content text={"Voltar"} />
              </Button.Root>
            </div>
          </div>
          <div className="filtersWrapper">
            <div className="blankDiv"></div>
            <div className="inputWrapper">
              <form>
                <input
                  type="text"
                  placeholder="Digite o nome do pokemon"
                  className="searchInput"
                  name="search"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </form>
            </div>
            <div className="filtersDiv">
              <DropMenu pokemonArray={pokemonData}/>
            </div>
          </div>

          {search.length > 0 ? (
            <div className="pokemonCard-wrapper">
              {pokemonListFiltered
                .sort((a, b) => {
                  if (a > b) return 1;
                  if (a < b) return 0;
                  return 0;
                })
                .map((pokemon: PokemonDataProps) => {
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
          ) : (
            <div className="pokemonCard-wrapper">
              {genTypeFilteredList
                .sort((a, b) => {
                  if (a > b) return 1;
                  if (a < b) return 0;
                  return 0;
                })
                .map((pokemon: PokemonDataProps) => {
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
          )}
          <BackToTop />
          <NavButtons />
        </Container>
      );
    }
  }
}
