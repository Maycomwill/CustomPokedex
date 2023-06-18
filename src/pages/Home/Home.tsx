import { FormEvent, useState } from "react";
import { Button } from "../../components/Button/Button";
import { RegionsForm } from "../../components/RegionsForm/RegionsForm";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import theme from "../../styles/theme";
import { TypesForm } from "../../components/TypesForm/TypesForm";
import { BackToTop } from "../../components/BackToTop/BackToTop";
import { Spacer } from "../../components/Spacer/Spacer";

export function Home() {
  const screenWidth: number = screen.width;
  const [pokemonRef, setPokemonRef] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    setIsLoading(true);
    try {
      if (pokemonRef !== "") {
        e.preventDefault();
        setTimeout(() => {
          navigate(`/pokemon/${pokemonRef}`);
        }, 1000);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        alert("Digite o nome ou id de um pokemon para pesquisar");
        window.location.reload;
      }
    } catch (error) {
      console.log("Erro ao escolher opção");
    } finally {
    }
  };

  return (
    <Container>
      <div className="search-bar">
        <form action="" className="search-form" onSubmit={handleSearch}>
          {screenWidth < 500 ? (
            <>
              <input
                className="search-input"
                type="text"
                placeholder="Buscar por um pokemon"
                value={pokemonRef}
                onChange={(e) => setPokemonRef(e.target.value)}
              />
              <div className="search-button-wrapper">
                <Button animated text="Buscar" size="small" />
              </div>
            </>
          ) : (
            <>
              <input
                className="search-input"
                type="text"
                placeholder="Buscar por um pokemon por nome ou id"
                value={pokemonRef}
                onChange={(e) => setPokemonRef(e.target.value)}
              />
              <div className="search-button-wrapper">
                {isLoading ? (
                  <Button text="" animated>
                    <Loading color={theme.colors.gray[100]} size={30} />
                  </Button>
                ) : (
                  <Button text="Buscar" animated />
                )}
              </div>
            </>
          )}
        </form>
      </div>
      <div className="filters-wrapper">
        <Spacer className="spacer1"/>
        <div className="regions-wrapper">
          <RegionsForm />
        </div>
        <Spacer className="spacer2"/>
        <div className="types-wrapper">
          <TypesForm />
        </div>
      </div>
      <BackToTop />
    </Container>
  );
}
