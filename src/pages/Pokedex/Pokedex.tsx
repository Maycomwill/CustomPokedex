import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Loading } from "../../components/Loading/Loading";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { TextStyled } from "../../components/Text/styles";
import { usePokedex } from "../../hooks/usePokedex";
import theme from "../../styles/theme";
import { Container } from "./styles";
import { PokemonDataProps } from "../../context/PokedexContext";

export function Pokedex() {
  const params = useParams();
  const navigate = useNavigate();
  let generation = params.generationid;

  const { getPokedexList, pokemonData } = usePokedex();

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const pokemonListFiltered =
    search.length > 0
      ? pokemonData.filter((pokemon) => pokemon.name.includes(search))
      : [];

  useEffect(() => {
    setIsLoading(true);
    getPokedexList(generation);
    setIsLoading(false);
  }, []);

  if (isLoading || pokemonData.length === 0) {
    return <Loading size={64} color={theme.colors.yellow[500]} />;
  } else {
    return (
      <Container>
        <div className="generationDiv">
          <TextStyled size="xlg">{params.generationid}ª Geração</TextStyled>
          <div>
            <Button color="delete" onClick={() => history.back()}>
              Voltar
            </Button>
          </div>
        </div>
        <div className="inputWrapper">
          <form>
            <label htmlFor="searchInput">
              <TextStyled size="lg">Filtre a lista pelo nome dos pokemon</TextStyled>
            </label>
            <input
              type="text"
              placeholder="Digite o nome do pokemon"
              id="searchInput"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </form>
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
                    key={pokemon.id}
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
                    key={pokemon.id}
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

        <div className="backButton">
          <Button color="delete" onClick={() => navigate("/")}>
            Voltar
          </Button>
        </div>
      </Container>
    );
  }
}
